const { DataTypes, UUIDV4 } = require("sequelize");
const db = require("../config/db");
const user = require("./user");

const sequelize = db.getInstance();

const user_secret = sequelize.define(
    'user_Secret',{
        id:{
            type:DataTypes.UUID,
            defaultValue:UUIDV4,
            primaryKey: true
        },
        user_id:{
            type:DataTypes.UUID,
            references:{
                model:user,
                key:'user_id'
            },
            allowNull:false,
            unique:true
        },
        user_name:{
            type:DataTypes.STRING(100),
            allowNull:false,
            unique:true
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false,
        }
    },{
        tableName:'user_secrets',
        timestamps:true,
        paranoid:true,
        indexes:[
            {
                unique:false,
                fields:["user_id"]
            },
        ]}
)

user_secret.belongsTo(user, { foreignKey: 'user_id', onDelete: 'CASCADE' });
user.hasOne(user_secret, { foreignKey: 'user_id' });

module.exports = user_secret