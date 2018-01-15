let mysql      = require('mysql');
const connection = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : 'root',
    port: '3306',
	database:'test'
});

//开始你的mysql连接
connection.connect();

module.exports = connection;
