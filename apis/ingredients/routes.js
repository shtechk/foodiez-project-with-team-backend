const express = require("express");
const { createIngrediant, getAllIngrediants } = require("./controller");
const ingredientRouter = express.Router();

// safa
ingredientRouter.post("/", createIngrediant);
ingredientRouter.get("/", getAllIngrediants);

module.exports = ingredientRouter;

// safa
