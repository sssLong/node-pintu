var app = require("express")
var user = require('./../server/register.js');
var router = app.Router();

router.post('/register', function(req, res) {
    user(function(result) {
        var data = req.body;
        var infor = result;
        var flag = true;

        for (var i = 0; i < infor.length; i++) {
            if (data.user_name == infor[i].user_name) flag = false
        }
        if (!flag) {
            res.send('该账号已经被注册')
        } else {
            res.send('恭喜你注册成功')
            var addSql = 'INSERT INTO user_infor(Id,user_name,password,num) VALUES(0,?,?,?)';
            var addSqlParams = [data.user_name, data.password, 2];
            connection.query(addSql, addSqlParams, function(err, result) {
                //console.log('[INSERT ERROR] - ',err.message);
                return;
            })
        }
    })

})

router.post('/login', function(req, res) {
    user(function(result) {
        var data = req.body;
        var infor = result;
        var flag = false;
        var guan = 2;
        for (var i = 0; i < infor.length; i++) {
            if (data.user_name == infor[i].user_name) {
                flag = true;
                guan = infor[i].num;
            };
        }
        if (flag) {
            res.send({ title: '登录成功', guan: guan });
            var user = {
                name: data.user_name,
                password: data.password,
                time: +new Date()
            }
            req.session.user = user;

        } else {
            res.send('用户名或密码错误')
        }
    })
})

module.exports = router;

