import { Sequelize } from "sequelize";
import {encrypt} from "../util/bcrypt.js"

const User = {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        valdate: {
            isEmail: true
        },
        set(value) {
            this.setDataValue("email", value.toLowerCase());
          },
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
        set(value) {
            this.setDataValue('password', encrypt(value));
        }
    },
    birthOfDate: {
        type: Sequelize.DATE,
        allowNull: false
    }
}

export default User;