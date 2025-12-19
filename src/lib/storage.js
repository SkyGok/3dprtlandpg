/**
 * Local storage utilities for demo mode
 * In production, replace with Supabase storage
 */

/**
 * Save order to localStorage
 */
export function saveOrder(orderData) {
  try {
    const existingOrders = JSON.parse(localStorage.getItem('demo_orders') || '[]')
    existingOrders.push(orderData)
    localStorage.setItem('demo_orders', JSON.stringify(existingOrders))
    return { success: true, data: orderData }
  } catch (error) {
    return { success: false, error: error.message }
  }
}

/**
 * Get all orders from localStorage
 */
export function getOrders() {
  try {
    return JSON.parse(localStorage.getItem('demo_orders') || '[]')
  } catch (error) {
    console.error('Error reading orders:', error)
    return []
  }
}

/**
 * Clear all demo data
 */
export function clearDemoData() {
  localStorage.removeItem('demo_orders')
  sessionStorage.removeItem('uploadedImage')
  sessionStorage.removeItem('currentOrder')
}

