const { Sequelize, DataTypes } = require ('sequelize')

const sequelize = new Sequelize('postgres://kim:12345@localhost:5432/demo')

//Creacion de Modelos de tablas para la base de datos 
const Player = sequelize.define('Player',{
    firstName:{
        type:DataTypes.STRING
    },
    lastName:{
        type: DataTypes.STRING
    },
    age:{
        type: DataTypes.INTEGER
    },
    skill:{
        type:DataTypes.FLOAT,
        defaultValue:50.0
    }
});

const Team = sequelize.define('Team',{
    code:{
        type: DataTypes.STRING(3),
        primaryKey:true
    },
    name:{
        type: DataTypes.STRING
    },
    uniqueOne:{
        type: DataTypes.STRING,
        unique:'compositeIndex'
    },
    uniqueTwo:{
        type: DataTypes.INTEGER,
        unique:'compositeIndex'
    }
})

sequelize.sync({alter:true})
.then(async()=>{
    console.log("Modelo sincronizado");

    const player = await Player.create({
        firstName:"Nicolas",
        lastName:"Kim",
        age:22,
        skill: 56
    })
    const player1 = await Player.create({
        firstName:"Enzo",
        lastName:"Fernandez",
        age:24,
        skill: 90
    })
    const team1 = await Team.create({
        code:"RVR",
        name:"River",
        uniqueOne: 'R',
        uniqueTwo:1
    })
})