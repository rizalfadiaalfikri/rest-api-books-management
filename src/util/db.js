import { Sequelize } from "sequelize";
import "dotenv/config"

const sequelize  = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT,
        port: Number(process.env.DB_PORT),
        operatorsAliases: false,
        logging: process.env.NODE_ENV === 'development' ? (...msg) => console.log(msg) : false,
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    }
)

export default sequelize;