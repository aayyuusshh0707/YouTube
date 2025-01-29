 import connectDB from './db/db.js';
import dotenv from 'dotenv';


dotenv.config();
  connectDB();



//if-e function

// (async()=>{
//    try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//     console.log(`Connected to MongoDB ${DB_NAME}`)
//    } catch (error) {
//     console.error('Error connecting to MongoDB', error);
//     throw error;
//    }


// })()
