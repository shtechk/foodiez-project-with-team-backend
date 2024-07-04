const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  recipes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Recipes" }],
  categories: [{ type: mongoose.Schema.Types.ObjectId, ref: "Categories" }],
});

module.exports = mongoose.model("User", UserSchema);
