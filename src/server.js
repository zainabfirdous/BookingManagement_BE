const {app} = require("./config/app")
const database = require("./config/db")
const {host, port} = require("./constant")

const startServer = async()=>{
    await database.testConnection();
    app.listen(port, host, (err)=>{
    if(err){
        console.log(`Error starting server: ${err}`)
    }
    console.log(`Server is running on http://${host}:${port}`)
})
}

startServer();