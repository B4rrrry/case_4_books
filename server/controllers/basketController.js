const { Books, Categories, BasketItems, Basket, Users, TypeBuy } = require('../models/models');
const ApiError = require('../error/ApiError');
const uuid = require('uuid');
const path = require('path');
class BasketController {

  async createBasketItem(req, res, next) {
    const { basketId, bookId, typeBuyId, daysRent = null, isActual } = req.body;
    if (!basketId || !bookId || !typeBuyId || !isActual) {
      c
      return next(ApiError.badRequest('Не заполнены поля'));
    }

    const newItem = await BasketItems.create({ basketId, bookId, typeBuyId, daysRent, is_actual: isActual });

    return res.json(newItem);
  }

  async getAll(req, res, next) {
    const baskets = await Basket.findAll({ include: { model: Users } });

    return res.json(baskets);
  }

  async getOne(req, res, next) {
    const { id } = req.params;
    const baskets = await BasketItems.findAll({ where: { basketId: id, is_actual:true },include:[{model:Books,include:{model:Categories}},{model:TypeBuy}] });

    return res.json(baskets);
  }

}

module.exports = new BasketController();