let http = require('http');
let querystring = require('querystring');
let common = require("./common");
let connection = require("./connection");
let checklogin = require("./checkLogin");
let crypto = require('./cipherUtil');
let user = require('./apiUser');

let server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});  
    let methodMain = req.method.toUpperCase();
    let paramsMain = new common.getParamsMain(methodMain,req).get().then(function(data){
    	if(data.classify === 'user'){
    	    return user(common,connection,crypto,res,data)	
    	}
	}).then(function(data){
		if(methodMain === 'GET')res.write(data),res.end();
		else res.end(data);
	})
});

//监听127.0.0.1:9000
server.listen(9000, '127.0.0.1');
//server关闭
server.on('close',function(){
    
});
console.log('listening on port  9000');

