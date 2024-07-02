const { Schema, model } = require("mongoose");

// Recipe: _id, name, instructions, images, ingredients, category, user

const RecipeSchema = new Schema({
  name: String,
  instructions: String,
  category: { type: Schema.Types.ObjectId, ref: "Category" },
  ingredients: [
    {
      type: Schema.Types.ObjectId,
      ref: "Ingredient",
    },
  ],
  images: [String],
  user: { type: Schema.Types.ObjectId, ref: "User" },
});

module.exports = model("Recipe", RecipeSchema);
