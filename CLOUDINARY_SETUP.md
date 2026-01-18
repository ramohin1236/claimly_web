# Cloudinary Setup Guide

## Quick Fix - 401 Unauthorized Error

If you're getting a **401 Unauthorized error when trying to access uploaded files**, your upload preset is configured as **Signed** instead of **Unsigned**. This prevents public access to the files.

### Solution: Change Upload Preset to Unsigned

1. Go to [Cloudinary Console](https://cloudinary.com/console)
2. Click on **Settings** (gear icon)
3. Go to **Upload** tab
4. Scroll to **Upload presets**
5. Find your upload preset (`frontend_upload` or similar)
6. Click **Edit**
7. Change **Signing mode** from "Signed" to **Unsigned**
8. Click **Save**

Now your uploaded files will be publicly accessible!

## Initial Setup

The error "Failed to upload image" is most likely because the Cloudinary environment variables are not set in your `.env.local` file.

### Step 1: Extract Your Cloud Name

From your existing `.env.local`, you have a `CLOUDINARY_URL`. The format is:
```
cloudinary://API_KEY:API_SECRET@CLOUD_NAME
```

The `CLOUD_NAME` is the part after the `@` symbol.

### Step 2: Create or Update Upload Preset

1. Go to [Cloudinary Console](https://cloudinary.com/console)
2. Click on **Settings** (gear icon)
3. Go to **Upload** tab
4. Scroll to **Upload presets**
5. Click **Add upload preset** (or edit existing one)
6. Set:
   - **Preset name**: `frontend_upload`
   - **Signing mode**: **Unsigned** ⚠️ (IMPORTANT for public access)
   - **Folder**: `claimly_uploads` (optional, for organization)
7. Click **Save**
8. Copy the preset name

### Step 3: Add to .env.local

Open your `.env.local` file and add these two lines:

```env
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name_here
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=frontend_upload
```

Replace `your_cloud_name_here` with the cloud name from Step 1.

### Step 4: Restart Dev Server

After adding the variables:
1. Stop the dev server (Ctrl+C)
2. Run `npm run dev` again
3. Try uploading an image or PDF

## Debugging

Now when you try to upload a file, check the browser console (F12). You'll see:
- Whether the environment variables are loaded
- The exact Cloudinary API error if upload fails
- The upload URL being used
- The resource type (image/raw) for the upload

The error message will now tell you exactly what's missing or what went wrong.

## File Type Support

- **Images**: jpg, jpeg, png, gif, webp, svg (uploaded to `image/upload` endpoint)
- **Documents**: pdf, doc, docx (uploaded to `raw/upload` endpoint)

Both types will generate public, unsigned URLs that can be accessed without authentication.

