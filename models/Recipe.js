const { Schema, model } = require("mongoose");

// Recipe: _id, name, instructions, images, ingredients, category, user

const RecipeSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  image: { type: String },
  ingredients: [{ type: Schema.Types.ObjectId, ref: "Ingredient" }],
  category: { type: Schema.Types.ObjectId, ref: "Category" },
  user: { type: Schema.Types.ObjectId, ref: "User" },
});

module.exports = model("Recipe", RecipeSchema);
