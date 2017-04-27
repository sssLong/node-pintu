var connection = require('../test.js');
var sql = 'SELECT * FROM user_infor';

module.exports = function(cb) {
    connection.query(sql, function(err, result) {
        if (err) {
            console.log('[INSERT ERROR] - ', err.message);
            return;
        }
        cb(result)
    });
}
