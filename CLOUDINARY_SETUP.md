# Cloudinary Setup Guide

## Quick Fix

The error "Failed to upload image" is most likely because the Cloudinary environment variables are not set in your `.env.local` file.

### Step 1: Extract Your Cloud Name

From your existing `.env.local`, you have a `CLOUDINARY_URL`. The format is:
```
cloudinary://API_KEY:API_SECRET@CLOUD_NAME
```

The `CLOUD_NAME` is the part after the `@` symbol.

### Step 2: Create an Upload Preset

1. Go to [Cloudinary Console](https://cloudinary.com/console)
2. Click on **Settings** (gear icon)
3. Go to **Upload** tab
4. Scroll to **Upload presets**
5. Click **Add upload preset**
6. Set:
   - **Preset name**: `claimly_profile` (or any name you prefer)
   - **Signing mode**: **Unsigned**
   - **Folder**: `profile_images` (optional, for organization)
7. Click **Save**
8. Copy the preset name

### Step 3: Add to .env.local

Open your `.env.local` file and add these two lines:

```env
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name_here
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=claimly_profile
```

Replace `your_cloud_name_here` with the cloud name from Step 1, and `claimly_profile` with your preset name from Step 2.

### Step 4: Restart Dev Server

After adding the variables:
1. Stop the dev server (Ctrl+C)
2. Run `npm run dev` again
3. Try uploading an image

## Debugging

Now when you try to upload an image, check the browser console (F12). You'll see:
- Whether the environment variables are loaded
- The exact Cloudinary API error if upload fails
- The upload URL being used

The error message will now tell you exactly what's missing or what went wrong.
