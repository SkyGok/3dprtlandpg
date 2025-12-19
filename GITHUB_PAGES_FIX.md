# Fix for Empty/Blank Page on GitHub Pages

## Problem
Site works on localhost but shows blank/empty page on GitHub Pages.

## Solution Applied

### 1. Switched to HashRouter
Changed from `BrowserRouter` to `HashRouter` in `App.jsx`. This is the most reliable solution for GitHub Pages.

**URLs will now look like:**
- `https://username.github.io/repo/#/`
- `https://username.github.io/repo/#/upload`
- `https://username.github.io/repo/#/customize`

### 2. Added 404.html
Created `public/404.html` to handle direct URL access and redirects.

## What to Do Now

1. **Commit and push the changes:**
   ```bash
   git add .
   git commit -m "Fix GitHub Pages routing with HashRouter"
   git push
   ```

2. **Wait for GitHub Actions to deploy** (check Actions tab)

3. **Visit your site** - it should now work!

## Alternative: Use BrowserRouter (Cleaner URLs)

If you prefer URLs without `#` (like `/upload` instead of `/#/upload`), you can switch back to BrowserRouter, but you'll need to:

1. **Update `src/App.jsx`:**
   ```jsx
   import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
   ```

2. **Make sure your repository name matches the base path** in `vite.config.js`

3. **The 404.html will handle the routing** for direct URL access

## Verify It's Working

After deployment, check:
- [ ] Homepage loads (`/#/`)
- [ ] Navigation works
- [ ] Direct URL access works (try `/#/upload`)
- [ ] All assets load correctly

## Still Not Working?

1. **Check the base path:**
   - Your repository name must match the base path
   - If repo is `my-lithophane`, base should be `/my-lithophane/`
   - Update `vite.config.js` if needed

2. **Check browser console:**
   - Open DevTools (F12)
   - Look for errors in Console tab
   - Check Network tab for failed requests

3. **Clear browser cache:**
   - Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
   - Or try incognito mode

4. **Check GitHub Actions:**
   - Go to Actions tab
   - Verify the workflow completed successfully
   - Check build logs for errors

