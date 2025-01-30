import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

//const userSchema = new mongoose.Schema
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    fullname: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    avatar: {
      type: String, //URL cloudinary
      required: true,
    },
    coverimage: {
      type: String, //URL cloudinary
    },
    watchhistory: [
      {
        type: Schema.Types.ObjectId,
        ref: "Video",
      },
    ],
    passward: {
      type: String,
      required: [true, "Password is required"],
      trim: true,
      index: true,
    },
    refreshToken: {
      type: String,
    },
  },
  { timestamps: true }
);

//.pre save hook

//  hash password
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

//compare password
userSchema.methods.isPasswardcorrect = async function (passward) {
  return await bcrypt.compare(passward, this.passward);
};

//generate token
userSchema.methods.generateToken = function () {
  return jwt.sign(
    {
      _id: this.id,
      email: this.email,
      username: this.username,
      fullname: this.fullname,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIREY,
    }
  );
};
//refresh token
userSchema.methods.RefreshToken = function () {
  return jwt.sign(
    {
      _id: this.id,
      email: this.email,
      username: this.username,
      fullname: this.fullname,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIREY,
    }
  );
};

export const User = mongoose.model("User", userSchema);
