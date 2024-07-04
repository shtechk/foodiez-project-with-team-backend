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

const register = async (req, res) => {
  try {
    const image = req.file ? req.file.path : null;
    if (image) req.body.image = image;
    req.body.password = await bcrypt.hash(req.body.password, 10);

    const user = await User.create(req.body);
    const token = generateToken(user);
    res.status(201).json({ token });
  } catch (error) {
    res.json(error);
  }
};

const login = async (req, res, next) => {
  try {
    console.log("first");
    const user = req.user;
    const token = generateToken(user);
    return res.status(200).json({ token });
  } catch (error) {
    next(error);
  }
};

const getProfile = async (req, res, next) => {
  try {
    return res.status(200).json(req.user);
  } catch (error) {
    next(error);
  }
};

module.exports = { register, login, getProfile };
