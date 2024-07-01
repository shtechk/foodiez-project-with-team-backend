const express = require("express");
const { signup, signin } = require("./controllers");
const userRouter = express.Router();
const passport = require("passport");
// safa
userRouter.post("/signup", signup);
userRouter.post(
  "/signin",
  (req, res, next) => {
    console.log("fit");
    next();
  },
  passport.authenticate("local", { session: false }),
  signin
);
module.exports = userRouter;
