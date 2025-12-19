import { calculatePrice } from '../utils/pricing'

/**
 * Price summary component showing itemized breakdown and total
 */
export default function PriceSummary({ options }) {
  const priceBreakdown = calculatePrice(options)

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
      <h3 className="text-lg font-semibold mb-4 text-gray-900">Price Summary</h3>
      
      <div className="space-y-3 mb-4">
        <div className="flex justify-between text-gray-700">
          <span>Base Price</span>
          <span className="font-medium">€{priceBreakdown.base.toFixed(2)}</span>
        </div>
        
        {priceBreakdown.upgrades.filament > 0 && (
          <div className="flex justify-between text-gray-600 text-sm">
            <span>Filament Upgrade</span>
            <span>+€{priceBreakdown.upgrades.filament.toFixed(2)}</span>
          </div>
        )}
        
        {priceBreakdown.upgrades.quality > 0 && (
          <div className="flex justify-between text-gray-600 text-sm">
            <span>Print Quality Upgrade</span>
            <span>+€{priceBreakdown.upgrades.quality.toFixed(2)}</span>
          </div>
        )}
        
        {priceBreakdown.upgrades.lighting > 0 && (
          <div className="flex justify-between text-gray-600 text-sm">
            <span>Lighting Upgrade</span>
            <span>+€{priceBreakdown.upgrades.lighting.toFixed(2)}</span>
          </div>
        )}
        
        {priceBreakdown.upgrades.delivery > 0 && (
          <div className="flex justify-between text-gray-600 text-sm">
            <span>Delivery Upgrade</span>
            <span>+€{priceBreakdown.upgrades.delivery.toFixed(2)}</span>
          </div>
        )}
      </div>

      <div className="border-t border-gray-200 pt-4 mt-4">
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold text-gray-900">Total</span>
          <span className="text-2xl font-bold text-warm-600">
            €{priceBreakdown.total.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  )
}

