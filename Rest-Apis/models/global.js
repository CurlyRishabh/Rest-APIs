const {DataTypes} = require("sequelize");
const {User} = require("./");



module.exports = (sequelize) => {
	const Global =  sequelize.define("Global", {
		userId: {
			type: DataTypes.INTEGER,
		},
		username: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		number: {
			type: DataTypes.STRING,
			
            allowNull: false,
			unique: true,
            primaryKey: true,
		},
		mail:{
			type: DataTypes.STRING,
            allowNull: true,
			unique: true,
		},
		spamCount: {
			type: DataTypes.SMALLINT,
			allowNull: true,
		}
	});

  
    Global.associate = (models) => { Global.belongsTo(models.User, {foreignKey: "userId", allowNull: true})};

    
    return Global;

};
