const express = require("express");
const {
  getAllRecipes,
  createNewRecipe,
  getOneRecipe,
  getRecipesByCategory,
} = require("./controller");
const upload = require("../../middlewares/multer");
const recipeRouter = express.Router();

recipeRouter.get("/", getAllRecipes);
recipeRouter.post("/", upload.single("image"), createNewRecipe);
recipeRouter.get("/:id", getOneRecipe);
recipeRouter.get("/:categoryId", getRecipesByCategory); //safa
module.exports = recipeRouter;