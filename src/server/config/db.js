var mysql = require('mysql');
const db = mysql.createPool({
    host : 'localhost',
    user : 'root',
    password : '0000',
    database : 'manager'
})

module.exports = db;

var mysql = require('mysql');
const dbChain = mysql.createPool({
    host : 'localhost',
    user : 'root',
    password : '0000',
    database : 'manager'
})

module.exports = dbChain;

