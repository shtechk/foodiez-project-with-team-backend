// safa
const User = require("../../models/User");
const bcrypt = require("bcrypt");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const generateToken = (user) => {
  const payload = {
    _id: user._id,
    username: user.username,
  };
  const token = jwt.sign(payload, process.env.JWT_SECRET);
  return token;
};

const signup = async (req, res) => {
  try {
    // encrypt the password
    req.body.password = await bcrypt.hash(req.body.password, 10);

    // create new user and save his username & password in DB
    const user = await User.create(req.body);

    // call generateToken function to generate the Token for this user, so i have to send the user for the function
    const token = generateToken(user);
    res.status(201).json({ token });
  } catch (error) {
    next(error);
  }
};
const signin = async (req, res, next) => {
  try {
    const user = req.user; //this function wil not apply unless the middleware "local" work
    const token = generateToken(user); // after we catch the user and checked every thing is correct we generate token for him
    return res.status(200).json({ token });
  } catch (error) {
    next(error);
  }
};
module.exports = { signup, signin };
