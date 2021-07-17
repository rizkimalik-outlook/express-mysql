'use strict';

const response = require('./res');
const connection = require('./db_config');

exports.index = function (req, res) {
    response.ok("Aplikasi REST API ku berjalan!", res)
};

exports.barang = function (req, res) {
    connection.query('SELECT * FROM barang', function (error, rows, fileds) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res)
        }
    });
};

exports.detail = function (req, res) {
    let id = req.body.id;
    connection.query('SELECT * FROM barang WHERE id = ?', [id],
    function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res);
        }
    });
};

exports.create = function (req, res) {
    var nama_barang = req.body.nama_barang;
    var jumlah = req.body.jumlah;

    connection.query('INSERT INTO barang (nama_barang,jumlah) VALUES(?,?)',[nama_barang, jumlah],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Menambahkan Data!", res)
            }
        });
};

exports.edit = function (req, res) {
    var id = req.body.id;
    var nama_barang = req.body.nama_barang;
    var jumlah = req.body.jumlah;

    connection.query('UPDATE barang SET nama_barang=?, jumlah=? WHERE id=?', [nama_barang, jumlah, id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Ubah Data", res)
            }
        });
}

//Menghapus data berdasarkan id
exports.delete = function (req, res) {
    var id = req.body.id;
    connection.query('DELETE FROM barang WHERE id=?',[id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Hapus Data", res)
            }
        });
}