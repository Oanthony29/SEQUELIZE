import Sequelize from 'sequelize';
import db from '../Config/dbConfig.js';

const {DataTypes} = Sequelize;

const saleModel = db.define('saleTrade', {
    productName: {
        type: DataTypes.STRING
    },
    productPrice: {
        type: DataTypes.DOUBLE
    }
 }, {
        freezeTableName: true
});

export  default saleModel;