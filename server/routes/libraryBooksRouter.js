const Router = require('express');
const LibraryBooksController = require('../controllers/libraryBooksController');

const router = new Router();

router.post('/', LibraryBooksController.create);
router.get('/', LibraryBooksController.getAll);
router.get('/:id', LibraryBooksController.getOne);

/* router.post('/update', booksController.updatePost); */
/* router.get('/:id', booksController.getOne);
router.get('/', booksController.getAll); */
/* router.get('/:id', booksController.getOne);
router.put('/', booksController.deletePost); */


module.exports = router;