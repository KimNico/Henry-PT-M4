const { DataTypes } = require('sequelize');

module.exports = sequelize=>{
  sequelize.define('Ability',{
    name:{
      type: DataTypes.STRING,
      allowNull:false,
      unique:'compositeIndex'
    },
    description:{
      type:DataTypes.TEXT
    },
    mana_cost:{
      allowNull:false,
      type:DataTypes.FLOAT,
      unique:'compositeIndex'
    }
    
  })
}