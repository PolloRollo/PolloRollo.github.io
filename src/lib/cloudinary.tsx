// src/utils/cloudinaryConfig.js
import { Cloudinary } from "@cloudinary/url-gen";

// Initialize the instance once
const cld = new Cloudinary({
  cloud: {
    cloudName: import.meta.env.VITE_CLOUDINARY_NAME // From .env file
  }
});

export default cld;