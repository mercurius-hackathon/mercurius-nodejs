/**
 * @author yahuang.wu
 * @date : 2018.04.22
 */

var express = require('express');
var app = express();


//操作日期的插件
var moment = require('moment');

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


//自动将body请求数据格式转成json
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//HTTP Response Header
app.use(function (req, res, next) {
  res.setHeader('transfer-encoding', 'chunked');
  res.setHeader('X-Powered-By', 'mercurius');
  next();
});

require('./routes/main.js')(app);

var port = process.env.PORT ? process.env.PORT : 8080;
//监听端口
app.listen(port);

console.log('%s | node server initializing | listening on port %s | process id %s | NODE_ENV is', moment().format('YYYY-MM-DD HH:mm:ss.SSS'), port, process.pid, process.env.NODE_ENV);
