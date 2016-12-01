	/* body... */
	var Util = require('../../tools/util')
	// var Vue = require('../../lib/1vue.js')

	var listComponent = Vue.extend({
		props : ['query'],

		template : Util.tpl('tpl_list'),
		data : function() {
			return {
				type: [
					{value: '价格排序', key: 'price'},
					{value: '销量排序', key: 'sales'},
					{value: '好评排序', key: 'evaluate'},
					{value: '优惠排序', key: 'discount'}
				],
				searchKey : '',
				// 展示的产品
				list: [],
				// 缓存没有展示的商品
				other: [],
				isSearchShow : false,
				listKey : ''
			}
		},

		methods : {
			goBack : function () {
				/* body... */
				history.go(-1)
			},

			goSearch : function (argument) {
				/* body... */
				// 显示搜索框
				this.isSearchShow = !this.isSearchShow
				// console.log(this.isSearchShow)
			},

			listSearch : function (event) {
				/* body... */
				// console.log(this.searchKey)
				this.listKey = this.searchKey;
				// var key = event.target.previousElementSibling.value;
				// this.searchKey = key;
			},

			loadMore : function () {
				/* body... */
				this.list = [].concat(this.list,this.other);
				this.other = []
			},

			changeType : function (key,$event) {
				/* body... */
				// console.log(key)
				if(key === 'discount') {
					this.list = this.list.sort(function (a,b) {
						/* body... */
						var aDiscount = a.orignPrice - a.price;
						var bDiscount = b.orignPrice - b.price;
						return aDiscount - bDiscount;
					})
				}else {
					this.list = this.list.sort(function (a,b) {
						/* body... */
						return b[key] - a[key]
					})
				}
			}
		},

		created : function () {
			/* body... */
			var me = this;
			// var query = me.$parent.query;
			// 父组件向子组件传递数据
			var query = this.query;
			// console.log(query)
			var str = '';
			if (query[0] && query[1]) {
				str += '?' + query[0] + '=' + query[1]
			}

			Util.ajax('data/list.json' + str ,function (res) {
				/* body... */
				// console.log(res)
				if(res && res.errno === 0 ){
					me.list = res.data.slice(0,3)
					me.other = res.data.slice(3)
				}
			})

		}
	})

	module.exports =  listComponent
