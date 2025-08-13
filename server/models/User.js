import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  image: { type: String, required: true }
});

// Reuse model if already compiled (important on Vercel serverless)
const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
