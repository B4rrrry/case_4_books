const Router = require('express');
const booksController = require('../controllers/booksController');

const router = new Router();

router.post('/', booksController.create);
router.post('/update', booksController.editBook);
/* router.post('/update', booksController.updatePost); */
router.get('/:id', booksController.getOne);
router.get('/', booksController.getAll);
/* router.get('/:id', booksController.getOne);
router.put('/', booksController.deletePost); */


module.exports = router;