const Router = require('express');
const typeBuyController = require('../controllers/typeBuyController');

const router = new Router();

router.post('/', typeBuyController.create);
router.get('/', typeBuyController.getAll);

module.exports = router;