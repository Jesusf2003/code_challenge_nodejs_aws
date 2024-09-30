const mysql = require("mysql2");

const dbConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "codechallengedb",
    port: "3306"
});

module.exports = {
    dbConnection
}