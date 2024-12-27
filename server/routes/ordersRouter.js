const Router = require('express');
const ordersController = require('../controllers/ordersController');

const router = new Router();

router.post('/', ordersController.createOrder);
router.get('/', ordersController.getAllOrders);
 router.get('/:id', ordersController.getOrderById);
/* router.post('/update', booksController.updatePost); */
/* router.get('/:id', booksController.getOne);
router.get('/', booksController.getAll); */
/* router.get('/:id', booksController.getOne);
router.put('/', booksController.deletePost); */


module.exports = router;