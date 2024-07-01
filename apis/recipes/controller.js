const Recipe = require("../../models/Recipe");

const getAllRecipes = async (req, res, next) => {
  try {
    const recipes = await Recipe.find().populate("recipes");
    return res.status(200).json(recipes);
  } catch (error) {
    next(error);
  }
};

const createNewRecipe = async (req, res, next) => {
  try {
    const recipe = await Recipe.create(req.body);
    return res.status(201).json(recipe);
  } catch (error) {
    next(error);
  }
};

const getOneRecipe = async (recipeId, next) => {
  try {
    const recipe = await Recipe.findById(recipeId);
    return recipe;
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllRecipes, createNewRecipe, getOneRecipe };
