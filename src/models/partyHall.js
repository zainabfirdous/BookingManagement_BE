const { DataTypes, UUIDV4 } = require("sequelize");
const db = require("../config/db")

const sequelize = db.getInstance();

const partyHall = sequelize.define(
    'partyHall',{
        hall_id:{
            type: DataTypes.UUID,
            defaultValue:UUIDV4,
            primaryKey: true
        },
        name:{
            type: DataTypes.STRING,
            allowNull:false
        },
        capacity:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        location:{
            type:DataTypes.STRING,
            allowNull:false
        },
        booking_type:{
            type: DataTypes.ENUM,
            values:["fullDay", "hourly", "custom"],
        },
},{
tableName:'partyHalls',
timestamps:true,
paranoid: true,
indexes: [ 
    {
        unique: false,
        fields: ["hall_id"]
    }
]
})

module.exports = partyHall