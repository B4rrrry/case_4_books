const Router = require('express');
const rolesController = require('../controllers/rolesController');

const router = new Router();

router.post('/', rolesController.create);
router.get('/', rolesController.getAll);

module.exports = router;