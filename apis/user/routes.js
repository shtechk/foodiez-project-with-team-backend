const express = require("express");
const { register, login, getProfile } = require("./controllers");
const userRouter = express.Router();
const passport = require("passport");
const upload = require("../../middlewares/multer");

userRouter.post("/signup", upload.single("image"), register);

userRouter.post(
  "/signin",
  passport.authenticate("local", { session: false }),
  login
);

userRouter.get(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  getProfile
);

module.exports = userRouter;
