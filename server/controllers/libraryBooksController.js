const { LibraryBooks, Books } = require('../models/models');
const ApiError = require('../error/ApiError');
const uuid = require('uuid');
const path = require('path');
class LibraryBooksController {

  async create(req,res,next) {
    const {bookId, quantity} = req.body;
    if(!bookId || !quantity) {
      return next(ApiError.badRequest('Не заполнены поля'));
    }
    const book = await LibraryBooks.create({bookId,quantity});

    return res.json(book);
  }

  async getAll(req,res,next) {
    const books = await LibraryBooks.findAll({include:{model:Books}});

    return res.json(books);
  }

  async getOne(req,res,next) {
    const {id} = req.params;
    const book = await LibraryBooks.findOne({where:{id:id}});

    return res.json(book);
  }

}

module.exports = new LibraryBooksController();