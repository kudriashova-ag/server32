import express from 'express';
import BooksController from '../controllers/BooksController.mjs';

const booksRouter = express.Router();
booksRouter.get('/', BooksController.all);
booksRouter.get('/:id', BooksController.byId);
booksRouter.post('/', BooksController.create);
booksRouter.put('/:id', BooksController.update);
booksRouter.delete('/:id', BooksController.remove);

export default booksRouter;