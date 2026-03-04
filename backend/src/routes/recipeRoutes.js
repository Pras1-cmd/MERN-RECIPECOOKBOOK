import express from "express";
import {
  createRecipe,
  getRecipeById,
  updateRecipe,
  deleteRecipe,
  getAllRecipes
} from "../controllers/recipeController.js";

const router = express.Router();

router.post("/", createRecipe);
router.get("/", getAllRecipes)
router.get("/:id", getRecipeById);
router.put("/:id", updateRecipe);
router.delete("/:id", deleteRecipe);

export default router;
