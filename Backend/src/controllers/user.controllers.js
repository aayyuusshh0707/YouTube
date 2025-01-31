import asyncHandler from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";


const registerUser = asyncHandler(async (req, res) => {
  //things to do here   -->>
  //get data from the frontend
  //validate data - not empty{ email, password, confirm password}
  //check if user already exists {check by email, username}
  //check img and avatar {if not present set default img}
  //uplode them to cloudinary
  //create user object - create entry in DB
  //remove password ,refresh token from the response
  //check for user creation
  //send response

  //get data from the frontend

  const { fullname, username, email, password } = req.body;
  console.log(email);

  if(fullname=="" || username=="" || email=="" || password==""){
    throw new ApiError(400, "All fields are required");
  }
});
 
export default registerUser;
