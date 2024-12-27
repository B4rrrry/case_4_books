const ApiError = require('../error/ApiError');
const { Roles } = require('../models/models');

class RolesController {

  async create(req, res, next) {
    try {
      const { title } = req.body;

      if (!title) {
        return next(ApiError.badRequest("Введите название роли"));
      }
      const role = await Roles.create({ title });
  
      return res.json(role);
    } catch (e) {
      return next(ApiError.badRequest(e.message))
    }
  }


  async getAll(req,res,next) {

    const roles = await Roles.findAll();

    return res.json(roles);

  }

}

module.exports = new RolesController();