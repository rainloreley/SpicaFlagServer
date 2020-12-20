const Sequelize = require("sequelize");
require("dotenv").config();

const db = new Sequelize(
	process.env.DB_NAME,
	process.env.DB_USERNAME,
	process.env.DB_PASSWORD,
	{
		host: process.env.DB_HOST,
		dialect: "mariadb",
		dialectOptions: {
			timezone: "Etc/GMT0",
		},
	}
);

module.exports = db;
require("./User")(db);
