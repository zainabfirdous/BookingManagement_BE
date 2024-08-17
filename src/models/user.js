const { DataTypes, UUIDV4 } = require("sequelize");
const db = require("../config/db")

const sequelize = db.getInstance();

const user = sequelize.define(
    'user',{
        user_id:{
            type:DataTypes.UUID,
            defaultValue:UUIDV4,
            primaryKey: true
        },
        email:{
            type:DataTypes.STRING(255),
            validate:{
                isEmail:true
            },
            allowNull:false,
            unique:true,
        },
        phone_number:{
            type:DataTypes.STRING(10),
            allowNull:false
        },
        user_type:{
            type:DataTypes.ENUM,
            values:["customer","manager","admin"]
        }
    },{
        tableName:'users',
        timestamps:true,
        paranoid:true,
        indexes:[
            {
                unique:false,
                fields:["user_id"]
            },
            {
                unique:false,
                fields:["email"]
            },
            {
                unique:false,
                fields:["phone_number"]
            },
        ]
    }
)

module.exports = user;