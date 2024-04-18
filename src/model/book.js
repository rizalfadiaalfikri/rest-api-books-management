import { Sequelize } from "sequelize";

const Book = {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    author: {
        type: Sequelize.STRING,
        allowNull: false
    },
    publisher: {
        type: Sequelize.STRING,
        allowNull: false
    },
    publication_year: {
        type: Sequelize.INTEGER
    },
    price: {
        type: Sequelize.INTEGER
    },
    stock_quantity: {
        type: Sequelize.INTEGER
    }
}

export default Book;