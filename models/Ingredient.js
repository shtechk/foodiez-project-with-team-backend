//  safa

const mongoose = require("mongoose");

const { model, Schema } = mongoose;

const IngredientSchema = new Schema({
  name: { type: String, required: true },
  quantity: { type: String },
});

module.exports = model("Ingredient", IngredientSchema);
//  Ingredients: _id, name, recipes, user
