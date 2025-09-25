// productModel.js

const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Category = require("./categoryModel");
const Brand = require("./brandModel");

const Product = sequelize.define("product", {
  pName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pDescription: {
    type: DataTypes.STRING,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  catId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  brandId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

// Associations (make sure field names match!)
Product.belongsTo(Category, { foreignKey: "catId" });
Category.hasMany(Product, { foreignKey: "catId" });

Product.belongsTo(Brand, { foreignKey: "brandId" });
Brand.hasMany(Product, { foreignKey: "brandId" });

module.exports = Product;
