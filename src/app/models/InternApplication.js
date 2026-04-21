// models/InternApplication.js
import mongoose from "mongoose";

const InternApplicationSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  address: String,
  college: String,
  stream: String,
  duration: String,
  interest: String,
});

export default mongoose.models.InternApplication ||
  mongoose.model("InternApplication", InternApplicationSchema);
