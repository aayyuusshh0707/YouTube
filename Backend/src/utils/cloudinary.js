import { v2 as cloudinary } from "cloudinary";
import { response } from "express";
import fs from "fs";

(async function () {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLONDINARY_SECRET,
  });
});

const uploadToCloudinary = async (localFilePath) => {

  try {
    if (!localFilePath) return null;
    //upload file to cloudinary
    await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    console.log("File uploaded to cloudinary" ,response.url);
    return response;


  } catch (error) { 
    //delete file from local storage if upload fails
   fs.unlinkSync(localFilePath)
  }
};

export { uploadToCloudinary };