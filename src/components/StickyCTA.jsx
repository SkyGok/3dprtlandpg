/**
 * Sticky CTA button for mobile users
 */
export default function StickyCTA({ onClick, label = "Upload Your Photo" }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="bg-white border-t border-gray-200 shadow-lg p-4">
        <button
          onClick={onClick}
          className="w-full bg-warm-500 hover:bg-warm-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md"
        >
          {label}
        </button>
      </div>
    </div>
  )
}

