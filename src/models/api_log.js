const { DataTypes, UUIDV4 } = require("sequelize");
const db = require("../config/db")

const sequelize = db.getInstance();

const api_log = sequelize.define(
    'api_log',{
        id:{
            type:DataTypes.UUID,
            defaultValue:UUIDV4,
            primaryKey: true
        },
        path:{
            type: DataTypes.TEXT,
            allowNull:false
        },
        method:{
            type:DataTypes.STRING,
            allowNull:false
        },
        request_payload:{
            type:DataTypes.JSONB,
            allowNull:true
        },
        response_payload:{
            type:DataTypes.JSONB,
            allowNull:true
        },
        request_status:{
            type:DataTypes.ENUM,
            values:["ongoing","success","failed"],
            defaultValue:"ongoing"
        }
    },{
        tableName:'apiLogs',
        timestamps:true,
        paranoid:true,
    }
)

module.exports = api_log