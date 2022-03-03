const { DataTypes } = require('sequelize');
const { db } = require('../utils/database');

const Cats = db.define(
	'cats',
	{
		id: {
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
			type: DataTypes.INTEGER,
		},
		img: {
			type: DataTypes.STRING(100),
			allowNull: false,
		},
		name: {
			type: DataTypes.STRING(100),
			allowNull: false,
		},
		text: {
			type: DataTypes.STRING(255),
			allowNull: false,
		},
		data: {
			type: DataTypes.STRING(),
			allowNull: false,
		},
	},
	{ timestamps: false }
);

module.exports = { Cats };
