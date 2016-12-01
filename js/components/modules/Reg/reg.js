	var Util = require('../../tools/util')
	// var Vue = require('../../lib/1vue.js')

	/* body... */
	var regComponent = Vue.extend({
		template : Util.tpl('tpl_reg'),
		data: function () {
			return {
				active : 'tab-container2',
				selected : '1',
				isDropShow : false
			}
		},
		methods : {
			/* body... */
			goBack : function () {
				/* body... */
				history.go(-1)
			},

			handleClick : function () {
				/* body... */
				this.$toast(
					{
					  message: '登录成功',
					  iconClass: 'fa-check'
					}
				)
			},

			dropdownShow : function () {
				/* body... */
				this.isDropShow = !this.isDropShow
			}
		},
		created : function () {

		}
	})


	module.exports = regComponent
