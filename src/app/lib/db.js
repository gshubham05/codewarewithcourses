import mongoose from "mongoose";

let isConnected = false;

export async function connectDB() {
  if (isConnected) return;

  const uri = process.env.MONGODB_URI;

  // ❗ Build-time safety
  if (!uri) {
    console.warn("⚠️ MONGODB_URI missing (skipped at build time)");
    return;
  }

  try {
    await mongoose.connect(uri, {
      dbName: "codewareSEO",
    });

    isConnected = true;
    console.log("✅ MongoDB connected");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    throw error;
  }
}
