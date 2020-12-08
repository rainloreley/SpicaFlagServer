const { DataTypes } = require("sequelize");

module.exports = (db) => {
	db.User = db.define(
		"user",
		{
			uid: {
				primaryKey: true,
				type: DataTypes.UUID,
				allowNull: false,
			},
			ring: {
				type: DataTypes.STRING,
				allowNull: false,
			},
		},
		{
			paranoid: false,
			updatedAt: false,
		}
	);
};
