const mysql = require("mysql2");
const BASE_URL = "https://swapi.dev/api";

const dbConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "codechallengedb",
    port: "3306"
});

module.exports = {
    BASE_URL,
    dbConnection
}