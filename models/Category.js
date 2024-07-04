const { model, Schema } = require("mongoose");

const CategorySchema = new Schema({
  name: String,
  recipes: [{ type: Schema.Types.ObjectId, ref: "Recipes" }],
  image: String,
  user: { type: Schema.Types.ObjectId, ref: "User" },
});

module.exports = model("Category2", CategorySchema);
