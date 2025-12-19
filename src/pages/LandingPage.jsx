import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Lightbox from '../components/Lightbox'
import StickyCTA from '../components/StickyCTA'

/**
 * Landing Page - Main entry point
 * Sections: Hero, Gallery, How It Works, Social Proof, CTA
 */
export default function LandingPage() {
  const navigate = useNavigate()
  const [lightboxImage, setLightboxImage] = useState(null)

  // Sample gallery images (replace with actual images from Supabase)
  const galleryImages = [
    'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400',
    'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400',
    'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400',
    'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400',
    'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400',
    'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400',
  ]

  const testimonials = [
    {
      name: 'Sarah M.',
      rating: 5,
      text: 'Absolutely stunning! The warm LED light makes our family photo come alive. Perfect gift!',
    },
    {
      name: 'Michael K.',
      rating: 5,
      text: 'Incredible detail and quality. Fast shipping and beautiful packaging. Highly recommend!',
    },
    {
      name: 'Emma L.',
      rating: 5,
      text: 'My mom cried when she saw it. The memories truly shine through. Worth every euro!',
    },
  ]

  const handleUploadClick = () => {
    navigate('/upload')
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-warm-100 via-warm-50 to-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 text-balance">
              Turn Your Memories Into
              <span className="text-warm-600 block">Beautiful Light</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 text-balance">
              Create stunning 3D printed lithophane photos with warm LED lighting.
              Perfect gifts that bring your most precious moments to life.
            </p>
            <button
              onClick={handleUploadClick}
              className="bg-warm-500 hover:bg-warm-600 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Upload Your Photo
            </button>
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-warm-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Free Shipping
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-warm-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                30-Day Guarantee
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-warm-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Premium Quality
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            See Your Memories Shine
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((img, idx) => (
              <div
                key={idx}
                onClick={() => setLightboxImage(img)}
                className="aspect-square rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity shadow-md"
              >
                <img 
                  src={img} 
                  alt={`Gallery ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-warm-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-warm-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Upload Your Photo</h3>
              <p className="text-gray-600">
                Simply drag and drop your favorite photo. We support JPG and PNG formats.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-warm-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Customize & Price</h3>
              <p className="text-gray-600">
                Choose your options and see real-time pricing. From basic to ultra-premium.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-warm-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">We Print & Ship</h3>
              <p className="text-gray-600">
                We handle the 3D printing and ship your beautiful lithophane directly to you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Loved by Thousands
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-warm-50 rounded-lg p-6 shadow-sm">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-warm-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <p className="text-sm font-semibold text-gray-900">— {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-br from-warm-500 to-warm-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Create Something Beautiful?
          </h2>
          <p className="text-xl mb-8 text-warm-100">
            Start your custom lithophane journey today
          </p>
          <button
            onClick={handleUploadClick}
            className="bg-white text-warm-600 hover:bg-warm-50 font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Upload Your Photo Now
          </button>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <Lightbox image={lightboxImage} onClose={() => setLightboxImage(null)} />
      )}

      {/* Sticky CTA for Mobile */}
      <StickyCTA onClick={handleUploadClick} />
    </div>
  )
}

