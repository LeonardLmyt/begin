function getCookie(req){
	const Cookies = {};
	req.headers.cookie && req.headers.cookie.split(';').forEach(function( Cookie ) {
	    var parts = Cookie.split('=');
	    Cookies[ parts[ 0 ].trim() ] = ( parts[ 1 ] || '' ).trim();
	});
	return Cookies;
}

module.exports = getCookie;
