const express = require("express");
const { signup, signin } = require("./controllers");
const passport = require("passport");
const userRouter = express.Router();

// safa
userRouter.post("/signup", signup);
userRouter.post(
  "/signin",
  passport.authenticate("local", { session: false }),
  signin
);
module.exports = userRouter;
