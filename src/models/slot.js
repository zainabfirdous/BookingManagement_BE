const { DataTypes, UUIDV4 } = require("sequelize");
const db = require("../congif/db");
const partyHall = require("./partyHall");

const sequelize = db.getInstance();

const slot = sequelize.define(
    'slot',{
        slot_id:{
            type:DataTypes.UUID,
            defaultValue:UUIDV4,
            primaryKey: true
        },
        hall_id:{
            type: DataTypes.UUID,
            references:{
                model:partyHall,
                key:'hall_id'
            },
            allowNull:false,
        },
        date:{
            type:DataTypes.DATEONLY,
            allowNull:false
        },
        start_time:{
            type:DataTypes.DATE,
            allowNull:false,
        },
        end_time:{
            type:DataTypes.DATE,
            allowNull:false
        },
        status:{
            type:DataTypes.ENUM,
            values:["booked","available","reserved"]
        }
    },{
        tableName:'slots',
        timestamps:true,
        paranoid:true,
        indexes:[
            {
                unique:false,
                fields:["slot_id"]
            },
            {
                unique:false,
                fields:["hall_id"]
            }
        ]
    } 
)

slot.belongsTo(partyHall, { foreignKey: 'hall_id', onDelete: 'CASCADE' });
partyHall.hasMany(slot, { foreignKey: 'hall_id' });

module.exports = slot;