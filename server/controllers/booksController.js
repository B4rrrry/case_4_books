const { Books, Categories } = require('../models/models');
const ApiError = require('../error/ApiError');
const uuid = require('uuid');
const path = require('path');
class BooksController {

  async create(req, res, next) {
    try {
      const { title, description, author, categoryId, yearWritting, price } = req.body;
      if (!req.files) {
        return next(ApiError.badRequest("Не загружено превью для поста"));
      }

      const file = req.files.file;
      console.log(file.name, ';fiel')
      if (!title || !description || !author || !categoryId || !yearWritting || !file || !price) {
        return next(ApiError.badRequest('Не заполнены необходимые поля'))
      }
      const fileArr = file.name.split('.');
      const fileName = uuid.v4() + '.' + fileArr[fileArr.length - 1];
      const book = await Books.create({ title, description, author, fileName, categoryId, year_writting: yearWritting, price });
      if (!book) {
        return next(ApiError.badRequest("Ошибка"));
      }

      file.mv(path.resolve(__dirname, '..', 'static', 'books', fileName));

      return res.json(book);
    } catch (e) {
      return next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res, next) {
    const books = await Books.findAll({ include: { model: Categories } });

    return res.json(books);
  }

  async getOne(req, res, next) {
    const { id } = req.params;
    const book = await Books.findOne({ where: { id: id }, include: { model: Categories } });

    return res.json(book);
  }

  async editBook(req, res, next) {
    const { title, description, author, categoryId, yearWritting, price,id } = req.body;
    if (!title || !description || !author || !categoryId || !yearWritting ||  !price || !id) {
      return next(ApiError.badRequest('Не заполнены необходимые поля'))
    }
    const newBook = await Books.update({ title, description, author, categoryId, yearWritting, price }, { where: { id } })
  }

}

module.exports = new BooksController();