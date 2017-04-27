var express = require("express");   
var ejs = require("ejs");
var app = express();
var bodyParser = require("body-parser");
var cookieParser = require('cookie-parser');
var session = require('express-session');
var user = require('./server/register.js');
var connection = require('./test.js');


app.engine(".html", ejs.__express); //设置ejs引擎解析html模板
app.set('views', __dirname + '/views'); //设置模板文件的位置
app.set('view engine', '.html');  //注册模板为html
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('./statics'));
app.use(cookieParser());
app.use(session({
    secret: '12345', //与cookieParser中的一致
    cookie: {
        maxAge: 60000
    },
    resave: false,
    saveUninitialized: true
}));

app.use(function(req, res, next) {
    var user = req.session.user;
    console.log(req.session)
    if (user) {
        if (+new Date() - user.time >= 1000 * 30) res.send('登录信息已失效')
    } else {
        next();
    }
})

app.use('/admin', require("./router/re.js"))

app.use('/game', require("./router/save.js"))

app.get('/', function(req, res) {
    res.render('percent')
});



app.listen(500);

console.log("node-pintu start at port 500");
