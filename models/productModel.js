const {DataTypes}= require("sequelize")
const sequelize= require("../config/db")

const product= sequelize.define("brand", {
    pName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    pDescription: {
        type: DataTypes.STRING
    },
    price:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    catId:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    brandId:{
        type: DataTypes.INTEGER,
        allowNull: false
    }

})

module.exports= product