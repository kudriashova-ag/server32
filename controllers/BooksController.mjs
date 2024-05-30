import Book from "../models/book.mjs";

const all = async (req, res) => {
    const books = await Book.find({});
    res.send(books);
}

const byId = async (req, res) => {
    const id = req.params.id;
    const book = await Book.findById(id);
    res.send(book);
}

const create = async (req, res) => {
    // взяти дані з запиту
    const data = req.body;
    // додати нову в бд
    const book = new Book(data);
    await book.save();
    res.send(book);
}

const update = async (req, res) => {
    const id = req.params.id;
    // взяти дані з запиту
    const data = req.body;
    // оновити в БД
    await Book.findByIdAndUpdate(id, data);
    res.send({id});
}

const remove = async (req, res) => {
    const id = req.params.id;
    await Book.findByIdAndDelete(id);
    res.send({id});
}

export default { all, byId, create, update, remove };