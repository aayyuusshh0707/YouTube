import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

//middlewares
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // use for url encoded data ,  object in object extended: true
app.use(express.static("public")); // use for static files like images, css, js
app.use(cookieParser()); // use for parsing cookies

//routes
import router from "./routes/user.routes.js";

//routes declaration
app.use("/api/users", router);   // we seprate the routes so , we use middleware to use the routes

export default  app;

//app.js operations are:
//1. use cors, json, urlencoded, static, cookieParser (middleware)

