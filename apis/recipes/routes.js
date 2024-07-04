const express = require("express");
const {
  getAllRecipes,
  createNewRecipe,
  getOneRecipe,
} = require("./controller");
const upload = require("../../middlewares/multer");
const recipeRouter = express.Router();

recipeRouter.get("/", getAllRecipes);
recipeRouter.post("/", upload.single("image"), createNewRecipe);
recipeRouter.get("/:id", getOneRecipe);

module.exports = recipeRouter;
