var mysql = require('mysql');

//buat koneksi database
const conn = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'kosong07',
    database:'gudang',
    port: '3306'
});

conn.connect((err)=>{
    if(err) throw err;
    console.log('Mysql terkoneksi OK');
});

module.exports = conn;