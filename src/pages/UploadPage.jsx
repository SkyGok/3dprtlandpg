import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ImageUploader from '../components/ImageUploader'

/**
 * Photo Upload Page
 * Handles image upload and redirects to customization page
 */
export default function UploadPage() {
  const navigate = useNavigate()
  const [uploadedImage, setUploadedImage] = useState(null)

  const handleUploadSuccess = (imageData) => {
    // Store image data in sessionStorage for next page
    sessionStorage.setItem('uploadedImage', JSON.stringify(imageData))
    setUploadedImage(imageData)
    
    // Redirect to customization page after a brief delay
    setTimeout(() => {
      navigate('/customize')
    }, 1000)
  }

  const handleUploadError = (error) => {
    console.error('Upload error:', error)
    // Error is already displayed by ImageUploader component
  }

  return (
    <div className="min-h-screen bg-warm-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Upload Your Photo
            </h1>
            <p className="text-gray-600">
              Choose a high-quality photo for the best results. We'll transform it into a beautiful 3D lithophane.
            </p>
          </div>

          <ImageUploader 
            onUploadSuccess={handleUploadSuccess}
            onUploadError={handleUploadError}
          />

          {uploadedImage && (
            <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="text-green-700 font-medium">
                  Photo uploaded successfully! Redirecting to customization...
                </p>
              </div>
            </div>
          )}

          <div className="mt-8 pt-6 border-t border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-3">Tips for Best Results:</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start">
                <span className="text-warm-500 mr-2">•</span>
                <span>Use high-resolution photos (at least 1000x1000px)</span>
              </li>
              <li className="flex items-start">
                <span className="text-warm-500 mr-2">•</span>
                <span>Clear, well-lit photos work best</span>
              </li>
              <li className="flex items-start">
                <span className="text-warm-500 mr-2">•</span>
                <span>Portraits and family photos are perfect for lithophanes</span>
              </li>
              <li className="flex items-start">
                <span className="text-warm-500 mr-2">•</span>
                <span>JPG or PNG format only</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

