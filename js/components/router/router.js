	var app = require('../app')
	// var Vue = require('../lib/1vue.js')

	/* body... */
	function router(argument) {
		/* body... */
		var hash = location.hash;
		hash = hash.slice(1);
		hash = hash.replace(/^\//,'');
		hash = hash.split('/');
		var map = {
			home : true,
			list : true,
			product : true,
			reg : true,
			buy : true
		}
		if(map[hash[0]]){
			app.view = hash[0]
		}else {
			// 更改路由在这里
			app.view= 'home'
		}

		app.query = hash.slice(1)

	}

	window.addEventListener('hashchange', router)
	console.log('router')
	module.exports = router
