import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";


const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // use for url encoded data
//  object in object extended: true
app.use(express.static("public")); // use for static files like images, css, js

app.use(cookieParser()); // use for parsing cookies
export default app;
