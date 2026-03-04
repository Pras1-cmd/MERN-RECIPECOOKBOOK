import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    ingredients: { type: [String], required: true },
    instructions: { type: [String], required: true },
    category: { type: String, required: true },
    cookingTime: { type: Number, required: true },
    difficulty: {
      type: String,
      enum: ["Easy", "Medium", "Hard"],
      required: true
    }
  },
  { timestamps: true }
);

export default mongoose.model("Recipe", recipeSchema);
