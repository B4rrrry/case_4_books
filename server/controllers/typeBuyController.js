const ApiError = require('../error/ApiError');
const { TypeBuy } = require('../models/models');

class TypeBuyController {

  async create(req, res, next) {
    try {
      const { title } = req.body;

      if (!title) {
        return next(ApiError.badRequest("Введите название типа покупки"));
      }
      const type = await TypeBuy.create({ title });
  
      return res.json(type);
    } catch (e) {
      return next(ApiError.badRequest(e.message))
    }
  }


  async getAll(req,res,next) {

    const types = await TypeBuy.findAll();

    return res.json(types);

  }

}

module.exports = new TypeBuyController();