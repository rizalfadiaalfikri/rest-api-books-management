import { Sequelize } from "sequelize";
import "dotenv/config"

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        dialect: process.env.DB_DIALECT,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        operatorsAliases: false,
        logging: process.env.NODE_ENV === 'development' ? (...msg) => console.log(msg) : false,
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
        dialectOptions: {
            // requestTimeout: 30000,
            // encrypt: true,
            // useUTC: false,
            dateStrings: true,
            typeCast(field, next) {
                if (field.type === "DATETIME") {
                    return field.string();
                }
                return next();
            }
        },
        // timezone: 'Asia/Jakarta',
        insecureAuth: true,
    }
)

export default sequelize;