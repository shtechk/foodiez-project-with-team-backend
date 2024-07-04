const Ingredient = require("../../models/Ingredient");

const createOneIngredient = async (req, res, next) => {
  try {
    const ing = await Ingredient.create(req.body);
    return res.status(201).json(ing);
  } catch (error) {
    next(error);
  }
};

const getAllIngredients = async (req, res, next) => {
  try {
    const allIngredients = await Ingredient.find();
    return res.status(200).json(allIngredients);
  } catch (error) {
    next(error);
  }
};
module.exports = { createOneIngredient, getAllIngredients };
