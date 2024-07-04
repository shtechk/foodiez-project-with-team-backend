const express = require("express");
const {
  getAllCategories,
  getOneCategory,
  createNewCategory,
  updateCategory,
  deleteCategory,
} = require("./controllers");
const upload = require("../../middlewares/multer");
const passport = require("passport");

const CategoryRouter = express.Router();

CategoryRouter.get("/", getAllCategories);
CategoryRouter.get("/:id", getOneCategory);
CategoryRouter.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  upload.single("image"),
  createNewCategory
);
CategoryRouter.put(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  upload.single("image"),
  updateCategory
);
CategoryRouter.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  deleteCategory
);

module.exports = CategoryRouter;
