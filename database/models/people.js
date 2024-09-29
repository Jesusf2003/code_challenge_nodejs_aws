const { dbConnection } = require('./../settings')

const getList = (callback) => {
    dbConnection.query("SELECT * FROM persona", callback)
}

const save = (data, callback) => {
    dbConnection.query("INSERT INTO persona SET ?", data, callback);
}

module.exports = {
    getList,
    save
}