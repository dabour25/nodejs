'use strict';

module.exports = (Sequelize,DataTypes) =>{
  var emails= Sequelize.define('emails',{
      id:{
          allowNull:false,
          primaryKey:true,
          type:DataTypes.INTEGER,
          autoIncrement:true
      },
      email:{
          allowNull:false,
          type:DataTypes.STRING
      },
      createdAt: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
  });
  return emails;
};