const { Books, Categories, BasketItems, LibraryBooks, Orders, Basket, OrderList } = require('../models/models');
const ApiError = require('../error/ApiError');
const uuid = require('uuid');
const path = require('path');

class OrdersController {

  async createOrder(req, res, next) {
    try {
      const { userId, priceTotal, status = true } = req.body;
      if (!userId || !priceTotal) {
        return next(ApiError.badRequest("Не заполнены поля"));
      }

      const newOrder = await Orders.create({ userId, price_total: priceTotal, status });
      const basketId = await Basket.findOne({ where: { id: userId } });
      const basketItems = await BasketItems.findAll({ where: { basketId: basketId.id, is_actual: true } });
      const basketItemsUpdated = await BasketItems.update({ is_actual: false }, { where: { basketId: basketId.id } });
      basketItems.map(item => {
        const newOrderList = OrderList.create({ orderId: newOrder.id, basketItemId: item.id });
      });
      return res.json(basketItems);

    } catch (e) {
      return next(ApiError.badRequest(e.message));
    }
  }

  async getAllOrders(req, res, next) {
    const orders = await Orders.findAll();

    return res.json(orders);
  }

  async getOrderById(req, res, next) {
    try {
      const { id } = req.params;
      if (!id) {
        return next(ApiError.badRequest("Не заполнены поля"));
      }

      const orders = await Orders.findAll({ where: { userId: id }, include:[{model:OrderList,include:[{model:BasketItems,include:[{model:Books}]}]}]});
     /*  const orderItem = await OrderList.findOne({ where: { orderId: orders.id }});
      const basketId = await BasketItems.findOne({where:{id:orderItem.basketItemId}}); */


      return res.json(orders);

    } catch (e) {
      return next(ApiError.badRequest(e.message));
    }
  }

}

module.exports = new OrdersController();