/**
 * Pricing calculation logic
 * Base price: €39
 * Adds selected upgrade costs
 */

const BASE_PRICE = 39

// Upgrade pricing
export const PRICING = {
  filament: {
    basic: 0,
    premium: 8,
    ultra: 18,
  },
  quality: {
    standard: 0,
    high: 10,
    ultra: 20,
  },
  lighting: {
    basic: 0,
    warm: 7,
    smart: 15,
  },
  delivery: {
    standard: 0,
    fast: 15,
    express: 30,
  },
}

/**
 * Calculate total price based on selected options
 * @param {Object} options - Selected customization options
 * @returns {Object} - Price breakdown and total
 */
export function calculatePrice(options) {
  const {
    filament = 'basic',
    quality = 'standard',
    lighting = 'basic',
    delivery = 'standard',
  } = options

  const filamentPrice = PRICING.filament[filament] || 0
  const qualityPrice = PRICING.quality[quality] || 0
  const lightingPrice = PRICING.lighting[lighting] || 0
  const deliveryPrice = PRICING.delivery[delivery] || 0

  const upgrades = filamentPrice + qualityPrice + lightingPrice + deliveryPrice
  const total = BASE_PRICE + upgrades

  return {
    base: BASE_PRICE,
    upgrades: {
      filament: filamentPrice,
      quality: qualityPrice,
      lighting: lightingPrice,
      delivery: deliveryPrice,
    },
    subtotal: upgrades,
    total,
  }
}

