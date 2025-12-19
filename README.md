# 3D Lithophane Printing Landing Page (Demo Version)

A modern, conversion-focused landing page and pricing flow for a 3D lithophane printing business. Built with React, Vite, and TailwindCSS. **Demo version works entirely in the browser with localStorage - no backend required!**

## 🚀 Features

- **Landing Page** with hero, gallery, how-it-works, and social proof sections
- **Photo Upload** with drag & drop, validation, and local storage (data URLs)
- **Real-time Pricing** calculator with live updates based on customization options
- **Mobile-first Design** with sticky CTA for mobile users
- **LocalStorage Demo Mode** - works without any backend setup
- **Stripe-ready** checkout structure

## 🛠️ Tech Stack

- **Frontend**: React 18
- **Bundler**: Vite
- **Styling**: TailwindCSS
- **Storage**: localStorage (demo mode)
- **Routing**: React Router v6

## 📦 Quick Start (No Setup Required!)

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   - Navigate to `http://localhost:5173`
   - Upload a photo, customize options, and see real-time pricing!
   - All data is stored locally in your browser

**That's it!** No Supabase setup, no environment variables, no database configuration needed for the demo.

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── ImageUploader.jsx
│   ├── Lightbox.jsx
│   ├── OptionCard.jsx
│   ├── PriceSummary.jsx
│   └── StickyCTA.jsx
├── lib/
│   └── storage.js       # LocalStorage utilities (demo mode)
├── pages/               # Page components
│   ├── LandingPage.jsx
│   ├── UploadPage.jsx
│   └── CustomizePage.jsx
├── utils/
│   └── pricing.js       # Pricing calculation logic
├── App.jsx              # Main app with routing
├── main.jsx             # Entry point
└── index.css            # Global styles
```

## 💰 Pricing Structure

**Base Price**: €39

**Upgrades:**
- **Filament**: Basic (€0) | Premium (€8) | Ultra (€18)
- **Print Quality**: Standard (€0) | High (€10) | Ultra HD (€20)
- **Lighting**: Basic (€0) | Warm (€7) | Smart (€15)
- **Delivery**: Standard (€0) | Fast (€15) | Express (€30)

## 🎨 Design Philosophy

- **Warm color palette** matching lithophane light theme
- **Mobile-first** responsive design
- **Trust signals** (shipping, guarantee badges)
- **Emotional messaging** focused on memories and gifts
- **Fast loading** and clear CTAs for cold traffic

## 💾 Demo Mode Storage

**Current Implementation:**
- Images are stored as data URLs in `sessionStorage`
- Orders are saved to `localStorage` (key: `demo_orders`)
- No backend required - works entirely in the browser

**To View Demo Orders:**
Open browser console and run:
```javascript
JSON.parse(localStorage.getItem('demo_orders') || '[]')
```

**To Clear Demo Data:**
```javascript
localStorage.removeItem('demo_orders')
sessionStorage.clear()
```

## 🔄 Upgrading to Production (Supabase)

To use Supabase in production:

1. **Install Supabase:**
   ```bash
   npm install @supabase/supabase-js
   ```

2. **Set up environment variables:**
   ```bash
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

3. **Update components:**
   - Replace `ImageUploader.jsx` to upload to Supabase Storage
   - Update `CustomizePage.jsx` to save orders to Supabase database
   - See `supabase-schema.sql` for database setup

## 💳 Stripe Integration (Ready)

The checkout flow is structured for Stripe integration:
- Order data is saved (localStorage in demo, Supabase in production)
- Order ID is stored in sessionStorage
- Ready to integrate Stripe Checkout or Payment Intents

## 🚢 Deployment

### GitHub Pages (Recommended)

**Automatic deployment is already configured!**

1. Push your code to GitHub
2. Go to repository **Settings** → **Pages**
3. Select **GitHub Actions** as source
4. Your site will auto-deploy on every push to `main`

See [GITHUB_PAGES.md](./GITHUB_PAGES.md) for detailed instructions.

**Your site will be live at:**
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

### Other Hosting Options

1. Build the project: `npm run build`
2. Deploy `dist/` folder to:
   - **Vercel** - `vercel deploy`
   - **Netlify** - Drag & drop `dist` folder
   - **Cloudflare Pages** - Connect GitHub repo
   - Or any static hosting service

3. For production with Supabase, ensure environment variables are set in your hosting platform

## 📝 Notes

- **Demo Mode**: Images stored as data URLs, orders in localStorage
- **Production**: Replace with Supabase Storage and database
- Session storage is used for temporary data between pages
- All pricing logic is centralized in `utils/pricing.js`
- No external dependencies required for demo version

## 🎯 Conversion Optimization

- Sticky CTA on mobile
- Clear value propositions
- Social proof (testimonials)
- Trust signals (guarantees, shipping)
- Real-time price updates
- Minimal friction in upload flow

## 📄 License

Private project - All rights reserved

