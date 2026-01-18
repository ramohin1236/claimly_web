/**
 * Fetch files from public URLs (like Cloudinary) without authentication headers
 * This bypasses the auth interceptor for Cloudinary URLs
 */
export const publicFetch = async (url: string): Promise<Response> => {
    return fetch(url, {
        method: 'GET',
        headers: {
            'Accept': '*/*',
        },
    });
};

/**
 * Download a file from a public URL (like Cloudinary)
 */
export const downloadFile = async (url: string, fileName: string) => {
    try {
        const response = await publicFetch(url);
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }
        
        const blob = await response.blob();
        const downloadUrl = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = fileName || 'download';
        document.body.appendChild(link);
        link.click();
        link.remove();
        window.URL.revokeObjectURL(downloadUrl);
    } catch (error) {
        console.error('Download failed:', error);
        throw error;
    }
};
