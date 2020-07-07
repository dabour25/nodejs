'use strict';
module.exports = {
    up:(queryInterface,Sequelize)=>{
        return queryInterface.createTable('emails',{
            id:{
                allowNull:false,
                primaryKey:true,
                type:Sequelize.INTEGER,
                autoIncrement:true
            },
            email:{
                allowNull:false,
                type:Sequelize.STRING
            },
            createdAt: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
            },
            updatedAt: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
            },
        });
    },
    down:(queryInterface,Sequelize)=>{
        return queryInterface.dropTable('emails');
    }
};