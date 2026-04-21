import { connectDB } from "../../lib/db.js";
import mongoose from "mongoose";

const PopupSchema = new mongoose.Schema({
  imageUrl: String,
  linkUrl: String,
  altText: String,
  subtitle: String,
  enabled: { type: Boolean, default: false },
  updatedAt: { type: Date, default: Date.now },
});
const Popup = mongoose.models.Popup || mongoose.model("Popup", PopupSchema);

export async function GET() {
  try {
    await connectDB();
    const popup = await Popup.findOne().sort({ updatedAt: -1 });
    if (!popup) return Response.json({ enabled: false });
    return Response.json(popup);
  } catch {
    return Response.json({ enabled: false });
  }
}

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();
    
    // Upsert — always one popup config
    await Popup.deleteMany({});
    const popup = await Popup.create({
      imageUrl: body.imageUrl || "",
      linkUrl: body.linkUrl || "",
      altText: body.altText || "",
      subtitle: body.subtitle || "",
      enabled: body.enabled !== undefined ? body.enabled : false,
      updatedAt: new Date(),
    });
    return Response.json({ success: true, popup });
  } catch (err) {
    return Response.json({ success: false, error: err.message }, { status: 500 });
  }
}
