const express = require("express");
const { signup, signin, getProfile } = require("./controllers");
const userRouter = express.Router();
const passport = require("passport");
const upload = require("../../middlewares/multer");
// safa
userRouter.post("/signup", upload.single("image"), signup);
userRouter.post(
  "/signin",
  (req, res, next) => {
    console.log("fit");
    next();
  },
  passport.authenticate("local", { session: false }),
  signin
);
userRouter.get(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  getProfile
);
module.exports = userRouter;
