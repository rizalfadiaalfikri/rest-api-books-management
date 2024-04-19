import sequelize from "../model/index.js";

const Sales = sequelize.models.Sales;
const Book = sequelize.models.Book;

const getSales = async (req, res, next) => {
    try {
        const sales = await Sales.findAll({
            include: [
                {
                    model: sequelize.models.Book,
                    as: 'book'
                }
            ]
        });
        res.status(200).json({
            status: true,
            message: "Sales Found",
            data: sales
        });
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error
        })
    }
}

const createSales = async (req, res, next) => {
    try {

        const body = req.body;

        const existingBook = await Book.findOne({
            where: {
                id: body.book_id
            }
        })

        if(!existingBook) {
            return res.status(404).json({
                status: false,
                message: "Book Not Found"
            })
        }

        const sales = await Sales.create(req.body);
        res.status(201).json({
            status: true,
            message: "Sales Created",
            data: sales
        });
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error
        })
    }
}

const updateSales = async (req, res, next) => {
    try {
        
        const { id } = req.params;
        const body = req.body;

        const existingBook = await Book.findOne({
            where: {
                id: body.book_id
            }
        })

        if(!existingBook) {
            return res.status(404).json({
                status: false,
                message: "Book Not Found"
            })
        }

        const existingSales = await Sales.findByPk(id)

        if(!existingSales) {
            return res.status(404).json({
                status: false,
                message: "Sales Not Found"
            })
        }

        const updateSales = await existingSales.update(body)
        res.status(200).json({
            status: true,
            message: "Sales Updated",
            data: updateSales
        });

    } catch (error) {
        res.status(500).json({
            status: false,
            message: error
        })
    }
}

const deleteSales = async (req, res, next) => {
    try {
        const { id } = req.params;

        const existingSales = await Sales.findByPk(id)

        if(!existingSales) {
            return res.status(404).json({
                status: false,
                message: "Sales Not Found"
            })
        }

        const deleteSales = await existingSales.destroy()

        res.status(200).json({
            status: true,
            message: "Sales has Successfully Deleted",
            data: deleteSales
        });

    } catch (error) {
        res.status(500).json({
            status: false,
            message: error
        })
    }
}

export {
    getSales, createSales, updateSales, deleteSales
}