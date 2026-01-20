# Dijitto Full Stack Deployment Plan

## Overview
Deploy all three Dijitto applications to production:
1. **dijitto-io** (marketing website) → GitHub Pages with dijitto.io domain
2. **dijitto-api** (backend API) → Google Cloud Run
3. **dijitto-ui** (POS application) → Google Cloud Run

## Prerequisites
- [ ] Google Cloud Platform account with billing enabled
- [ ] `gcloud` CLI installed and authenticated
- [ ] dijitto.io domain access (DNS management)
- [ ] GitHub repository for dijitto-io

---

## Phase 1: Deploy dijitto-api to Google Cloud Run

### 1.1 Create Dockerfile for dijitto-api
**File to create:** `/Users/aaron/projects/dijitto-api/Dockerfile`

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 8080
ENV PORT=8080
CMD ["node", "server.js"]
```

### 1.2 Create .dockerignore
**File to create:** `/Users/aaron/projects/dijitto-api/.dockerignore`

```
node_modules
.env
.git
*.log
```

### 1.3 Deploy to Cloud Run
```bash
cd /Users/aaron/projects/dijitto-api
gcloud run deploy dijitto-api \
  --source . \
  --region us-central1 \
  --allow-unauthenticated \
  --set-env-vars "DATABASE_URL=xxx,BREVO_API_KEY=xxx,..."
```

### 1.4 Configure Custom Domain (optional)
- Set up `api.dijitto.io` pointing to Cloud Run service
- Or use the auto-generated Cloud Run URL

**Result:** API available at `https://dijitto-api-xxxxx.run.app` or `https://api.dijitto.io`

---

## Phase 2: Deploy dijitto-ui to Google Cloud Run

### 2.1 Create production build configuration
**File to create:** `/Users/aaron/projects/dijitto-ui/Dockerfile`

```dockerfile
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
```

### 2.2 Create nginx.conf for SPA routing
**File to create:** `/Users/aaron/projects/dijitto-ui/nginx.conf`

```nginx
server {
    listen 8080;
    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

### 2.3 Update API URLs in dijitto-ui
Update environment variables to point to production API URL.

### 2.4 Deploy to Cloud Run
```bash
cd /Users/aaron/projects/dijitto-ui
gcloud run deploy dijitto-ui \
  --source . \
  --region us-central1 \
  --allow-unauthenticated
```

### 2.5 Configure Custom Domain (optional)
- Set up `app.dijitto.io` pointing to Cloud Run service

**Result:** UI available at `https://dijitto-ui-xxxxx.run.app` or `https://app.dijitto.io`

---

## Phase 3: Deploy dijitto-io to GitHub Pages

### 3.1 Configure Next.js for Static Export
**File to modify:** `/Users/aaron/projects/dijitto-io/next.config.ts`

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
```

### 3.2 Update All localhost URLs
**Files to modify:**

| File | Change |
|------|--------|
| `components/Header.tsx` (lines 44, 90) | `http://localhost:3025/request` → `https://app.dijitto.io/request` |
| `components/Hero.tsx` (line 30) | `http://localhost:3025/request` → `https://app.dijitto.io/request` |
| `components/CTA.tsx` (line 31) | `http://localhost:3025/request` → `https://app.dijitto.io/request` |
| `app/contact/page.tsx` (line 28) | `http://localhost:3002/contact` → `https://api.dijitto.io/contact` |
| `app/contact/page.tsx` (line 193) | `http://localhost:3025/request` → `https://app.dijitto.io/request` |

### 3.3 Create GitHub Actions Workflow
**File to create:** `/Users/aaron/projects/dijitto-io/.github/workflows/deploy.yml`

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/deploy-pages@v4
        id: deployment
```

### 3.4 Push to GitHub and Enable Pages
1. Create GitHub repository (if not exists)
2. Push code to main branch
3. Go to Settings → Pages → Source: "GitHub Actions"

### 3.5 Configure Custom Domain
1. In GitHub repo Settings → Pages → Custom domain: `dijitto.io`
2. Add DNS records:
   - **A records** pointing to GitHub Pages IPs:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
   - **CNAME record** for `www`: `username.github.io`

**Result:** Website live at `https://dijitto.io`

---

## Phase 4: Configure CORS on dijitto-api

Update CORS settings to allow requests from dijitto.io:

**File to modify:** `/Users/aaron/projects/dijitto-api/server.js`

Add `https://dijitto.io` and `https://www.dijitto.io` to allowed origins.

---

## Deployment Order

1. **First:** Deploy dijitto-api → Get production API URL
2. **Second:** Deploy dijitto-ui → Get production UI URL
3. **Third:** Update URLs in dijitto-io → Deploy to GitHub Pages
4. **Fourth:** Configure DNS for all custom domains

---

## Environment Variables Needed

### dijitto-api (Cloud Run)
- `DATABASE_URL` - Supabase connection string
- `BREVO_API_KEY` - Email service API key
- `BREVO_FROM_EMAIL` - Sender email address
- `CORS_ORIGIN` - Allowed origins (dijitto.io, app.dijitto.io)

### dijitto-ui (Cloud Run)
- `REACT_APP_API_URL` - Production API URL

---

## Final URLs (Proposed)

| Service | URL |
|---------|-----|
| Marketing Website | https://dijitto.io |
| POS Application | https://app.dijitto.io |
| Backend API | https://api.dijitto.io |

---

## Steps Checklist

- [ ] 1. Create Dockerfile for dijitto-api
- [ ] 2. Create .dockerignore for dijitto-api
- [ ] 3. Deploy dijitto-api to Cloud Run
- [ ] 4. Create Dockerfile for dijitto-ui
- [ ] 5. Create nginx.conf for dijitto-ui
- [ ] 6. Deploy dijitto-ui to Cloud Run
- [ ] 7. Update next.config.ts for static export
- [ ] 8. Update all localhost URLs in dijitto-io
- [ ] 9. Create GitHub Actions workflow
- [ ] 10. Push dijitto-io to GitHub and enable Pages
- [ ] 11. Configure DNS records for dijitto.io
- [ ] 12. Configure DNS for api.dijitto.io (optional)
- [ ] 13. Configure DNS for app.dijitto.io (optional)
- [ ] 14. Update CORS on API for production domains
