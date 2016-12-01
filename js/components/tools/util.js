	/* body... */
	// var Vue = require('../lib/1vue.js')

	var Util = {
		ajax : function (url , fn) {
			/* body... */
			// var xhr = new XMLHttpRequest();
    		var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
			xhr.onreadystatechange = function () {
				/* body... */
				if(xhr.readyState === 4){
					if(xhr.status === 200){
						var data = JSON.parse(xhr.responseText)
						fn && fn(data);
					}
				}
			}
			xhr.open('GET',url,true)
			xhr.send(null)
		},
		tpl : function (id) {
			/* body... */
			return document.getElementById(id).innerHTML;
		}

	};



	// Util.ajax('data/home.json', function (res) {
	// 	console.log(res)
	// })
	//
	module.exports = Util
