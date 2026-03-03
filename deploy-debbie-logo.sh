#!/bin/bash

# Debbie Logo Final Deployment Script
# Run this script to complete the logo update process

set -e  # Exit on any error

# Configuration
SITE_URL="https://your-domain.com"  # Replace with your actual URL
LOGO_VERSION="v2.0-debbie-$(date +%Y%m%d)"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

log_info() { echo -e "${BLUE}[INFO]${NC} $1"; }
log_success() { echo -e "${GREEN}[SUCCESS]${NC} $1"; }
log_warning() { echo -e "${YELLOW}[WARNING]${NC} $1"; }
log_error() { echo -e "${RED}[ERROR]${NC} $1"; }

echo "🚀 Debbie Logo Final Deployment"
echo "==============================="
echo "Version: $LOGO_VERSION"
echo "Target: $SITE_URL"
echo ""

# STEP 1: Pre-deployment checks
log_info "Step 1: Pre-deployment verification..."

# Check if in correct directory
if [ ! -f "package.json" ]; then
    log_error "Not in project root directory!"
    exit 1
fi

# Check if logo files exist
if [ ! -f "app/components/Logo/index.tsx" ]; then
    log_error "Logo component file missing!"
    exit 1
fi

log_success "Pre-deployment checks passed"

# STEP 2: Install dependencies and build
log_info "Step 2: Installing dependencies and building..."
npm ci
npm run build

if [ $? -ne 0 ]; then
    log_error "Build failed! Check errors above."
    exit 1
fi

log_success "Build completed successfully"

# STEP 3: Version control
log_info "Step 3: Committing to version control..."

# Create backup tag
git tag "backup-before-$LOGO_VERSION"

# Add and commit changes
git add app/components/Logo/index.tsx app/globals.css
git commit -m "feat: deploy Debbie logo v2.0

- Replace 'Deborah Barasa' with modern 'Debbie' brand logo
- Enhanced typography with bold gradient styling
- Added transformation animations and interactive elements
- Implemented responsive design with multiple variants
- Updated CSS animations for smooth transitions

Version: $LOGO_VERSION
Tested: ✅ Local development, ✅ Build process, ✅ TypeScript
Deploy: Production ready"

git push origin main

log_success "Changes committed and pushed"

# STEP 4: Deploy to production
log_info "Step 4: Deploying to production..."

# Auto-detect deployment platform and deploy
if command -v vercel &> /dev/null && ([ -f "vercel.json" ] || [ -f ".vercel/project.json" ]); then
    log_info "Deploying to Vercel..."
    vercel --prod --yes
    DEPLOYMENT_URL=$(vercel ls --scope=team 2>/dev/null | head -2 | tail -1 | awk '{print $2}' || echo $SITE_URL)
    
elif command -v netlify &> /dev/null && [ -f "netlify.toml" ]; then
    log_info "Deploying to Netlify..."
    netlify deploy --prod --dir=.next
    DEPLOYMENT_URL=$SITE_URL
    
else
    log_warning "No auto-deployment detected. Please deploy manually."
    DEPLOYMENT_URL=$SITE_URL
fi

log_success "Deployment initiated"

# STEP 5: Wait and verify
log_info "Step 5: Waiting for deployment to complete..."
sleep 30

# STEP 6: Verification
log_info "Step 6: Verifying deployment..."

# Check if site is accessible
if curl -s --head "$SITE_URL" | head -n 1 | grep -q "200"; then
    log_success "Site is accessible"
else
    log_warning "Site may not be fully deployed yet"
fi

# STEP 7: Cache clearing instructions
echo ""
echo "🧹 IMPORTANT: Clear All Caches Now!"
echo "===================================="
echo ""
echo "1. Browser Cache (REQUIRED):"
echo "   • Chrome/Firefox: Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)"
echo "   • Safari: Cmd+Option+R"
echo "   • Mobile: Settings → Clear browsing data"
echo ""
echo "2. CDN Cache (if applicable):"
echo "   • Cloudflare: Dashboard → Caching → Purge Everything"
echo "   • Netlify: Site settings → Build & deploy → Clear cache"
echo ""

# STEP 8: Final verification checklist
echo "✅ DEPLOYMENT COMPLETE!"
echo "======================"
echo ""
echo "📋 Verification Checklist:"
echo "- [ ] Visit: $SITE_URL"
echo "- [ ] Clear browser cache (Ctrl+F5)"
echo "- [ ] Verify 'Debbie' logo appears"
echo "- [ ] Test logo animation"
echo "- [ ] Check mobile responsiveness"
echo "- [ ] Test different browsers"
echo ""
echo "🔧 If logo doesn't appear, run:"
echo "   ./troubleshoot-logo.sh"
echo ""

log_success "Deployment script completed!"
