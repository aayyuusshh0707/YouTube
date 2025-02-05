import { Router } from "express";
import registerUser from "../controllers/user.controllers.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router();

export const register = router.route("/register").post(
  //upload with multer
  //upload.fields() is used to upload multiple files
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
    {
      name: "coverImage",
      maxCount: 1,
    },
  ]),
  registerUser
);

export default router;
