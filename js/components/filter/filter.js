	/* body... */
	// var Vue = require('../lib/1vue.js')

	Vue.filter('price',function(num) {
		return num + '元';
	})


	Vue.filter('originPrice',function (num) {
		/* body... */
		return '门市价' + num +'元'
	})

	Vue.filter('sales',function (num) {
		/* body... */
		return '已售' + num;
	})
