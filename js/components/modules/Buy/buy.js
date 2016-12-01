	var Util = require('../../tools/util')
	// var Vue = require('../../lib/1vue.js')
	/* body... */
	var buyComponent = Vue.extend({
		template : Util.tpl('tpl_buy'),
		data: function () {
			return {
				price: 51,
				num : 1

			}
		},
		methods : {
			goback : function (argument) {
				/* body... */
				history.go(-1)
			},
			plus : function (argument) {
				/* body... */
				this.num++;
			},
			minus : function (argument) {
				/* body... */
				if(this.num<=0)
					return;
				this.num--;
			},

			handleClick : function (argument) {
				/* body... */
				this.$toast('下单成功 一共'+ this.num * this.price + '元');
				var me = this;
				setTimeout(function (argument) {
					me.goback()
				}, 1000)
			}

		},
		created : function () {

		},

		ready : function (argument) {
			/* body... */
			// 事件代理
		}
	})


	module.exports = buyComponent
