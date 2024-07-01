const express = require("express");

// dana
const express = require("express");
const {
  getAllCategories,
  getOneCategory,
  createNewCategory,
  updateCategory,
  deleteCategory,
} = require("./controllers");
const upload = require("../../middlewares/multer");

const CategoryRouter = express.Router();

CategoryRouter.get("/", getAllCategories);
CategoryRouter.get("/:id", getOneCategory);
CategoryRouter.post("/", upload.single("image"), createNewCategory);
CategoryRouter.post("/", updateCategory);
CategoryRouter.delete("/", deleteCategory);

module.exports = CategoryRouter;
