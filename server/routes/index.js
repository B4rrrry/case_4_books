const Router = require('express');
const typeBuyRouter = require('./typeBuyRouter');
const usersRouter = require('./userRouter');
const booksRouter = require('./booksRouter');
const categoriesRouter = require('./categoriesRouter');
const rolesRouter = require('./rolesRouter');
const basketRouter = require('./basketRouter');
const libraryBooksRouter = require('./libraryBooksRouter');
const ordersRouter = require('./ordersRouter');

const router = new Router();

router.use('/users', usersRouter);
router.use('/books', booksRouter);
router.use('/categories', categoriesRouter);
router.use('/typebuy', typeBuyRouter);
router.use('/roles', rolesRouter);
router.use('/basket', basketRouter);
router.use('/library', libraryBooksRouter);
router.use('/orders', ordersRouter);


module.exports = router;