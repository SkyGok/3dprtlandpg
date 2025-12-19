# Demo Mode Guide

This project works **entirely in your browser** without any backend setup!

## 🎯 What Works

✅ **Landing Page** - Full hero, gallery, testimonials  
✅ **Photo Upload** - Drag & drop with validation  
✅ **Image Preview** - See your uploaded photo  
✅ **Customization** - All 4 option categories  
✅ **Real-time Pricing** - Live price updates  
✅ **Order Creation** - Saves to localStorage  

## 📦 How It Works

### Image Storage
- Images are converted to **data URLs** (base64)
- Stored in `sessionStorage` for the current session
- No file upload to server needed

### Order Storage
- Orders are saved to `localStorage` with key `demo_orders`
- Each order includes:
  - Image data URL
  - Selected options
  - Price breakdown
  - Order ID and timestamp

## 🔍 Viewing Demo Data

### In Browser Console:

**View all orders:**
```javascript
JSON.parse(localStorage.getItem('demo_orders') || '[]')
```

**View current uploaded image:**
```javascript
JSON.parse(sessionStorage.getItem('uploadedImage') || 'null')
```

**View current order:**
```javascript
JSON.parse(sessionStorage.getItem('currentOrder') || 'null')
```

**Clear all demo data:**
```javascript
localStorage.removeItem('demo_orders')
sessionStorage.clear()
```

## ⚠️ Limitations

- **Image size**: Large images may cause performance issues (recommended < 5MB)
- **Storage limits**: localStorage has ~5-10MB limit per domain
- **Persistence**: Data is browser-specific (cleared if you clear browser data)
- **No server**: Images and orders only exist in your browser

## 🚀 Perfect For

- **Demos & Presentations** - Show the full flow without setup
- **Development** - Test UI/UX without backend
- **Prototyping** - Validate design and pricing logic
- **Client Reviews** - Share working prototype quickly

## 🔄 Next Steps

When ready for production:
1. Set up Supabase (see `supabase-schema.sql`)
2. Update `ImageUploader.jsx` to upload to Supabase Storage
3. Update `CustomizePage.jsx` to save to Supabase database
4. Add environment variables
5. Deploy!

