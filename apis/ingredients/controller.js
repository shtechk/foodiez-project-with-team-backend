const Ingredient = require("../../models/Ingredient");

// safa
const createIngrediant = async (req, res, next) => {
  try {
    const Ingredient = await Ingredient.create(req.body);
    return res.status(201).json(Ingredient);
  } catch (error) {
    next(error);
  }
};

const getAllIngrediants = async (req, res, next) => {
  try {
    const allingrediants = await Ingredient.find();
    return res.status(200).json(allingrediants);
  } catch (error) {
    next(error);
  }
};

module.exports = { createIngrediant, getAllIngrediants };
