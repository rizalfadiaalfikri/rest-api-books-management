import sequelize from "../model/index.js";

const Book = sequelize.models.Book;

const getBooks = async (req, res, next) => {
    try {
        const books = await Book.findAll();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json(error)
    }
}

export { getBooks };