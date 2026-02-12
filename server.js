require('dotenv').config()
const app = require('./src/app')
const connectToDatabase = require('./src/config/Database')

connectToDatabase()

app.listen(3000, () => {
    console.log("server is running Now");
    
})

