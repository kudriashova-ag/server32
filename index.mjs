import express from 'express';
import booksRouter from './routes/booksRouter.mjs';
import db from './db/db.mjs';

const app = express();

db.on("error", () => console.log("DB connect error"));
db.on("connected", () => console.log("DB connect"));

app.use(express.json())


app.get('/', (request, response) => {
    response.send('Hello');
});

app.use('/books', booksRouter);

app.listen(4000, () => {
    console.log('Server is running on http://localhost:4000/');
})