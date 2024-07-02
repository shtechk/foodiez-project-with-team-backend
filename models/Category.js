const mongoose = require("mongoose");

const { model, Schema } = require("mongoose");

const CategorySchema = new Schema({
  name: String,
  recipe: [{ type: mongoose.Schema.Types.ObjectId, ref: "Recipe" }],
  image: String,
  user: { type: Schema.Types.ObjectId, ref: "User" },
});

module.exports = model("Category", CategorySchema);
