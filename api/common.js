let querystring = require('querystring');
let common = {
	isEmptyObject : function(e){
		var t;  
	    for (t in e)  
	        return !1;  
	    return !0;
	},
	isEmptyArray : function(e){
		return (e.length > 0 ? !1 : !0);
	},
	getParamsMain : class getParamsMain{
		constructor (method,req) {
		    this.method = method;
		    this.req = req;
		}
		get(){
			return new Promise((resolve, reject) => {
				let param = "",
				    postParam = undefined;
				if(this.method === 'GET'){
			    	resolve(require('url').parse(this.req.url, true).query);
			    }else if(this.method === 'POST'){
					// 通过req的data事件监听函数，每当接受到请求体的数据，就累加到post变量中
					this.req.on('data', function(chunk){    
						param += chunk;
					});
					this.req.on('end', function(){    
						postParam = querystring.parse(param);
				        resolve(postParam);
				    });
			    }
			});
		}
	}
}

module.exports = common;