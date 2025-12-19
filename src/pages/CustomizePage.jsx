import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import OptionCard from '../components/OptionCard'
import PriceSummary from '../components/PriceSummary'
import { calculatePrice } from '../utils/pricing'

/**
 * Customization & Pricing Page
 * Real-time price calculation based on selected options
 * Demo mode: saves orders to localStorage instead of Supabase
 */
export default function CustomizePage() {
  const navigate = useNavigate()
  const [uploadedImage, setUploadedImage] = useState(null)
  const [options, setOptions] = useState({
    filament: 'basic',
    quality: 'standard',
    lighting: 'basic',
    delivery: 'standard',
  })

  useEffect(() => {
    // Retrieve uploaded image from sessionStorage
    const imageData = sessionStorage.getItem('uploadedImage')
    if (imageData) {
      setUploadedImage(JSON.parse(imageData))
    } else {
      // If no image, redirect to upload page
      navigate('/upload')
    }
  }, [navigate])

  const handleOptionChange = (category, value) => {
    setOptions(prev => ({
      ...prev,
      [category]: value,
    }))
  }

  const handleCheckout = () => {
    if (!uploadedImage) return

    const priceBreakdown = calculatePrice(options)

    // Prepare order data
    const orderData = {
      id: `demo_${Date.now()}_${Math.random().toString(36).substring(2)}`,
      image_url: uploadedImage.url,
      image_path: uploadedImage.path,
      options: options,
      price_breakdown: priceBreakdown,
      total_price: priceBreakdown.total,
      status: 'pending',
      created_at: new Date().toISOString(),
    }

    try {
      // Save order to localStorage (demo mode)
      // In production, this would save to Supabase
      const existingOrders = JSON.parse(localStorage.getItem('demo_orders') || '[]')
      existingOrders.push(orderData)
      localStorage.setItem('demo_orders', JSON.stringify(existingOrders))

      // Store current order in sessionStorage for checkout
      sessionStorage.setItem('currentOrder', JSON.stringify(orderData))

      // Show success message
      alert(
        `✅ Order Created Successfully!\n\n` +
        `Total: €${priceBreakdown.total.toFixed(2)}\n` +
        `Order ID: ${orderData.id}\n\n` +
        `(Demo mode: Order saved to localStorage)\n` +
        `Ready for Stripe integration in production.`
      )
      
      // Optionally redirect to a checkout page
      // navigate('/checkout')
    } catch (error) {
      console.error('Error creating order:', error)
      alert('Error creating order. Please try again.')
    }
  }

  if (!uploadedImage) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  const priceBreakdown = calculatePrice(options)

  return (
    <div className="min-h-screen bg-warm-50 py-8 px-4 pb-24 md:pb-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Customize Your Lithophane
          </h1>
          <p className="text-gray-600">
            Choose your options and see the price update in real-time
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Column - Customization Options */}
          <div className="md:col-span-2 space-y-8">
            {/* Image Preview */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4 text-gray-900">Your Photo</h2>
              <img 
                src={uploadedImage.url} 
                alt="Uploaded" 
                className="w-full max-h-64 object-contain rounded-lg"
              />
            </div>

            {/* Filament Quality */}
            <div>
              <h2 className="text-xl font-semibold mb-4 text-gray-900">Filament Quality</h2>
              <div className="space-y-3">
                <OptionCard
                  title="Basic PLA"
                  description="Standard white filament - great for most photos"
                  price={0}
                  isSelected={options.filament === 'basic'}
                  onClick={() => handleOptionChange('filament', 'basic')}
                />
                <OptionCard
                  title="Premium PLA+"
                  description="Better detail & durability - recommended"
                  price={8}
                  isSelected={options.filament === 'premium'}
                  onClick={() => handleOptionChange('filament', 'premium')}
                  badge="Popular"
                />
                <OptionCard
                  title="Ultra Detail Resin-like"
                  description="Maximum sharpness - for the finest details"
                  price={18}
                  isSelected={options.filament === 'ultra'}
                  onClick={() => handleOptionChange('filament', 'ultra')}
                  badge="Premium"
                />
              </div>
            </div>

            {/* Print Quality */}
            <div>
              <h2 className="text-xl font-semibold mb-4 text-gray-900">Print Quality (Layer Height)</h2>
              <div className="space-y-3">
                <OptionCard
                  title="Standard"
                  description="0.28mm layer height - good quality"
                  price={0}
                  isSelected={options.quality === 'standard'}
                  onClick={() => handleOptionChange('quality', 'standard')}
                />
                <OptionCard
                  title="High Quality"
                  description="0.20mm layer height - sharper details"
                  price={10}
                  isSelected={options.quality === 'high'}
                  onClick={() => handleOptionChange('quality', 'high')}
                />
                <OptionCard
                  title="Ultra HD"
                  description="0.12mm layer height - maximum precision"
                  price={20}
                  isSelected={options.quality === 'ultra'}
                  onClick={() => handleOptionChange('quality', 'ultra')}
                  badge="Best"
                />
              </div>
            </div>

            {/* Lighting Quality */}
            <div>
              <h2 className="text-xl font-semibold mb-4 text-gray-900">Lighting Quality</h2>
              <div className="space-y-3">
                <OptionCard
                  title="Basic LED"
                  description="Cold white LED - included"
                  price={0}
                  isSelected={options.lighting === 'basic'}
                  onClick={() => handleOptionChange('lighting', 'basic')}
                />
                <OptionCard
                  title="Warm LED"
                  description="Soft ambient light - creates cozy atmosphere"
                  price={7}
                  isSelected={options.lighting === 'warm'}
                  onClick={() => handleOptionChange('lighting', 'warm')}
                  badge="Recommended"
                />
                <OptionCard
                  title="Smart Dimmable LED"
                  description="Touch control & dimming - premium experience"
                  price={15}
                  isSelected={options.lighting === 'smart'}
                  onClick={() => handleOptionChange('lighting', 'smart')}
                  badge="Premium"
                />
              </div>
            </div>

            {/* Delivery Speed */}
            <div>
              <h2 className="text-xl font-semibold mb-4 text-gray-900">Delivery Speed</h2>
              <div className="space-y-3">
                <OptionCard
                  title="Standard"
                  description="7-10 business days"
                  price={0}
                  isSelected={options.delivery === 'standard'}
                  onClick={() => handleOptionChange('delivery', 'standard')}
                />
                <OptionCard
                  title="Fast"
                  description="3-5 business days"
                  price={15}
                  isSelected={options.delivery === 'fast'}
                  onClick={() => handleOptionChange('delivery', 'fast')}
                />
                <OptionCard
                  title="Express"
                  description="24-48 hours - rush order"
                  price={30}
                  isSelected={options.delivery === 'express'}
                  onClick={() => handleOptionChange('delivery', 'express')}
                />
              </div>
            </div>
          </div>

          {/* Right Column - Price Summary (Sticky on desktop) */}
          <div className="md:col-span-1">
            <div className="md:sticky md:top-8">
              <PriceSummary options={options} />
              
              <button
                onClick={handleCheckout}
                className="w-full mt-6 bg-warm-500 hover:bg-warm-600 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Proceed to Checkout
              </button>

              <div className="mt-6 p-4 bg-warm-50 rounded-lg border border-warm-200">
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-warm-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  <div className="text-sm text-gray-700">
                    <p className="font-semibold mb-1">30-Day Money-Back Guarantee</p>
                    <p className="text-gray-600">Free shipping on all orders. Secure checkout.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

