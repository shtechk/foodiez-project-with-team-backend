//  safa

const mongoose = require("mongoose");
const IngredientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  recipes: [],
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});
module.exports = mongoose.model("Ingredient", IngredientSchema);
//  Ingredients: _id, name, recipes, user
