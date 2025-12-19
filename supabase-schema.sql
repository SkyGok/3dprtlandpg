-- Supabase Database Schema for 3D Lithophane Printing Business
-- Run this SQL in your Supabase SQL Editor

-- ============================================
-- STORAGE BUCKET: photos
-- ============================================
-- Create storage bucket for uploaded photos
-- Go to Storage > Create Bucket
-- Bucket name: photos
-- Public: Yes (or configure RLS policies as needed)

-- Storage policies (if using RLS):
-- Policy: Allow public uploads
-- INSERT: true (for authenticated users or public, depending on your needs)
-- SELECT: true (for public access to images)

-- ============================================
-- TABLE: orders
-- ============================================
CREATE TABLE IF NOT EXISTS orders (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  image_url TEXT NOT NULL,
  image_path TEXT NOT NULL,
  options JSONB NOT NULL, -- Stores {filament, quality, lighting, delivery}
  price_breakdown JSONB NOT NULL, -- Stores {base, upgrades, subtotal, total}
  total_price DECIMAL(10, 2) NOT NULL,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'processing', 'printed', 'shipped', 'delivered', 'cancelled')),
  customer_email TEXT,
  customer_name TEXT,
  shipping_address JSONB,
  stripe_payment_intent_id TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index for faster queries
CREATE INDEX IF NOT EXISTS idx_orders_status ON orders(status);
CREATE INDEX IF NOT EXISTS idx_orders_created_at ON orders(created_at DESC);

-- ============================================
-- TABLE: customers (optional - for returning customers)
-- ============================================
CREATE TABLE IF NOT EXISTS customers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  name TEXT,
  phone TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- ROW LEVEL SECURITY (RLS) Policies
-- ============================================
-- Enable RLS on orders table
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

-- Policy: Allow anyone to insert orders (for guest checkout)
CREATE POLICY "Allow public order creation" ON orders
  FOR INSERT
  WITH CHECK (true);

-- Policy: Allow users to read their own orders (if authenticated)
-- Uncomment and modify if using authentication:
-- CREATE POLICY "Users can view own orders" ON orders
--   FOR SELECT
--   USING (auth.uid()::text = customer_id);

-- ============================================
-- FUNCTION: Update updated_at timestamp
-- ============================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger to auto-update updated_at
CREATE TRIGGER update_orders_updated_at BEFORE UPDATE ON orders
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- SAMPLE DATA (Optional - for testing)
-- ============================================
-- INSERT INTO orders (
--   image_url,
--   image_path,
--   options,
--   price_breakdown,
--   total_price,
--   status
-- ) VALUES (
--   'https://example.com/photo.jpg',
--   'uploads/sample.jpg',
--   '{"filament": "premium", "quality": "high", "lighting": "warm", "delivery": "standard"}'::jsonb,
--   '{"base": 39, "upgrades": {"filament": 8, "quality": 10, "lighting": 7, "delivery": 0}, "subtotal": 25, "total": 64}'::jsonb,
--   64.00,
--   'pending'
-- );

