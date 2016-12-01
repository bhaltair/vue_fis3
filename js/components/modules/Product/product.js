	/* body... */
	var Util = require('../../tools/util')
	// var Vue = require('../../lib/1vue.js')

	var productComponent = Vue.extend({
		template : Util.tpl('tpl_product'),
		data: function () {
			return {
				data: {},
				isTipShow : false,
				isDropShow : false
			}
		},

		methods : {
			/* body... */
			goBack : function () {
				/* body... */
				history.go(-1)
			},

			showStar :function () {
				/* body... */
				this.isTipShow = true;
				var me = this;
				// alert('收藏成功')
				setTimeout(function () {
					me.isTipShow = false;
				}, 1000)

			},

			showNav : function () {
				/* body... */
				this.isDropShow = !this.isDropShow
			}
		},
		// 请求数据
		created: function () {
			// 缓存this
			var me = this;
			// 获取query
			var query = me.$parent.query;
			// 定义请求的query
			var str = '';
			if (query[0]) {
				// ?id=2
				str = '?id=' + query[0]
			}
			// 请求数据
			Util.ajax('data/product.json' + str, function (res) {
				// 如果请求成功保存数据
				if (res && res.errno === 0) {
					// 缓存数据
					me.data = res.data;
				}
			})
		},

		ready :function () {
			/* 回到顶部 */
			window.scroll(0,0)
		　　function getElementTop(element){
		　　　　var actualTop = element.offsetTop;
		　　　　var current = element.offsetParent;
		　　　　while (current !== null){
		　　　　　　actualTop += current.offsetTop;
		　　　　　　current = current.offsetParent;
		　　　　}
		　　　　return actualTop;
		　　}

			window.onscroll = function (e) {
				var ele = document.getElementById('product-price');
				if(!ele)
					return;
				var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
				// var top = getElementTop(ele)
				// var top = ele.getBoundingClientRect().top
				var windowScrollTop = document.body.scrollTop
				if(scrollTop >= 317)
					ele.className  = 'fixed product-price'
				if(windowScrollTop < 320)
					ele.className  = 'product-price'
			}
		}
	})

	module.exports = productComponent
