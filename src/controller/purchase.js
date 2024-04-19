import sequelize from "../model/index.js";

const Purchase = sequelize.models.Purchase;
const Book = sequelize.models.Book;

const getPurchases = async (req, res, next) => {
    try {
        const purchases = await Purchase.findAll({
            include: [
                {
                    model: sequelize.models.Book,
                    as: 'book'
                }
            ]
        });
        res.status(200).json({
            status: true,
            message: "Purchase Found",
            data: purchases
        });
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error
        })
    }
}

const createPurchase = async (req, res, next) => {
    try {
        
        const body = req.body;

        const existingBook = await Book.findOne({
            where: {
                id: req.body.book_id
            }
        })

        if(!existingBook) {
            res.status(404).json({
                status: false,
                message: "Book is not found"
            })
        }

        const purchase = await Purchase.create(body)

        res.status(201).json({
            status: true,
            message: "Purchase Created Successfully",
            data: purchase
        })

    } catch (error) {
        res.status(500).json({
            status: false,
            message: error
        })
    }
}

const updatePurchase = async (req, res, next) => {
    try {
        
        const body = req.body;
        const { id } = req.params;

        const existingBook = await Book.findOne({
            where: {
                id: req.body.book_id
            }
        })

        if(!existingBook) {
            res.status(404).json({
                status: false,
                message: "Book is not found"
            })
        }

        console.log("ID: " + id)
        const existingPurchase = await Purchase.findByPk(id);

        if(!existingPurchase) {
            res.status(404).json({
                status: false,
                message: "Purchase is not found"
            })
        }

        const updatePurchase = await existingPurchase.update(body)

        res.status(200).json({
            status: true,
            message: "Purchase Updated Successfully",
            data: updatePurchase
        })

    } catch (error) {
        res.status(500).json({
            status: false,
            message: error
        })
    }
}

const deletedPurchase = async (req, res, next) => {
    try {

        const { id } = req.params

        const existingPurchase = await Purchase.findByPk(id);

        if(!existingPurchase) {
            res.status(404).json({
                status: false,
                message: "Purchase is not found"
            })
        }

        const deletedPurchase = await existingPurchase.destroy()
        res.status(200).json({
            status: true,
            message: "Purchase Deleted Successfully",
            data: deletedPurchase
        })

    } catch (error) {
        res.status(500).json({
            status: false,
            message: error
        })
    }
}

export {
    getPurchases, createPurchase, updatePurchase, deletedPurchase
}