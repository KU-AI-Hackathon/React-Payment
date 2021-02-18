var express = require('express');
var http = require('http');
var path = require('path');
var bodyParaser = require('body-parser');
var cors = require('cors');
 
var app = express();
 
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParaser.urlencoded({extended: true}));
app.use(cors());

let status = false;

app.get('/', function(req, res) {  
    console.log("결제 status 주소 호출");
    res.send("마스크 결제 성공 여부    status : " + status);
});

app.post('/status', function(req, res) {  
    if(status == true)
        console.log("결제 성공 주소 호출");
    else{
        console.log("마스크 결제 /status 처리");
        status = true;
        console.log("결제 Status 세팅됨");
    }
    res.send("" + status);
});
 
http.createServer(app).listen(4000,"192.168.43.222", function() {
    console.log('Express 서버가 4000번 포트에서 시작됨.');
});