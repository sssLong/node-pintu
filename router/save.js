var app = require("express")
var connection = require('../test.js');
var router = app.Router();

router.post('/save', function(req, res) {
	console.log(req.session)
    var data = req.body;
    var sql = 'UPDATE user_infor SET num = ' + data.guan + ' WHERE user_name = "' + data.user_name + '"';
    connection.query(sql, function(err, result) {
        if (err) {
            console.log('[UPDATE ERROR] - ', err.message);
            return;
        }
        console.log(result)
    });

})

module.exports = router;