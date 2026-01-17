/**
 * Upload an image to Cloudinary
 * @param file - The image file to upload
 * @returns The secure URL of the uploaded image
 */
export const uploadToCloudinary = async (file: File): Promise<string> => {
    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
    const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

    console.log("Cloudinary Config:", {
        cloudName,
        uploadPreset,
        hasCloudName: !!cloudName,
        hasUploadPreset: !!uploadPreset
    });

    if (!cloudName || !uploadPreset) {
        const missingVars = [];
        if (!cloudName) missingVars.push("NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME");
        if (!uploadPreset) missingVars.push("NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET");

        const errorMsg = `Cloudinary configuration is missing: ${missingVars.join(", ")}. Please add these to your .env.local file.`;
        console.error(errorMsg);
        throw new Error(errorMsg);
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", uploadPreset);

    try {
        const uploadUrl = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
        console.log("Uploading to:", uploadUrl);

        const response = await fetch(uploadUrl, {
            method: "POST",
            body: formData,
        });

        console.log("Cloudinary response status:", response.status);

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            console.error("Cloudinary error response:", errorData);
            throw new Error(
                `Failed to upload image to Cloudinary: ${errorData.error?.message || response.statusText}`
            );
        }

        const data = await response.json();
        console.log("Upload successful:", data.secure_url);
        return data.secure_url;
    } catch (error) {
        console.error("Cloudinary upload error:", error);
        throw error;
    }
};
