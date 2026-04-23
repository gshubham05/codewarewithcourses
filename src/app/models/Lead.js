// ============================================================
// CodewareIT — Lead Model
// Path: src/app/models/Lead.js
// ============================================================

import mongoose from "mongoose";

const LeadSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    phone: {
      type: String,
      required: [true, "Phone is required"],
      trim: true,
    },
    course: {
      type: String,
      required: [true, "Course is required"],
      trim: true,
    },
    city: {
      type: String,
      trim: true,
      default: "",
    },
    source: {
      type: String,
      default: "homepage-form", // track where the lead came from
    },
    status: {
      type: String,
      enum: ["new", "contacted", "enrolled", "dropped"],
      default: "new",
    },
  },
  {
    timestamps: true, // adds createdAt and updatedAt automatically
  }
);

// Prevent model recompilation in Next.js hot reload
const Lead = mongoose.models.Lead || mongoose.model("Lead", LeadSchema);

export default Lead;
