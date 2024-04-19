import { Sequelize } from "sequelize";

const Purchase = {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    unit_price: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    quantity: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    total_price: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    purchase_date: {
        type: Sequelize.DATE,
        allowNull: false
    }
}

export default Purchase;