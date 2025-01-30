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

// userSchema.pre(){
//   'save', async function(next){
//     if(this.isModified('passward')) {
//          this.passward=bcrypt.hash(this.passward, 8);
//     next();
//     }
 
//   }
// }

const bcrypt = require('bcrypt');

userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 8);
    }
    next();
});



export const User = mongoose.model("User", userSchema);

