# Quick Setup Guide (Demo Version)

## 🚀 Super Quick Start (No Backend Required!)

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

### 3. Open in Browser

Navigate to `http://localhost:5173`

**That's it!** The demo works entirely in your browser with localStorage.

## ✅ Test the Flow

1. **Landing Page** (`/`) - View hero, gallery, testimonials
2. **Upload Page** (`/upload`) - Upload a test image (drag & drop or click)
3. **Customize Page** (`/customize`) - Select options and see real-time pricing
4. **Checkout** - Order is saved to localStorage (check browser console)

## 🔍 View Demo Data

Open browser console (F12) and run:

```javascript
// View all orders
JSON.parse(localStorage.getItem('demo_orders') || '[]')

// View current uploaded image
JSON.parse(sessionStorage.getItem('uploadedImage') || 'null')

// Clear all demo data
localStorage.removeItem('demo_orders')
sessionStorage.clear()
```

## ⚠️ Demo Limitations

- Images stored as data URLs (base64) - may be slow for large files
- Orders saved to localStorage (browser-specific, ~5-10MB limit)
- Data is temporary (cleared if you clear browser data)

## 🔄 Upgrading to Production (Supabase)

If you want to use Supabase for production:

1. **Install Supabase:**
   ```bash
   npm install @supabase/supabase-js
   ```

2. **Create `.env` file:**
   ```env
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

3. **Set up Supabase:**
   - Create project at [supabase.com](https://supabase.com)
   - Run `supabase-schema.sql` in SQL Editor
   - Create `photos` storage bucket
   - Update `ImageUploader.jsx` and `CustomizePage.jsx` to use Supabase

See `README.md` for full production setup instructions.

## 🎯 Next Steps

- Replace gallery images with actual lithophane photos
- Update testimonials with real customer reviews
- Integrate Stripe for payment processing
- Add email notifications for order confirmations
- Set up analytics tracking

