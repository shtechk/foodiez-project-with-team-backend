const mongoose = require("mongoose");

const RecipeSchema = new mongoose.Schema({
  name: String,
  instructions: String,
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
  ingredients: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Ingredient",
    },
  ],
  image: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Recipe", RecipeSchema);
