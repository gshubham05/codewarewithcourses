import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema(
  {
    title: String,
    slug: { type: String, unique: true },
    excerpt: String,
    content: String,

    mediaType: { type: String, enum: ["image", "youtube"] },
    youtubeUrl: String,
    thumbnail: String,

    seoTitle: String,
    seoDescription: String,
    seoKeywords: [String],

    status: {
      type: String,
      enum: ["draft", "published"],
      default: "draft",
    },

    views: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.models.Blog || mongoose.model("Blog", BlogSchema);
