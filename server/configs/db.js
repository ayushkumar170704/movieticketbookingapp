import mongoose from "mongoose";

let isConnected = false;

const connectDB = async () => {
  if (isConnected) return mongoose.connection;

  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error("MONGODB_URI is not set");
  }

  // Option A: use dbName option if URI has no database
  const opts = {
    dbName: process.env.MONGODB_DBNAME || "movieticketbookingapp",
  };

  try {
    // Helpful events (lowercase)
    mongoose.connection.on("connected", () => console.log("MongoDB connected"));
    mongoose.connection.on("error", (err) => console.error("MongoDB error:", err));
    mongoose.connection.on("disconnected", () => console.warn("MongoDB disconnected"));

    await mongoose.connect(uri, opts);
    isConnected = true;
    return mongoose.connection;
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    throw error;
  }
};

export default connectDB;
