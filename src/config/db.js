const sequelize = require("sequelize")

class db{
    constructor(){
        this.sequelizeInstance = null;
    }

    initialize(){
        if(!this.sequelizeInstance){
        this.sequelizeInstance = new sequelize(
            'BookingManagement',
            'postgres',
            '1234',
            {
                host: 'localhost',
                port:5432,
                dialect:'postgres'
            }) 
        }
        return this.sequelizeInstance;
    }

    async testConnection()
    {
        const dbInstance = this.initialize();
        try{
            await dbInstance.authenticate();
            console.log("connection has been successfully established");
        
            await dbInstance.sync();
            console.log("table synchronization with database done")
        }catch(err){
            console.log(`Error while establishing db connection: ${err}`)
        }
    }

}

module.exports = new db()