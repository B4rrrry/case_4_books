const Router = require('express');
const categoriesController = require('../controllers/categoriesController');

const router = new Router();

router.post('/', categoriesController.create);
router.get('/', categoriesController.getAll);



module.exports = router;