import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // make sure this is at the top

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI); // ✅ Fixed key
    console.log(`✅ MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("❌ MongoDB connection error:", error);
  }
};
