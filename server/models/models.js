const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const Users = sequelize.define(
  "users",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    login: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
    f_name: { type: DataTypes.STRING, allowNull: false },
    s_name: { type: DataTypes.STRING, allowNull: false },
    l_name: { type: DataTypes.STRING, allowNull: false },
    //role_id
  }
);

const Basket = sequelize.define(
  "basket",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    //user_id
  }
)

const BasketItems = sequelize.define(
  "basket_items",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    //basket_id
    //library_books_id
    //type_buy_id
    days_rent: { type: DataTypes.DATEONLY, allowNull: true },
    //quantity: { type: DataTypes.STRING, allowNull: false },
    is_actual: { type: DataTypes.BOOLEAN, allowNull: false }
  }
)

/* const LibraryBooks = sequelize.define(
  "library_books",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    //book_id
    //quantity: { type: DataTypes.STRING, allowNull: false }
  }
)
 */
const Orders = sequelize.define(
  "orders",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    //user_id
    price_total: { type: DataTypes.STRING, allowNull: false },
    status: { type: DataTypes.STRING, defaultValue: 'В работе' }
  }
)

const OrderList = sequelize.define(
  "order_list",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    //order_id
    //basket_items_id
  }
)

const Roles = sequelize.define(
  "roles",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, allowNull: false, unique: true }
  }
)

const TypeBuy = sequelize.define(
  "type_buy",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, allowNull: false, unique: true }
  }
)

const Categories = sequelize.define(
  "categories",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, allowNull: false, unique: true },
  }
)

const Books = sequelize.define(
  "books",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, allowNull: false, unique: true },
    description: { type: DataTypes.STRING, allowNull: false},
    price: { type: DataTypes.STRING, allowNull: false },
    fileName: { type: DataTypes.STRING, allowNull: false,},
    author: { type: DataTypes.STRING, allowNull: false  },
    year_writting: { type: DataTypes.DATEONLY, allowNull: false },
    //categoryId
  }
)

Roles.hasOne(Users);
Users.belongsTo(Roles);

Users.hasOne(Basket)
Basket.belongsTo(Users);

Users.hasOne(Orders)
Orders.belongsTo(Users);

Categories.hasOne(Books);
Books.belongsTo(Categories);

/* Books.hasOne(LibraryBooks);
LibraryBooks.belongsTo(Books); */

Basket.hasMany(BasketItems);
BasketItems.belongsTo(Basket);

Books.hasMany(BasketItems)
BasketItems.belongsTo(Books);


/* LibraryBooks.hasMany(BasketItems,{foreignKey:{
  allowNull:false
}});
BasketItems.belongsTo(LibraryBooks); */

TypeBuy.hasMany(BasketItems);
BasketItems.belongsTo(TypeBuy);

Orders.hasMany(OrderList);
OrderList.belongsTo(Orders);

BasketItems.hasMany(OrderList);
OrderList.belongsTo(BasketItems);

module.exports = {
  Users,
  Basket,
  BasketItems,
  Orders,
  OrderList,
  Roles,
  TypeBuy,
  Categories,
  Books
}