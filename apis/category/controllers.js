const Category = require("../../models/Category");

const getAllCategories = async (req, res, next) => {
  try {
    const category = await Category.find();
    return res.status(200).json(category);
  } catch (error) {
    next(error);
  }
};

const createNewCategory = async (req, res, next) => {
  try {
    const newCategory = await Category.create(req.body);
    return res.status(201).json(newCategory);
  } catch (error) {
    next(error);
  }
};

const deleteCategory = async (req, res, next) => {
  try {
    await Category.findByIdAndRemove({ _id: req.Category.id });
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

const updateCategory = async (req, res, next) => {
  try {
    await Category.findByIdAndUpdate(req.Category.id, req.body);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

const getOneCategory = async (req, res, next) => {
  try {
    const category = await Category.find();
    res.json(category);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllCategories,
  createNewCategory,
  deleteCategory,
  updateCategory,
  getOneCategory,
};
