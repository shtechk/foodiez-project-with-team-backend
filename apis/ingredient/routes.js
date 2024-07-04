const express = require("express");
const { createOneIngredient, getAllIngredients } = require("./controller");
const ingredientRouter = express.Router();

ingredientRouter.post("/", createOneIngredient);
ingredientRouter.get("/", getAllIngredients);

module.exports = ingredientRouter;
