const Category = require("../../models/Categories");

const getAllCategories = async (req, res, next) => {
  try {
    const categories = await Category.find();
    return res.status(200).json(categories);
  } catch (error) {
    next(error);
  }
};

const createNewCategory = async (req, res, next) => {
  try {
    console.log(req.body);
    const { title } = req.body;
    const image = req.file ? req.file.path : null;

    const newCategory = await Category.create({ title, image });
    return res.status(201).json(newCategory);
  } catch (error) {
    next(error);
  }
};

const deleteCategory = async (req, res, next) => {
  try {
    await Category.findByIdAndRemove(req.params.id);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

const updateCategory = async (req, res, next) => {
  try {
    const { title } = req.body;
    const image = req.file ? req.file.path : null;

    const updateData = { title };
    if (image) updateData.image = image;

    await Category.findByIdAndUpdate(req.params.id, updateData);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

const getOneCategory = async (req, res, next) => {
  try {
    const category = await Category.findById(req.params.id);
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
