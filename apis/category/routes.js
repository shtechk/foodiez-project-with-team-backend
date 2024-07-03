const express = require("express");
const {
  getAllCategories,
  getOneCategory,
  createNewCategory,
  updateCategory,
  deleteCategory,
} = require("./controllers");
const upload = require("../../middlewares/multer");

const categoryRouter = express.Router();

categoryRouter.get("/", getAllCategories);
categoryRouter.get("/:id", getOneCategory);
categoryRouter.post("/", upload.single("image"), createNewCategory);
categoryRouter.post("/", updateCategory);
categoryRouter.delete("/", deleteCategory);

module.exports = categoryRouter;
