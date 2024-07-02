const express = require("express");
const connectDB = require("./database");
const passport = require("passport");
const userRouter = require("./apis/user/routes");
const notFoundHandler = require("./middlewares/notFoundHandler");
const errorHandler = require("./middlewares/errorHandler");
const path = require("path");
const morgan = require("morgan");
const cors = require("cors");
const { localStrategy, jwtStrategy } = require("./middlewares/passport");
const recipeRouter = require("./apis/recipe/routes");
const categoryRouter = require("./apis/category/routes");
const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(passport.initialize());
passport.use("local", localStrategy);
passport.use("jwt", jwtStrategy);

app.use("/media", express.static(path.join(__dirname, "media")));
app.use("/api/auth", userRouter);
app.use("/api/recipes", recipeRouter);
app.use("/api/category", categoryRouter);
// app.use("/api/ingredient", ingredientRouter);

app.use(notFoundHandler);
app.use(errorHandler);

connectDB();
app.listen(8000, () => {
  console.log("localhost 8000");
});
