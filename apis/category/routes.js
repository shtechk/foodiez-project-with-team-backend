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

const categoryRouter = express.Router();

categoryRouter.get("/", getAllCategories);
categoryRouter.get("/:id", getOneCategory);
categoryRouter.post(
  "/",
  // passport.authenticate("jwt", { session: false }),
  upload.single("image"),
  createNewCategory
);
categoryRouter.post("/", updateCategory);
categoryRouter.delete("/", deleteCategory);

module.exports = categoryRouter;
