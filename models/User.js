// safa

const mongoose = require("mongoose");

const { model, Schema } = mongoose;

const UserSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  image: { type: String, defult: "link" },
  recipes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Recipe" }],
  categories: [{ type: mongoose.Schema.Types.ObjectId, ref: "Category" }],
  ingredients: [{ type: mongoose.Schema.Types.ObjectId, ref: "Ingredient" }],
});

module.exports = model("User", UserSchema);
// User: _id, username, password, recipes, categories, ingredients
