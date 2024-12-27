const Router = require('express');
const basketController = require('../controllers/basketController');

const router = new Router();

router.post('/', basketController.createBasketItem);
router.get('/', basketController.getAll);
 router.get('/:id', basketController.getOne);
/* router.post('/update', booksController.updatePost); */
/* router.get('/:id', booksController.getOne);
router.get('/', booksController.getAll); */
/* router.get('/:id', booksController.getOne);
router.put('/', booksController.deletePost); */


module.exports = router;