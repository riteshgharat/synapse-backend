import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

import {
  CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
} from "../config/config.js";

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    //upload the file on cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
      quality: "auto:best",  // Automatic quality setting with a focus on good quality and reduced file size
      format: "jpg", // Converts image to jpg format to save space (if applicable)
      transformation: [
        { width: 800, height: 600, crop: "limit" }, // Resize the image to a maximum width and height
      ],
    });

    // file has been uploaded successfull
    // console.log("file is uploaded on cloudinary ", response);
    
    //fs.unlinkSync(localFilePath); // remove the locally saved temporary file as the upload operation got success
    return response;
  } catch (error) {
    //fs.unlinkSync(localFilePath); // remove the locally saved temporary file as the upload operation got failed
    return null;
  }
};

export { uploadOnCloudinary };