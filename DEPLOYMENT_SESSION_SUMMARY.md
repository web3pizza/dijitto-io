# Dijitto Full Deployment - Session Summary

**Date**: January 20, 2026
**Status**: Phase 1 Complete (dijitto.io live), Phase 2 Ready (GCP deployment pending)

---

## ✅ What We Accomplished

### 1. Successfully Deployed dijitto.io (Marketing Website) to GitHub Pages

**Live URL**: https://dijitto.io
**Repository**: https://github.com/web3pizza/dijitto-io

#### Setup Steps Completed:
1. ✅ Configured Next.js for static export (`output: 'export'`)
2. ✅ Fixed all image paths with BASE_PATH configuration
3. ✅ Created GitHub Actions workflow (`.github/workflows/deploy.yml`)
4. ✅ Configured custom domain in GitHub Pages settings
5. ✅ Set up DNS records at GoDaddy:
   - 4 A records pointing to GitHub Pages IPs:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
   - CNAME record: www → web3pizza.github.io
6. ✅ Added CNAME file to public directory
7. ✅ Updated all localhost URLs to production URLs:
   - `https://app.dijitto.io` (for POS app)
   - `https://api.dijitto.io` (for API)
8. ✅ Site is live and accessible with all images loading correctly

#### Key Files Modified:
- `next.config.ts` - Static export configuration
- `lib/config.ts` - BASE_PATH constant for images
- `app/page.tsx` - Homepage redirect
- `components/Header.tsx` - Logo image path
- `components/Hero.tsx` - Crypto coin logos (BTC, LTC, DOGE)
- `components/CTA.tsx` - Wallet logos
- `.github/workflows/deploy.yml` - Auto-deployment workflow
- `public/CNAME` - Custom domain configuration

---

### 2. Prepared dijitto-api and dijitto-ui for Deployment

Both projects have been updated and committed to their main branches:

#### dijitto-api
**Repository**: https://github.com/web3pizza/Dijitto-API
**Branch**: main
**Latest Commit**: Merged `feature/phase3-next-tasks`

**Recent Changes**:
- New contact route (`routes/contact.js`)
- Updated email configuration (`email.js`)
- Server integration for contact form
- Security architecture documentation
- Bug fixes and database migrations

#### dijitto-ui
**Repository**: https://github.com/web3pizza/Dijitto
**Branch**: main
**Latest Commit**: Merged `feature/gmail-email-integration`

**Recent Changes**:
- Mac setup documentation
- UI/UX improvements
- Mobile responsive fixes
- Store request form enhancements

---

## 🎯 Next Steps: Deploy to Google Cloud Platform

### Overview
We need to deploy two services to Google Cloud Run:
1. **dijitto-api** (Backend API) → `https://api.dijitto.io`
2. **dijitto-ui** (POS Application) → `https://app.dijitto.io`

---

## 📋 Deployment Plan for GCP

### Phase 1: Google Cloud Platform Setup

#### Step 1: Create GCP Account & Enable Billing
1. Go to https://console.cloud.google.com/
2. Sign in with Google account
3. Set up billing (credit card required, but free tier available)
   - New users get $300 in free credits for 90 days
   - Cloud Run has generous free tier:
     - 2 million requests/month free
     - 360,000 GB-seconds memory free
     - 180,000 vCPU-seconds free

#### Step 2: Create GCP Project
1. Click project dropdown at top
2. Click "New Project"
3. Project name: `dijitto` (or your preference)
4. Click "Create"
5. Select the new project

#### Step 3: Enable Required APIs
1. Search for and enable:
   - **Cloud Run API**
   - **Cloud Build API**
   - **Artifact Registry API**

#### Step 4: Install gcloud CLI
**On Mac**:
```bash
# Install gcloud CLI
brew install --cask google-cloud-sdk

# Initialize gcloud
gcloud init

# Authenticate
gcloud auth login

# Set project
gcloud config set project [YOUR-PROJECT-ID]
```

---

### Phase 2: Deploy dijitto-api to Cloud Run

#### Step 1: Create Dockerfile for dijitto-api

Create `/Users/aaron/projects/dijitto-api/Dockerfile`:

```dockerfile
FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install production dependencies only
RUN npm ci --only=production

# Copy application code
COPY . .

# Expose port 8080 (Cloud Run requirement)
EXPOSE 8080

# Set environment variable for port
ENV PORT=8080

# Start the server
CMD ["node", "server.js"]
```

#### Step 2: Create .dockerignore

Create `/Users/aaron/projects/dijitto-api/.dockerignore`:

```
node_modules
.env
.git
*.log
npm-debug.log*
.DS_Store
```

#### Step 3: Deploy to Cloud Run

```bash
cd /Users/aaron/projects/dijitto-api

gcloud run deploy dijitto-api \
  --source . \
  --region us-central1 \
  --allow-unauthenticated \
  --platform managed \
  --port 8080
```

**During deployment, you'll be prompted to set environment variables. You'll need**:
- `DATABASE_URL` - Your Supabase connection string
- `BREVO_API_KEY` - Brevo email service API key
- `BREVO_FROM_EMAIL` - Sender email address
- Any other environment variables from your `.env` file

**Alternative: Set environment variables via command**:
```bash
gcloud run deploy dijitto-api \
  --source . \
  --region us-central1 \
  --allow-unauthenticated \
  --set-env-vars "DATABASE_URL=your-value,BREVO_API_KEY=your-value,BREVO_FROM_EMAIL=your-value"
```

#### Step 4: Note the Service URL
After deployment, you'll get a URL like:
```
https://dijitto-api-xxxxx-uc.a.run.app
```

Save this URL - you'll need it for dijitto-ui configuration.

#### Step 5: Configure Custom Domain (Optional but Recommended)

1. In Cloud Console, go to Cloud Run → dijitto-api → "Manage Custom Domains"
2. Click "Add Mapping"
3. Select your service
4. Enter domain: `api.dijitto.io`
5. Follow DNS setup instructions (add CNAME record at GoDaddy)

---

### Phase 3: Deploy dijitto-ui to Cloud Run

#### Step 1: Create Dockerfile for dijitto-ui

Create `/Users/aaron/projects/dijitto-ui/Dockerfile`:

```dockerfile
# Build stage
FROM node:18-alpine AS build

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install all dependencies (including dev dependencies for build)
RUN npm ci

# Copy source code
COPY . .

# Build the React app
RUN npm run build

# Production stage
FROM nginx:alpine

# Copy built app from build stage
COPY --from=build /app/build /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 8080 (Cloud Run requirement)
EXPOSE 8080

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
```

#### Step 2: Create nginx.conf

Create `/Users/aaron/projects/dijitto-ui/nginx.conf`:

```nginx
server {
    listen 8080;
    server_name _;
    root /usr/share/nginx/html;
    index index.html;

    # Enable gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

    # SPA routing - all requests go to index.html
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

#### Step 3: Create .dockerignore

Create `/Users/aaron/projects/dijitto-ui/.dockerignore`:

```
node_modules
build
.env
.git
*.log
npm-debug.log*
.DS_Store
```

#### Step 4: Update API URL Configuration

Before deploying, update the API URL in dijitto-ui to point to your production API:

In your React app configuration (likely in a config file or environment variable):
```javascript
const API_URL = 'https://api.dijitto.io' // or your Cloud Run URL
```

#### Step 5: Deploy to Cloud Run

```bash
cd /Users/aaron/projects/dijitto-ui

gcloud run deploy dijitto-ui \
  --source . \
  --region us-central1 \
  --allow-unauthenticated \
  --platform managed \
  --port 8080
```

#### Step 6: Configure Custom Domain

1. In Cloud Console, go to Cloud Run → dijitto-ui → "Manage Custom Domains"
2. Click "Add Mapping"
3. Enter domain: `app.dijitto.io`
4. Follow DNS setup instructions (add CNAME record at GoDaddy)

---

### Phase 4: Update CORS Configuration

Once both services are deployed, update CORS settings in dijitto-api to allow requests from production domains.

In `/Users/aaron/projects/dijitto-api/server.js`, update CORS configuration:

```javascript
const cors = require('cors');

const allowedOrigins = [
  'https://dijitto.io',
  'https://www.dijitto.io',
  'https://app.dijitto.io',
  'http://localhost:3000', // Keep for local development
  'http://localhost:3025'  // Keep for local development
];

app.use(cors({
  origin: function(origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));
```

Redeploy dijitto-api after making this change.

---

## 🗂️ Project Structure Summary

```
dijitto-io/          (Marketing website - LIVE ✅)
├── GitHub Pages deployment
├── Custom domain: dijitto.io
└── Auto-deploys on push to main

dijitto-api/         (Backend API - READY FOR DEPLOY)
├── Node.js + Express
├── Database: Supabase
├── Target: Cloud Run
└── Custom domain: api.dijitto.io

dijitto-ui/          (POS Application - READY FOR DEPLOY)
├── React app
├── Target: Cloud Run (via nginx)
└── Custom domain: app.dijitto.io
```

---

## 🔑 Environment Variables Needed

### dijitto-api
Before deploying, gather these values:
- `DATABASE_URL` - Supabase PostgreSQL connection string
- `BREVO_API_KEY` - Email service API key
- `BREVO_FROM_EMAIL` - Sender email (e.g., noreply@dijitto.io)
- `PORT` - Set to 8080 (Cloud Run requirement)
- Any other variables from your local `.env` file

### dijitto-ui
- `REACT_APP_API_URL` - Production API URL (https://api.dijitto.io)
- May need to be set during build or in nginx config

---

## 📝 DNS Configuration Summary

### Current DNS at GoDaddy (dijitto.io):

**A Records** (for dijitto.io → GitHub Pages):
```
Type: A, Name: @, Value: 185.199.108.153, TTL: 1 Hour
Type: A, Name: @, Value: 185.199.109.153, TTL: 1 Hour
Type: A, Name: @, Value: 185.199.110.153, TTL: 1 Hour
Type: A, Name: @, Value: 185.199.111.153, TTL: 1 Hour
```

**CNAME Record** (for www):
```
Type: CNAME, Name: www, Value: web3pizza.github.io, TTL: 1 Hour
```

### To Add (for Cloud Run services):

**After deploying to Cloud Run**, you'll add:

**For api.dijitto.io**:
```
Type: CNAME, Name: api, Value: ghs.googlehosted.com, TTL: 1 Hour
```

**For app.dijitto.io**:
```
Type: CNAME, Name: app, Value: ghs.googlehosted.com, TTL: 1 Hour
```

*(Google Cloud will provide exact CNAME values during custom domain setup)*

---

## 💰 Cost Estimates

### GitHub Pages
- **Cost**: FREE ✅
- Unlimited bandwidth for public repos

### Cloud Run (both services)
**Free Tier** (per month):
- 2 million requests
- 360,000 GB-seconds memory
- 180,000 vCPU-seconds

**Expected Cost** (after free tier):
- Small traffic: $0-5/month
- Medium traffic: $5-20/month
- Includes both dijitto-api and dijitto-ui

**Tip**: Set up billing alerts at $10, $25, $50 to monitor costs

---

## 🔧 Troubleshooting Common Issues

### Issue: Build fails on Cloud Run
**Solution**: Check that all dependencies are in package.json, not just devDependencies

### Issue: Container exits immediately
**Solution**: Ensure PORT environment variable is set to 8080 and app listens on this port

### Issue: API returns CORS errors
**Solution**: Add production domains to CORS allowedOrigins in server.js

### Issue: React app can't connect to API
**Solution**: Verify API_URL is set correctly in React app configuration

---

## ✅ Pre-Deployment Checklist

Before deploying to Cloud Run:

**dijitto-api**:
- [ ] Create Dockerfile
- [ ] Create .dockerignore
- [ ] Gather all environment variables
- [ ] Test locally with Docker (optional but recommended)
- [ ] Ensure server listens on PORT environment variable (8080)

**dijitto-ui**:
- [ ] Create Dockerfile (multi-stage build)
- [ ] Create nginx.conf
- [ ] Create .dockerignore
- [ ] Update API URL to production endpoint
- [ ] Test build locally (npm run build)

**GCP Setup**:
- [ ] GCP account created
- [ ] Billing enabled
- [ ] Project created
- [ ] APIs enabled (Cloud Run, Cloud Build, Artifact Registry)
- [ ] gcloud CLI installed and authenticated

---

## 🚀 Quick Start Commands (When Ready)

```bash
# Install gcloud CLI (Mac)
brew install --cask google-cloud-sdk

# Initialize and authenticate
gcloud init
gcloud auth login

# Deploy dijitto-api
cd /Users/aaron/projects/dijitto-api
gcloud run deploy dijitto-api --source . --region us-central1 --allow-unauthenticated

# Deploy dijitto-ui
cd /Users/aaron/projects/dijitto-ui
gcloud run deploy dijitto-ui --source . --region us-central1 --allow-unauthenticated
```

---

## 📚 Useful Resources

- **Google Cloud Run Docs**: https://cloud.google.com/run/docs
- **gcloud CLI Reference**: https://cloud.google.com/sdk/gcloud/reference
- **Cloud Run Pricing**: https://cloud.google.com/run/pricing
- **Custom Domains**: https://cloud.google.com/run/docs/mapping-custom-domains

---

## 🎯 Current Status

| Service | Status | URL | Next Step |
|---------|--------|-----|-----------|
| dijitto-io | ✅ LIVE | https://dijitto.io | None - Complete! |
| dijitto-api | 📦 Ready | N/A | Create Dockerfile, deploy to Cloud Run |
| dijitto-ui | 📦 Ready | N/A | Create Dockerfile, deploy to Cloud Run |

---

## 💡 Notes for Next Session

1. Start by setting up GCP account and creating project
2. Install gcloud CLI on new machine
3. Create Dockerfiles for both dijitto-api and dijitto-ui
4. Deploy to Cloud Run (API first, then UI)
5. Configure custom domains
6. Update CORS settings
7. Test end-to-end functionality

**Estimated Time**: 1-2 hours for complete deployment

---

**Session End Time**: January 20, 2026, 11:30 AM
**Next Session**: Continue with GCP deployment using this guide

---

Good luck with the deployment! 🚀
