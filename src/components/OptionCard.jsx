/**
 * Reusable option card component for customization selections
 */
export default function OptionCard({ 
  title, 
  description, 
  price, 
  isSelected, 
  onClick,
  badge 
}) {
  return (
    <button
      onClick={onClick}
      className={`
        relative w-full p-4 rounded-lg border-2 transition-all duration-200
        text-left hover:shadow-lg
        ${isSelected 
          ? 'border-warm-500 bg-warm-50 shadow-md' 
          : 'border-gray-200 bg-white hover:border-warm-300'
        }
      `}
    >
      {badge && (
        <span className="absolute top-2 right-2 bg-warm-500 text-white text-xs px-2 py-1 rounded-full">
          {badge}
        </span>
      )}
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-semibold text-gray-900">{title}</h3>
        <span className="text-warm-600 font-bold ml-2">
          {price > 0 ? `+€${price}` : 'Included'}
        </span>
      </div>
      {description && (
        <p className="text-sm text-gray-600">{description}</p>
      )}
      {isSelected && (
        <div className="mt-2 flex items-center text-warm-600 text-sm">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          Selected
        </div>
      )}
    </button>
  )
}

