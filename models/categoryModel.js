const {DataTypes}= require("sequelize")
const sequelize= require("../config/db")

const category= sequelize.define("category", {
    cName: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports= category