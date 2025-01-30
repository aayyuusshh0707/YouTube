import connectDB from "./db/db.js";
import dotenv from "dotenv";
import app from "./app.js";

const port = process.env.PORT || 5000;

dotenv.config();

connectDB()
  .then(() => {
    app.listen(port , () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB !!", error);
  });
   


