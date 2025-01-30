import mongoose, { Schema } from "mongoose";

const videoSchema = new Schema(
  {
    videofile: {
      type: String, //URL cloudinary
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },

    views: {
      type: Number,
      default: 0,
    },
    ispublished: {
      type: Boolean,
      default: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    // videoUrl: {
    //   type: String,
    //   required: true,
    // },
    // likes: {
    //   type: Number,
    //   default: 0,
    // },
    // dislikes: {
    //   type: Number,
    //   default: 0,
    // },
    // comments: [
    //   {
    //     type: Schema.Types.ObjectId,
    //     ref: "Comment",
    //   },
    // ],
  },
  { timestamps: true }
);

export const Video = mongoose.model("Video", videoSchema);
