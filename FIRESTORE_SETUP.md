# Firestore Security Rules Setup

## Important: Update Your Admin UID

The `firestore.rules` file contains a placeholder `YOUR_ADMIN_UID_HERE` that you **must** replace with your actual Firebase Authentication UID.

## Steps to Deploy Firestore Rules:

1. **Get Your Admin UID:**
   - Log into your admin dashboard
   - Open browser console (F12)
   - Run: `firebase.auth().currentUser.uid` (if using Firebase SDK)
   - Or check Firebase Console → Authentication → Users → Copy the UID

2. **Update firestore.rules:**
   - Open `firestore.rules`
   - Replace `YOUR_ADMIN_UID_HERE` with your actual UID
   - Save the file

3. **Deploy Rules to Firebase:**
   
   **Option A: Using Firebase CLI**
   ```bash
   firebase deploy --only firestore:rules
   ```
   
   **Option B: Using Firebase Console**
   - Go to Firebase Console → Firestore Database → Rules
   - Copy the contents of `firestore.rules` (with your UID)
   - Paste into the rules editor
   - Click "Publish"

## What These Rules Do:

- **Messages Collection:**
  - ✅ Anyone can create messages (for contact form)
  - ✅ Only authenticated admin can read/update/delete messages
  - ✅ Validates required fields and data types

- **Newsletter Collection:**
  - ✅ Anyone can create newsletter subscriptions
  - ✅ Only authenticated admin can read/update/delete subscriptions
  - ✅ Validates email format and length

- **Default:**
  - ❌ All other collections are denied by default

## Security Notes:

- Make sure to replace `YOUR_ADMIN_UID_HERE` before deploying
- Test the rules after deployment
- Only your admin account will be able to read messages and subscribers

