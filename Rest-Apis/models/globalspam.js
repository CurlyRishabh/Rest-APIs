const {DataTypes} = require("sequelize");

module.exports = (sequelize) => {
	return sequelize.define("GlobalSpam", {
		number: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},
		spamCount: {
			type: DataTypes.SMALLINT,
			allowNull: true,
		},
	});
};
