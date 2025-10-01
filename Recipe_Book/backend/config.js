const mysql = require("mysql");

const mysqlConfig = {
    host: "localhost", 
    port: 3306,
    user: "testuser", 
    password: "mypassword",
    database: "recipebook-db",
    debug: false
};

// ----------------------------------------------
// (C) Establishing connection using the options
//     defined in mySQLConfig (without a query)
// ----------------------------------------------
const dbConnection = mysql.createConnection(mysqlConfig);
dbConnection.connect(function(err) {
    // unsucessful: handle any errors that might occur during connection
    if (err) {
        console.error('Opps. There was an error connecting to the database: ', err.stack);
        return;
    }
    // successful: output on the screen a message that connection was successful
    console.log('Backend is now connected to: ' + dbConnection.config.database + '.');
});

// ----------------------------------------------
// (D) This module exports dbConnection to be 
//     used other files (e..g, index.js)
// ----------------------------------------------
module.exports = dbConnection;
