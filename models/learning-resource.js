import mongoose from "mongoose";

const learningResourceSchema = new mongoose.Schema(
  {
    user: { type: String, required: true },
    title: { type: String, required: true, trim: true },
    url: { type: String, required: true },
    category: { type: String, enum: ["Course", "Book", "Tutorial"], required: true },
    completed: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model("LearningResource", learningResourceSchema);

