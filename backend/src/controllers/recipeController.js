import Recipe from "../models/recipeModel.js";

export async function getAllRecipes(req, res) {
    try {
        const { search, category } = req.query;

        let query = {};

        if (search && search.trim() !== "") {
            query.title = { $regex: search, $options: "i" };
        }

        if (category && category.trim() !== "") {
            query.category = category;
        }

        const recipes = await Recipe.find(query).sort({ createdAt: -1 });
        const total = await Recipe.countDocuments(query);

        res.status(200).json({ total, recipes });
    } catch (error) {
        console.error("Error in getAllRecipes controller:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}


export async function getRecipeById(req, res) {
    try {
        const recipe = await Recipe.findById(req.params.id);
        if (!recipe) {
            return res.status(404).json({ message: "Recipe not found" });
        }
        res.status(200).json(recipe);
    } catch (error) {
        console.error("Error in getRecipeById controller:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export async function createRecipe(req, res) {
    try {
        const {
            title,
            description,
            ingredients,
            cookingTime,
            difficulty,
            category,
            instructions
        } = req.body;

        if (
            !title ||
            !ingredients ||
            !cookingTime ||
            !difficulty ||
            !category ||
            !instructions
        ) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        const recipe = new Recipe({
            title,
            description,
            ingredients,
            cookingTime,
            difficulty,
            category,
            instructions
        });

        const savedRecipe = await recipe.save();
        res.status(201).json(savedRecipe);
    } catch (error) {
        console.error("Error in createRecipe controller:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export async function updateRecipe(req, res) {
    try {
        const {
            title,
            description,
            ingredients,
            cookingTime,
            difficulty,
            category,
            instructions
        } = req.body;

        const updatedRecipe = await Recipe.findByIdAndUpdate(
            req.params.id,
            {
                title,
                description,
                ingredients,
                cookingTime,
                difficulty,
                category,
                instructions
            },
            { new: true }
        );

        if (!updatedRecipe) {
            return res.status(404).json({ message: "Recipe not found" });
        }

        res.status(200).json(updatedRecipe);
    } catch (error) {
        console.error("Error in updateRecipe controller:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export async function deleteRecipe(req, res) {
    try {
        const deletedRecipe = await Recipe.findByIdAndDelete(req.params.id);
        if (!deletedRecipe) {
            return res.status(404).json({ message: "Recipe not found" });
        }
        res.status(200).json({ message: "Recipe deleted successfully" });
    } catch (error) {
        console.error("Error in deleteRecipe controller:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}
