# Guide to Restore Hidden Features

**Created**: January 20, 2026
**Purpose**: Restore "Join the Waitlist" buttons and contact form after Apple Developer approval

---

## Overview

For Apple Developer Program enrollment, we temporarily hid placeholder features by commenting them out in the code. This document provides step-by-step instructions to restore these features once the app is approved.

**Status**: Features are hidden but preserved in commented code
**Repository**: https://github.com/web3pizza/dijitto-io
**Live Site**: https://dijitto.io

---

## What Was Hidden

### 1. "Join the Waitlist" Buttons (4 locations)
- Header navigation (desktop and mobile)
- Hero section (main landing page)
- CTA section (bottom of main page)
- Contact page sidebar

### 2. Contact Form
- Full contact form on `/contact` page
- "Send Us a Message" functionality
- "Ready to Get Started?" CTA card

### 3. Team Link
- Removed from footer navigation

---

## Files Modified

All changes were made by commenting out code with:
```
{/* Temporarily hidden for Apple approval */}
```

### Modified Files:
1. `/components/Header.tsx` - Header navigation buttons
2. `/components/Hero.tsx` - Main hero section button
3. `/components/CTA.tsx` - Call-to-action button
4. `/app/contact/page.tsx` - Contact form and sidebar CTA
5. `/components/Footer.tsx` - Team link removed (deleted, not commented)

---

## How to Find Hidden Code

### Search Method 1: Grep for Comment
```bash
cd /Users/aaron/projects/dijitto-io
grep -r "Temporarily hidden for Apple approval" .
```

**Expected output:**
```
./components/Header.tsx:            {/* Temporarily hidden for Apple approval */}
./components/Hero.tsx:            {/* Temporarily hidden for Apple approval */}
./components/CTA.tsx:          {/* Temporarily hidden for Apple approval */}
./app/contact/page.tsx:          {/* Temporarily hidden for Apple approval */}
```

### Search Method 2: Look for Commented JSX
All hidden features are wrapped in JSX comments:
```jsx
{/* Temporarily hidden for Apple approval */}
{/* <a href="...">
  Join the Waitlist
</a> */}
```

---

## Step-by-Step Restoration Guide

### ✅ Step 1: Restore "Join the Waitlist" in Header

**File**: `/components/Header.tsx`

**Location 1 - Desktop Navigation** (around line 44-50):
```jsx
// CURRENT (hidden):
{/* Temporarily hidden for Apple approval */}
{/* <a
  href="https://app.dijitto.io/request"
  className="bg-[#169EDD] hover:bg-[#1E3A8A] text-white px-6 py-2 rounded transition-colors font-medium"
>
  Join the Waitlist
</a> */}

// RESTORE TO:
<a
  href="https://app.dijitto.io/request"
  className="bg-[#169EDD] hover:bg-[#1E3A8A] text-white px-6 py-2 rounded transition-colors font-medium"
>
  Join the Waitlist
</a>
```

**Location 2 - Mobile Navigation** (around line 91-97):
```jsx
// CURRENT (hidden):
{/* Temporarily hidden for Apple approval */}
{/* <a
  href="https://app.dijitto.io/request"
  className="bg-[#169EDD] hover:bg-[#1E3A8A] text-white px-6 py-3 rounded text-center transition-colors font-medium"
>
  Join the Waitlist
</a> */}

// RESTORE TO:
<a
  href="https://app.dijitto.io/request"
  className="bg-[#169EDD] hover:bg-[#1E3A8A] text-white px-6 py-3 rounded text-center transition-colors font-medium"
>
  Join the Waitlist
</a>
```

**How to restore:**
1. Open `/components/Header.tsx`
2. Find both commented sections
3. Remove the comment markers `{/* */}` and the comment text
4. Keep the `<a>` tag and its contents

---

### ✅ Step 2: Restore "Join the Waitlist" in Hero Section

**File**: `/components/Hero.tsx`

**Location** (around line 29-37):
```jsx
// CURRENT (hidden):
{/* Temporarily hidden for Apple approval */}
{/* <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
  <a
    href="https://app.dijitto.io/request"
    className="bg-white text-[#1E3A8A] hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-colors inline-block text-center"
  >
    Join the Waitlist
  </a>
</div> */}

// RESTORE TO:
<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
  <a
    href="https://app.dijitto.io/request"
    className="bg-white text-[#1E3A8A] hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-colors inline-block text-center"
  >
    Join the Waitlist
  </a>
</div>
```

**How to restore:**
1. Open `/components/Hero.tsx`
2. Find the commented `<div>` containing the button
3. Remove the comment markers `{/* */}` and the comment text

---

### ✅ Step 3: Restore "Join the Waitlist" in CTA Section

**File**: `/components/CTA.tsx`

**Location** (around line 31-37):
```jsx
// CURRENT (hidden):
{/* Temporarily hidden for Apple approval */}
{/* <a
  href="https://app.dijitto.io/request"
  className="inline-block bg-white text-[#1E3A8A] hover:bg-gray-100 px-10 py-4 rounded-lg font-bold text-xl transition-colors shadow-lg"
>
  Join the Waitlist
</a> */}

// RESTORE TO:
<a
  href="https://app.dijitto.io/request"
  className="inline-block bg-white text-[#1E3A8A] hover:bg-gray-100 px-10 py-4 rounded-lg font-bold text-xl transition-colors shadow-lg"
>
  Join the Waitlist
</a>
```

**How to restore:**
1. Open `/components/CTA.tsx`
2. Find the commented `<a>` tag
3. Remove the comment markers `{/* */}` and the comment text

---

### ✅ Step 4: Restore Contact Form

**File**: `/app/contact/page.tsx`

This is more complex because the entire form and grid layout were commented out.

**Location** (around line 65-150):

**CURRENT (hidden):**
```jsx
<div className="max-w-2xl mx-auto">
  {/* Temporarily hidden for Apple approval */}
  {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
  <div className="bg-white rounded-lg shadow-lg p-8">
    <h2 className="text-2xl font-bold text-[#1E3A8A] mb-6">Send Us a Message</h2>

    {submitted && (
      <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded mb-6">
        Thank you for your message! We'll get back to you soon.
      </div>
    )}

    <form onSubmit={handleSubmit} className="space-y-6">
      [... full form code ...]
    </form>
  </div>
  */ }

  {/* Contact Information */}
  <div className="space-y-8">
```

**RESTORE TO:**
```jsx
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
  {/* Contact Form */}
  <div className="bg-white rounded-lg shadow-lg p-8">
    <h2 className="text-2xl font-bold text-[#1E3A8A] mb-6">Send Us a Message</h2>

    {submitted && (
      <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded mb-6">
        Thank you for your message! We'll get back to you soon.
      </div>
    )}

    <form onSubmit={handleSubmit} className="space-y-6">
      [... full form code ...]
    </form>
  </div>

  {/* Contact Information */}
  <div className="space-y-8">
```

**Also restore the grid closing tag at the end** (around line 221):
```jsx
// CURRENT:
{/* </div> */} {/* Closing div for grid - commented out with form */}

// RESTORE TO:
</div>
```

**And change the wrapper div:**
```jsx
// CURRENT:
<div className="max-w-2xl mx-auto">

// RESTORE TO:
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
```

**How to restore:**
1. Open `/app/contact/page.tsx`
2. Find line 65: change `<div className="max-w-2xl mx-auto">` to `<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">`
3. Remove the comment markers around the entire form section (lines ~66-150)
4. Find line ~221: uncomment `</div>` closing tag
5. Make sure the grid structure is properly restored

---

### ✅ Step 5: Restore "Ready to Get Started?" CTA Card

**File**: `/app/contact/page.tsx`

**Location** (around line 188-200):
```jsx
// CURRENT (hidden):
{/* Temporarily hidden for Apple approval */}
{/* <div className="bg-gradient-to-br from-[#1E3A8A] to-[#169EDD] rounded-lg shadow-lg p-8 text-white">
  <h3 className="text-xl font-bold mb-4">Ready to Get Started?</h3>
  <p className="mb-6">
    Join the growing number of retailers accepting cryptocurrency with DijittoExpress.
  </p>
  <a
    href="https://app.dijitto.io/request"
    className="inline-block bg-white text-[#1E3A8A] hover:bg-gray-100 px-6 py-3 rounded-lg font-bold transition-colors"
  >
    Join the Waitlist
  </a>
</div> */}

// RESTORE TO:
<div className="bg-gradient-to-br from-[#1E3A8A] to-[#169EDD] rounded-lg shadow-lg p-8 text-white">
  <h3 className="text-xl font-bold mb-4">Ready to Get Started?</h3>
  <p className="mb-6">
    Join the growing number of retailers accepting cryptocurrency with DijittoExpress.
  </p>
  <a
    href="https://app.dijitto.io/request"
    className="inline-block bg-white text-[#1E3A8A] hover:bg-gray-100 px-6 py-3 rounded-lg font-bold transition-colors"
  >
    Join the Waitlist
  </a>
</div>
```

**How to restore:**
1. Open `/app/contact/page.tsx`
2. Find the commented gradient card section
3. Remove the comment markers `{/* */}` and the comment text

---

### ✅ Step 6: (Optional) Restore Team Link to Footer

**File**: `/components/Footer.tsx`

**Note**: This was completely removed (not commented), so you'll need to add it back manually.

**Location** (around line 6-11):
```jsx
// CURRENT:
const footerLinks = [
  { href: '/main#about', label: 'About' },
  { href: '/main#how-it-works', label: 'How It Works' },
  { href: '/contact', label: 'Contact' },
  { href: '/privacy', label: 'Privacy Policy' },
];

// RESTORE TO (if you want Team link back):
const footerLinks = [
  { href: '/main#about', label: 'About' },
  { href: '/main#how-it-works', label: 'How It Works' },
  { href: '#team', label: 'Team' },
  { href: '/contact', label: 'Contact' },
  { href: '/privacy', label: 'Privacy Policy' },
];
```

**How to restore:**
1. Open `/components/Footer.tsx`
2. Add the Team link object to the `footerLinks` array
3. Place it between "How It Works" and "Contact"

---

## Testing After Restoration

After uncommenting/restoring features, follow these steps:

### 1. Local Build Test
```bash
cd /Users/aaron/projects/dijitto-io
npm run build
```

**Expected output:**
```
✓ Compiled successfully
✓ Generating static pages (7/7)

Route (app)
┌ ○ /
├ ○ /_not-found
├ ○ /contact
├ ○ /main
└ ○ /privacy
```

### 2. Visual Inspection Checklist

**Main Page (**`/main`**)**:
- [ ] "Join the Waitlist" button visible in header (desktop)
- [ ] "Join the Waitlist" button visible in mobile menu
- [ ] "Join the Waitlist" button visible in hero section
- [ ] "Join the Waitlist" button visible in CTA section

**Contact Page (**`/contact`**)**:
- [ ] "Send Us a Message" form is visible
- [ ] Form has Name, Email, Company, Message fields
- [ ] "Send Message" button is present
- [ ] "Ready to Get Started?" blue gradient card is visible
- [ ] Contact information (email, location) still visible
- [ ] FAQ section still visible

**Footer (all pages)**:
- [ ] About link works (goes to /main#about)
- [ ] How It Works link works (goes to /main#how-it-works)
- [ ] Contact link works (goes to /contact)
- [ ] Privacy Policy link works (goes to /privacy)
- [ ] (Optional) Team link visible if restored

### 3. Functionality Tests

**Test Join Waitlist Button:**
1. Click any "Join the Waitlist" button
2. Should navigate to: `https://app.dijitto.io/request`
3. Verify it opens the correct page

**Test Contact Form:**
1. Go to `/contact` page
2. Fill out the form:
   - Name: "Test User"
   - Email: "test@example.com"
   - Company: "Test Company"
   - Message: "Testing contact form"
3. Click "Send Message"
4. Should submit to: `https://api.dijitto.io/contact`
5. Watch for success message or error

---

## Deployment Steps

### 1. Commit Changes
```bash
cd /Users/aaron/projects/dijitto-io
git add -A
git commit -m "Restore Join Waitlist buttons and contact form features"
```

### 2. Push to GitHub
```bash
git push origin main
```

### 3. Verify Auto-Deployment
- GitHub Actions will automatically build and deploy
- Check: https://github.com/web3pizza/dijitto-io/actions
- Wait 1-2 minutes for deployment to complete
- Verify changes at: https://dijitto.io

---

## Backend Requirements for Contact Form

The contact form requires the backend API to be running at `https://api.dijitto.io/contact`

### API Endpoint Details:
- **URL**: `https://api.dijitto.io/contact`
- **Method**: POST
- **Headers**: `Content-Type: application/json`
- **Body**:
  ```json
  {
    "name": "string",
    "email": "string",
    "company": "string (optional)",
    "message": "string"
  }
  ```

### Backend Implementation:
**Location**: `/Users/aaron/projects/dijitto-api/routes/contact.js`

The backend is already implemented and ready. It:
1. Receives contact form submissions
2. Validates the data
3. Sends email via Brevo (formerly SendInBlue)
4. Returns success/error response

**If API is not deployed yet:**
- See `DEPLOYMENT_SESSION_SUMMARY.md` for deployment instructions
- Deploy dijitto-api to Google Cloud Run
- Point `api.dijitto.io` to the Cloud Run service

---

## Quick Reference: Comment Removal Pattern

All commented features follow this pattern:

```jsx
// BEFORE (hidden):
{/* Temporarily hidden for Apple approval */}
{/* <YourComponent>
  Content here
</YourComponent> */}

// AFTER (restored):
<YourComponent>
  Content here
</YourComponent>
```

**Search & Replace Strategy:**
1. Search for: `{/* Temporarily hidden for Apple approval */}`
2. Remove that line
3. Remove the `{/*` before the component
4. Remove the `*/}` after the component

---

## Git Commit History Reference

If you need to see exactly what was changed:

```bash
# View commits that hid features
git log --oneline | grep -i "apple approval"

# Expected commits:
# ef99954 Fix footer About and How It Works links to navigate to main page sections
# 939cc50 Remove Team link from footer for Apple approval
# b81650e Temporarily hide placeholder features for Apple Developer approval
```

To see specific changes:
```bash
# View the commit that hid features
git show b81650e

# Compare current version with before hiding
git diff b81650e^..HEAD -- components/Header.tsx
```

---

## Rollback Instructions (If Needed)

If something goes wrong during restoration:

```bash
# Discard all local changes
git checkout .

# Or restore specific file
git checkout HEAD -- components/Header.tsx

# Or go back to specific commit
git reset --hard ef99954
```

---

## Estimated Restoration Time

**For experienced developer/agent**: 15-30 minutes
- 5 files to modify
- ~10 comment blocks to remove
- Testing: 10 minutes
- Deployment: 2 minutes

**Breakdown:**
1. Header.tsx: 2 locations = 2 min
2. Hero.tsx: 1 location = 1 min
3. CTA.tsx: 1 location = 1 min
4. Contact page: 2 locations + layout = 5 min
5. Footer.tsx (Team link): 1 min (optional)
6. Build & test locally: 5 min
7. Commit & push: 2 min
8. Verify deployment: 2 min

**Total**: ~20 minutes

---

## Support & References

- **Repository**: https://github.com/web3pizza/dijitto-io
- **Live Site**: https://dijitto.io
- **Contact**: aaron@dijitto.io
- **Deployment Guide**: See `DEPLOYMENT_SESSION_SUMMARY.md`

---

## Agent Instructions Summary

**For AI Agent taking over this work:**

1. **Pull latest code**: `git clone https://github.com/web3pizza/dijitto-io.git`
2. **Find hidden features**: Search for "Temporarily hidden for Apple approval"
3. **Restore systematically**:
   - Header.tsx (2 buttons)
   - Hero.tsx (1 button)
   - CTA.tsx (1 button)
   - Contact page (form + CTA card)
   - Footer.tsx (Team link - optional)
4. **Test build**: `npm run build`
5. **Test locally**: Check all buttons and form appear correctly
6. **Deploy**: Commit, push, verify on live site
7. **Verify backend**: Ensure API is deployed and contact form works

**Success Criteria:**
- ✅ All "Join the Waitlist" buttons visible and functional
- ✅ Contact form visible and submits to API
- ✅ No build errors
- ✅ Site looks professional and complete
- ✅ All links work correctly

---

**Last Updated**: January 20, 2026
**Status**: Features hidden, ready for restoration
**Next Action**: Wait for Apple Developer approval, then restore features

