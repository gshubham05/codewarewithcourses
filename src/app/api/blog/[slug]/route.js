import { connectDB } from "@/app/lib/db";
import Blog from "@/app/models/Blog";

// GET SINGLE BLOG
export async function GET(req, { params }) {
  await connectDB();
  const { slug } = await params;
  // slug param here is actually the MongoDB _id (called "slug" to match the route name)
  const blog = await Blog.findById(slug);
  return Response.json(blog);
}

// DELETE BLOG
export async function DELETE(req, { params }) {
  await connectDB();
  const { slug } = await params;
  await Blog.findByIdAndDelete(slug);
  return Response.json({ message: "Blog deleted successfully" });
}

// UPDATE BLOG
export async function PUT(req, { params }) {
  await connectDB();
  const { slug } = await params;
  const body = await req.json();
  const updatedBlog = await Blog.findByIdAndUpdate(slug, body, { new: true });
  return Response.json({ message: "Blog updated successfully", blog: updatedBlog });
}
