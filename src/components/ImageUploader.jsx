import { useState, useRef } from 'react'

/**
 * Image uploader component with drag & drop
 * Handles file validation and stores image as data URL in localStorage (demo mode)
 */
export default function ImageUploader({ onUploadSuccess, onUploadError }) {
  const [isDragging, setIsDragging] = useState(false)
  const [isUploading, setIsUploading] = useState(false)
  const [preview, setPreview] = useState(null)
  const [error, setError] = useState(null)
  const fileInputRef = useRef(null)

  const validateFile = (file) => {
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png']
    const maxSize = 10 * 1024 * 1024 // 10MB

    if (!validTypes.includes(file.type)) {
      return { valid: false, error: 'Please upload a JPG or PNG image' }
    }

    if (file.size > maxSize) {
      return { valid: false, error: 'Image size must be less than 10MB' }
    }

    return { valid: true }
  }

  const handleFile = (file) => {
    setError(null)
    const validation = validateFile(file)
    
    if (!validation.valid) {
      setError(validation.error)
      if (onUploadError) onUploadError(validation.error)
      return
    }

    // Create preview and convert to data URL
    setIsUploading(true)
    const reader = new FileReader()
    
    reader.onload = (e) => {
      const dataUrl = e.target.result
      setPreview(dataUrl)
      
      // Generate unique file name
      const fileExt = file.name.split('.').pop()
      const fileName = `${Math.random().toString(36).substring(2)}_${Date.now()}.${fileExt}`
      const filePath = `demo/uploads/${fileName}`

      // Store in localStorage for demo (limited to ~5MB per item)
      try {
        // For demo: store as data URL
        // In production, this would upload to Supabase/cloud storage
        if (onUploadSuccess) {
          onUploadSuccess({
            url: dataUrl, // Use data URL for demo
            path: filePath,
            fileName: fileName,
            fileSize: file.size,
          })
        }
      } catch (err) {
        const errorMessage = 'Image too large for demo storage. Please use a smaller image.'
        setError(errorMessage)
        if (onUploadError) onUploadError(errorMessage)
      } finally {
        setIsUploading(false)
      }
    }
    
    reader.onerror = () => {
      const errorMessage = 'Failed to read file. Please try again.'
      setError(errorMessage)
      if (onUploadError) onUploadError(errorMessage)
      setIsUploading(false)
    }
    
    reader.readAsDataURL(file)
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setIsDragging(false)
    
    const file = e.dataTransfer.files[0]
    if (file) handleFile(file)
  }

  const handleFileSelect = (e) => {
    const file = e.target.files[0]
    if (file) handleFile(file)
  }

  return (
    <div className="w-full">
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
        className={`
          relative border-2 border-dashed rounded-lg p-8 text-center cursor-pointer
          transition-all duration-200
          ${isDragging 
            ? 'border-warm-500 bg-warm-50' 
            : 'border-gray-300 hover:border-warm-400 hover:bg-warm-50/50'
          }
          ${isUploading ? 'opacity-50 cursor-not-allowed' : ''}
        `}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="image/jpeg,image/jpg,image/png"
          onChange={handleFileSelect}
          className="hidden"
          disabled={isUploading}
        />

        {isUploading ? (
          <div className="flex flex-col items-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-warm-500 mb-4"></div>
            <p className="text-gray-600">Uploading your photo...</p>
          </div>
        ) : preview ? (
          <div className="space-y-4">
            <img 
              src={preview} 
              alt="Preview" 
              className="max-h-64 mx-auto rounded-lg shadow-md"
            />
            <p className="text-sm text-gray-600">Click to upload a different photo</p>
          </div>
        ) : (
          <div className="space-y-4">
            <svg 
              className="mx-auto h-12 w-12 text-gray-400" 
              stroke="currentColor" 
              fill="none" 
              viewBox="0 0 48 48"
            >
              <path 
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
              />
            </svg>
            <div>
              <p className="text-lg font-medium text-gray-700">
                Drag & drop your photo here
              </p>
              <p className="text-sm text-gray-500 mt-1">
                or click to browse
              </p>
            </div>
            <p className="text-xs text-gray-400">
              JPG or PNG, max 10MB
            </p>
          </div>
        )}
      </div>

      {error && (
        <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-sm text-red-600">{error}</p>
        </div>
      )}
    </div>
  )
}

