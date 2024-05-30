import { model, Schema } from "mongoose";

const schema = new Schema({
    title: { type: String, required: true },
    year: { type: Number, min: 1800, max: new Date().getFullYear(), required: true },
    description: { type: String },
    price: { type: Number, min: 1, required: true }
});

const Book = new model('Book', schema);
export default Book;