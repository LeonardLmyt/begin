///////////////////////////
// 加密解密算法
///////////////////////////
var crypto = require('crypto');
const key = "12345678";
console.log(crypto.getCiphers());

var cipher = {
	encrypt:function(algs,txt){
    	var cip = crypto.createCipher(algs, key),
	        encrypted = cip.update(txt, 'binary', 'hex');
	    return (encrypted += cip.final('hex'));
	},
	decrypt:function(algs,txt){
	    var decipher = crypto.createDecipher(algs, key),
	       decrypted = decipher.update(txt, 'hex', 'binary');
	    return (decrypted += decipher.final('binary'));
	}
}

module.exports.cipher = cipher;