import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // ✅ Correct event name
    mongoose.connection.on('connected', () => console.log('Database Connected'));

    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "movieticketbookingapp", // ✅ safer than URI string concat
    });
  } catch (error) {
    console.log(error.message);
    throw error; // Let Vercel log the error
  }
};

export default connectDB;
