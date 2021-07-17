'use strict';

module.exports = function (app) {
    const jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);
        
    app.route('/barang')
        .get(jsonku.barang);
        
    app.route('/detail')
        .post(jsonku.detail);
        
    app.route('/create')
        .post(jsonku.create);
        
    app.route('/edit')
        .post(jsonku.edit);
        
    app.route('/delete')
        .post(jsonku.delete);

}