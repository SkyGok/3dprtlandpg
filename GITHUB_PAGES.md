# GitHub Pages Deployment Guide

This guide will help you deploy your 3D Lithophane Landing Page to GitHub Pages.

## 🚀 Quick Setup

### Option 1: Automatic Deployment (Recommended)

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - Save the settings

3. **That's it!** 
   - The GitHub Actions workflow will automatically build and deploy on every push to `main`
   - Your site will be available at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

### Option 2: Manual Deployment

If you prefer manual control:

```bash
# Build for GitHub Pages
npm run build:pages

# Or with custom base path
VITE_BASE_PATH=/your-repo-name/ npm run build

# Then push the dist folder to gh-pages branch
```

## ⚙️ Configuration

### For Subdirectory Deployment (Default)

If your site is at `username.github.io/repository-name/`:

The workflow is already configured! The base path is automatically set to `/repository-name/` during build.

### For Root Domain Deployment

If you're using a custom domain or `username.github.io` (no subdirectory):

1. **Update `vite.config.js`:**
   ```js
   base: process.env.NODE_ENV === 'production' 
     ? '/'  // Change this to '/'
     : '/',
   ```

2. **Update `.github/workflows/deploy.yml`:**
   ```yaml
   - name: Build
     run: npm run build
     env:
       VITE_BASE_PATH: /  # Change this to '/'
   ```

## 📝 Step-by-Step Instructions

### 1. Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it (e.g., `3dprtlandpg` or `lithophane-landing`)
3. Don't initialize with README (you already have one)

### 2. Push Your Code

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: 3D Lithophane Landing Page"

# Add remote (replace with your repo URL)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to main branch
git branch -M main
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Scroll down to **Pages** (left sidebar)
4. Under **Source**, select **GitHub Actions**
5. The workflow will run automatically

### 4. Wait for Deployment

1. Go to **Actions** tab in your repository
2. You'll see the "Deploy to GitHub Pages" workflow running
3. Wait for it to complete (usually 1-2 minutes)
4. Once done, you'll see a green checkmark

### 5. Access Your Site

Your site will be live at:
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

**Note:** It may take a few minutes for the site to be accessible after the first deployment.

## 🔧 Troubleshooting

### Site shows 404 or blank page

- **Check base path:** Make sure `vite.config.js` base path matches your repository name
- **Check Actions:** Go to Actions tab and verify the workflow completed successfully
- **Clear cache:** Try accessing in incognito mode or clear browser cache

### Assets not loading

- **Base path issue:** The base path in `vite.config.js` must match your GitHub Pages URL structure
- **Check build output:** Verify `dist` folder contains all assets after build

### Workflow fails

- **Check logs:** Click on the failed workflow run to see error details
- **Node version:** Make sure you're using Node 18+ (workflow uses Node 18)
- **Dependencies:** Run `npm install` locally to ensure all dependencies are in `package.json`

### Routing doesn't work

React Router needs special handling for GitHub Pages. The current setup should work, but if you have issues:

1. Make sure you're using `BrowserRouter` (already configured)
2. The base path in `vite.config.js` must be correct
3. For custom 404 handling, you may need to add a `404.html` that redirects to `index.html`

## 🔄 Updating Your Site

Every time you push to the `main` branch, GitHub Actions will automatically:
1. Build your site
2. Deploy to GitHub Pages
3. Update your live site

Just commit and push:
```bash
git add .
git commit -m "Update landing page"
git push
```

## 🌐 Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file in the `public` folder with your domain:
   ```
   yourdomain.com
   ```

2. Update DNS settings:
   - Add a CNAME record pointing to `YOUR_USERNAME.github.io`

3. Update `vite.config.js` base path to `/` for root domain

## 📊 Monitoring

- **Actions Tab:** See deployment history and status
- **Pages Settings:** View deployment logs and settings
- **Repository Insights:** Track traffic and views

## ✅ Checklist

- [ ] Code pushed to GitHub
- [ ] GitHub Pages enabled (GitHub Actions)
- [ ] Workflow completed successfully
- [ ] Site accessible at GitHub Pages URL
- [ ] All images and assets loading correctly
- [ ] Navigation working properly

## 🎉 You're Done!

Your landing page is now live on GitHub Pages! Share the URL and start collecting orders (demo mode).

