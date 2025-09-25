const { Sequelize } = require("sequelize");

require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.USER,
  process.env.PASSWORD,
  {
    host: process.env.HOST,
    dialect: "mysql",
    logging: false,
  }
);

sequelize
.authenticate()
.then(()=>{
  console.log("Database Created sucessfully!");
})
.catch((err)=>{
  console.log("Unable to connect to the database: ", err);
});

sequelize.sync({alter: true})
.then(()=> console.log("Tables altered successfully"))
.catch(err=> console.log("Sync error: ", err))

module.exports = sequelize;
