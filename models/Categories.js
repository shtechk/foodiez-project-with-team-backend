const mongoose = require("mongoose");

const { model, Schema } = mongoose;

const CategorySchema = new Schema({
  title: { type: String, required: true },
  recipe: [{ type: Schema.Types.ObjectId, ref: "Recipe" }],
  ingredients: [{ type: Schema.Types.ObjectId, ref: "Ingredient" }],
  image: { type: String, default: "link" },
  user: { type: Schema.Types.ObjectId, ref: "User" },
});

module.exports = model("Category", CategorySchema);
