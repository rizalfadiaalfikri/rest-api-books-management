import sequelize from "../util/db.js";
import Book from "./book.js";
import Genre from "./genre.js";
import Purchase from "./purchase.js";
import Sales from "./sales.js";
import User from "./user.js";

const book = sequelize.define('Book', Book, {tableName: 'book', underscored: true});
const genre = sequelize.define('Genre', Genre, {tableName: 'genre', underscored: true});

genre.hasOne(book, {
    foreignKey: 'genre_id',
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
})

book.belongsTo(genre, {
    foreignKey: 'genre_id',
    as: 'genre',
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
})


const purchase = sequelize.define('Purchase', Purchase, {tableName: 'purchase', underscored: true});

book.hasMany(purchase, {
    foreignKey: 'book_id',
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
})

purchase.belongsTo(book, {
    foreignKey: 'book_id',
    as: 'book',
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
})

const sales = sequelize.define('Sales', Sales, {tableName: 'sales'});

book.hasMany(sales, {
    foreignKey: 'book_id',
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
})

sales.belongsTo(book, {
    foreignKey: 'book_id',
    as: 'book',
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
})


const user = sequelize.define('User', User, {tableName: 'user'});

sequelize.sync();

export default sequelize;