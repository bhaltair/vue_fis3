	// var Vue = require('../lib/1vue.js')

	var homeComponent = require('modules/Home/home')
	var listComponent = require('modules/List/list')
	var productComponent = require('modules/Product/product')
	var regComponent = require('modules/Reg/reg')
	var buyComponent = require('modules/Buy/buy')

	/* 注册组件 */
	Vue.component('home',homeComponent)
	Vue.component('list', listComponent);
	Vue.component('product', productComponent);
	Vue.component('reg', regComponent);
	Vue.component('buy', buyComponent);

	var app = new Vue({
		el : "#app",
		data : {
			msg : '11111',
			view : 'product',
			query : [],
		},

		methods : {

		}
	})

	module.exports =  app
