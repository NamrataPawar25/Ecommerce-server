const {DataTypes}= require("sequelize")
const sequelize= require("../config/db")

const brand= sequelize.define("brand", {
    bName: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports= brand