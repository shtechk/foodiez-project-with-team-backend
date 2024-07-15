const Category = require("../../models/Category");
const Ingredient = require("../../models/Ingredient");
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
    if (req.file) {
      req.body.image = req.file.path;
    }
    console.log(req.body);
    const { category } = req.body;
    // const { ingredients } = req.body;

    const cat = await Category.findById(category);
    req.body.category = cat?._id;

    // const newIng = ingredients.split(",");
    // console.log("newIng", newIng);
    // let ings = [];
    // for await (i of newIng) {
    //   let x = await Ingredient.find({ _id: i });

    //   ings.push(x[0]?._id);
    // }
    req.body.ingredients = [];
    console.log(req.body);
    const recipe = await Recipe.create(req.body);
    return res.status(201).json(recipe);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const getOneRecipe = async (req, res, next) => {
  try {
    const { id } = req.params;
    const recipe = await Recipe.findById(id).populate([
      "category",
      "ingredients",
    ]);
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

const deleteOneRecipe = async (req, res) => {
  try {
    await Recipe.findByIdAndRemove({ _id: req.recipe.id });
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllRecipes,
  createNewRecipe,
  getOneRecipe,
  deleteOneRecipe,
  getRecipesByCategory,
};
