const ApiError = require('../error/ApiError');
const { Categories } = require('../models/models');

class CategoriesController {

  async create(req, res, next) {
    try {
      const { title } = req.body;

      if (!title) {
        return next(ApiError.badRequest("Введите название категории"));
      }
      const hasCategory = await Categories.findOne({ where: { title: title.toLowerCase() } })
      if(hasCategory) {
        return next(ApiError.badRequest("Категория уже существует"));
      }
      const category = await Categories.create({ title });

      return res.json(category);
    } catch (e) {
      return next(ApiError.badRequest(e.message))
    }
  }


  async getAll(req, res, next) {

    const categories = await Categories.findAll();

    return res.json(categories);

  }

}

module.exports = new CategoriesController();