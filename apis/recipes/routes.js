const express = require("express");
const {
  getAllRecipes,
  createNewRecipe,
  getOneRecipe,
} = require("./controller");
const recipeRouter = express.Router();

recipeRouter.get("/recipe", getAllRecipes);
recipeRouter.post("/recipe", createNewRecipe);
recipeRouter.get("/recipe/:id", getOneRecipe);

module.exports = recipeRouter;
