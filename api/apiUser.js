function fun(common,connection,crypto,res,data){
	return new Promise(function(resolve, reject){
		if(data.type === 'test'){        
			resolve(JSON.stringify(data));
        }else if(data.type === 'login'){
			let sql = 'SELECT * FROM yl_user where user_name = ?';
			let params = [data.user_name];
			let j = {};
			
			connection.query(sql,params, function (err, rows, fields) {
			    if (err) {
			        console.log('[query] - :' + err);
			        return;
			    }
			    if(!common.isEmptyArray(rows)){
			        if(crypto.cipher.encrypt("des",data.password) === rows[0]["password"]){
			        	//http://www.cnblogs.com/rubylouvre/archive/2012/08/19/2645644.html
						res.writeHead(200, {
					        'Set-Cookie': 'uid='+ rows[0]['uid'] +'; Expires=Wed, 13-Jan-2021 22:23:01 GMT;HttpOnly ',
					        'Content-Type': 'text/html'
					    });
					    j.status = 1;
			    	    j.message = "登录成功";
			        }else{
			        	j.status = 0;
			    	    j.message = "密码不正确";
			        }
			    }else{
			    	j.status = 0;
			    	j.message = "查无用户";
			    }
			    resolve(JSON.stringify(j));
			});
		}else if(data.type == "register"){
			var sql = 'SELECT * FROM yl_user where user_name = ?';
			var params = [data.user_name];
			let j = {};
			connection.query(sql,params, function (err, rows, fields) {
			    if (err) {
			        console.log('[query] - :' + err);
			        return;
			    }
			    
			    if(!common.isEmptyArray(rows)){
			    	j.status = 0;
			    	j.message = "用户已存在";
			    	resolve(JSON.stringify(j));
			    }else{
			        var sql = 'INSERT INTO yl_user(user_name,password) VALUES(?,?)';
					var params = [data.user_name, crypto.cipher.encrypt("des",data.password)];
					connection.query(sql, params, function (err, result) {
					    if (err) {
					        console.log('[INSERT ERROR] - ', err.message);
					        return;
					    }
					    j.status = 1;
					    j.message = "注册成功";
					    j.href = "/#/Index";
					    resolve(JSON.stringify(j));
					});    	
			    }
			});
		}
	})
}

module.exports = fun;