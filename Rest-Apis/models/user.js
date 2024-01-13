// models/user.js
const {DataTypes} = require("sequelize");

module.exports = (sequelize) => {
	return sequelize.define("User", {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		username: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		mail: {
			type: DataTypes.STRING,
			allowNull: true,
			unique: true,
		},
		number: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
		},
        contact_list: {
            type: DataTypes.TEXT ,
			allowNull: true, 
        },
	});
};
