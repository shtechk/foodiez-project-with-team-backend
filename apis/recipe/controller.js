const Recipe = require("../../models/Recipe");

const getAllRecipes = async (req, res, next) => {
  try {
    const recipes = await Recipe.find();
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

const getOneRecipe = async (req, res, next) => {
  try {
    const { id } = req.params;
    const recipe = await Recipe.findById(id);
    res.status(200).json(recipe);
  } catch (error) {
    next(error);
  }
};
//safa
const getRecipesByCategory = async (req, res, next) => {
  const categoryId = req.params.categoryId;
  try {
    const recipes = await Recipe.find({ category: categoryId });
    return res.status(200).json(recipes);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllRecipes,
  createNewRecipe,
  getOneRecipe,
  getRecipesByCategory,
};
