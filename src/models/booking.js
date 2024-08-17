const { DataTypes, UUIDV4, UUID } = require("sequelize");
const db = require("../config/db");
const slot = require("./slot");
const user = require("./user");

const sequelize = db.getInstance();

const booking = sequelize.define(
    'booking',{
        booking_id:{
            type:DataTypes.UUID,
            defaultValue: UUIDV4,
            primaryKey: true
        },
        user_id:{
            type:DataTypes.UUID,
            references:{
                model: user,
                key:'user_id'
            },
            allowNull:false
        },
        slot_id:{
            type:DataTypes.UUID,
            references:{
                model: slot,
                key:'slot_id'
            },
            allowNull:false
        },
        booking_date:{
            type:DataTypes.DATEONLY,
            allowNull:false
        },
        status:{
            type:DataTypes.ENUM,
            values:["booked", "pending", "cancelled"]
        }
    },{
        tableName:'bookings',
        timestamps:true,
        paranoid:true,
        indexes:[
            {
                unique:false,
                fields:["slot_id"]
            },
            {
                unique:false,
                fields:["user_id"]
            },
            {
                unique:false,
                fields:["booking_id"]
            }
        ]
    }
)

booking.belongsTo(user, { foreignKey: 'user_id', onDelete: 'CASCADE' });
user.hasOne(booking, { foreignKey: 'user_id' });

booking.belongsTo(slot, { foreignKey: 'slot_id', onDelete: 'CASCADE' });
slot.hasOne(booking, { foreignKey: 'slot_id' });

module.exports = booking