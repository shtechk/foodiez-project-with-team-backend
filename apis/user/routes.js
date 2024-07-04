const express = require("express");
const { register, login, getProfile } = require("./controllers");
const userRouter = express.Router();
const passport = require("passport");
const upload = require("../../middlewares/multer");

userRouter.post("/register", register);

userRouter.post(
  "/login",
  passport.authenticate("local", { session: false }),
  login
);

userRouter.get(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  getProfile
);

module.exports = userRouter;
