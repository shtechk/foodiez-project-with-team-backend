// safa

const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  image: { type: String, defult: "link" },

  recipes: [],
  categories: [],
  ingredients: [],
});

module.exports = mongoose.model("User", UserSchema);
// User: _id, username, password, recipes, categories, ingredients
