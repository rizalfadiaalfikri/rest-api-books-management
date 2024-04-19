import sequelize from "../model/index.js";

const Book = sequelize.models.Book;
const Genre = sequelize.models.Genre;

const getBooks = async (req, res, next) => {
    try {
        const books = await Book.findAll({
            include: [
                {
                    model: Genre,
                    as: 'genre'
                }
            ]
        });

        res.status(200).json({
            status: true,
            message: "Books found",
            data: books
        });
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error
        })
    }
}

const saveBook = async (req, res, next) => {
    try {
        const genreExits = await Genre.findByPk(req.body.genre_id);

        if(!genreExits) {
            return res.status(400).json({
                status: false,
                message: 'Genre does not exist'
            })
        }

        const book = await Book.create(req.body);
        res.status(201).json({
            status: true,
            message: 'Book created',
            data: book
        });
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error
        })
    }
}

const updateBook = async (req, res, next) => {
    const { id } = req.params;
    const body = req.body;

    try {
        const book = await Book.findByPk(id);

        if(!book) {
            return res.status(404).json({
                status: false,
                message: 'Book does not exist'
            })
        }

        const existingGenre = await Genre.findByPk(body.genre_id)

        if(!existingGenre) {
            return res.status(404).json({
                status: false,
                message: 'Genre does not exist'
            })
        }

        const updatedBook = await book.update(body);
        res.status(200).json({
            status: true,
            message: 'Book updated',
            data: updatedBook
        });

    } catch (error) {
        res.status(500).json({
            status: false,
            message: error
        })
    }
}

const deletedBook = async (req, res, next) => {
    const { id } = req.params;

    const bookById = await Book.findByPk(id);
    await Book.destroy({
        where: {
            id: id,
        }
    })


    if(!bookById) {
        return res.status(404).json({
            status: false,
            message: 'Book does not exist'
        })
    }

    res.status(200).json({
        status: true,
        message: 'Book deleted successfully',
        data: bookById
    });
}

export { getBooks, saveBook, updateBook, deletedBook };