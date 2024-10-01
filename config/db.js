import Sequelize from "sequelize";
// import dotenv from 'dotenv';
// dotenv.config();

// const db = new Sequelize(process.env.DATABASE_URL, {
const db = new Sequelize("agenciaviajes", "root", "root", {
  host: "127.0.0.1",
  port: "3306",
  dialect: "mysql",
  define: {
    timestamps: false,
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  operatorAliases: false,
});

export default db;
