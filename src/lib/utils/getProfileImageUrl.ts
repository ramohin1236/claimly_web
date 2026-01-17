/**
 * Get the correct image URL for profile images
 * Handles both Cloudinary URLs and backend uploaded images
 */
export const getProfileImageUrl = (imagePath: string | undefined | null): string | null => {
    if (!imagePath) return null;

    // If it's already a full URL (Cloudinary or other CDN), return as is
    if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
        return imagePath;
    }

    // Otherwise, it's a backend path, prepend base URL
    const baseUrl = typeof window !== 'undefined'
        ? 'https://claimly-insurance-server.vercel.app'
        : 'https://claimly-insurance-server.vercel.app';

    return `${baseUrl}/${imagePath.replace(/\\/g, "/")}`;
};
