// define  connection with local db 
// This file would hold the connection data as shown below:
// client property already defult define in Psotgrasql linke post, pass,database name
// need to install pg --save
// need to package.json for setup that will create pg
const {Client} = require('pg')

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "Ajeet123@pg",
    database: "postgres"
})

module.exports = client