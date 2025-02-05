import asyncHandler from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { uploadToCloudinary } from "../utils/cloudinary.js"; 

const registerUser = asyncHandler(async (req, res) => {
  //things to do here   -->>
  //get data from the frontend
  //validate data - not empty{ email, password, confirm password}
  //check if user already exists {check by email, username}
  //check img and avatar is present or not
  //uplode them to cloudinary
  //create user object - create entry in DB
  //remove password ,refresh token from the response
  //check for user creation
  //send response

  //get data from the frontend
  const { fullname, username, email, password } = req.body;
  console.log(email);

  //validate data - not empty
  if (fullname == "" || username == "" || email == "" || password == "") {
    throw new ApiError(400, "All fields are required");
  }

  //check if user already exists {check by email, username}
  const existedUser = User.findOne({
    $or: [{ email }, { username }],
  });
  if (existedUser) {
    throw new ApiError(409, " User with email or username  already exists ");
  }

  //check img and avatar is present or not
  const avatarLocalPath = req.files?.avatar[0]?.path;
  const coverImageLocalPath = req.files?.coverimage[0]?.path;
  if (!avatarLocalPath) {
    throw new error(400, "Avatar is required");
  }
});

export default registerUser;
