	var Util = require('../../tools/util')
	var Filter = require('../../filter/filter')
	// var Vue = require('../../lib/1vue.js')

	var homeComponent = Vue.extend({
		template : Util.tpl('tpl_home'),

		data : function () {
			/* body... */
			return {
				type : [
					{id: 1, title: '美食', url: '01.png'},
					{id: 2, title: '电影', url: '02.png'},
					{id: 3, title: '酒店', url: '03.png'},
					{id: 4, title: '休闲娱乐', url: '04.png'},
					{id: 5, title: '外卖', url: '05.png'},
					{id: 6, title: 'KTV', url: '06.png'},
					{id: 7, title: '周边游', url: '07.png'},
					{id: 8, title: '丽人', url: '08.png'},
					{id: 9, title: '小吃快餐', url: '09.png'},
					{id: 10, title: '火车票', url: '10.png'}
				],

				city : "北京",

				ad : [],

				list : [],

				searchText : '',

				realKey : '',
				popupVisible : false
			}
		},

		methods : {
			homeSearch : function (event) {
				/* body... */
				var key = event.target.previousElementSibling.value;
				this.realKey = key;
				// 清空输入框的value
				this.searchText = '';
				event.target.previousElementSibling.value = ''
			},

			loadMore : function() {
			  // this.loading = true;
			  // setTimeout(() => {
			  //   let last = this.list[this.list.length - 1];
			  //   for (let i = 1; i <= 10; i++) {
			  //     this.list.push(last + i);
			  //   }
			  //   this.loading = false;
			  // }, 2500);
			},

			fetch : function () {
				/* body... */
				var me =this;
				Util.ajax('data/home.json',function (res) {
					/* body... */
					if(res && res.errno === 0){
						me.ad = res.data.ad;
						me.$set('list',res.data.list);

					}
				})
			},

			chooseCity : function () {
				/* body... */
				this.popupVisible = !this.popupVisible;
				// $("body,html").css({"overflow":"hidden"});
				document.body.style.position="fixed"
			},

			pop_goback : function (argument) {
				/* body... */
				this.popupVisible = false;
				document.body.style.position="relative"

			},
			test : function (argument) {
				/* body... */
				// console.log(event.target.innerText)
				var that = event.target.parentElement
				that.style.background = "#ccc";
				setTimeout(function (argument) {
					that.style.background = "#fff";
				}, 500)
				this.city = event.target.innerText;
				this.pop_goback()
			}
		},

		// 组件生命周期
		created : function () {

			this.fetch()

			/* body... */
			// var me =this;
			// Util.ajax('data/home.json',function (res) {
			// 	/* body... */
			// 	if(res && res.errno === 0){
			// 		me.ad = res.data.ad;
			// 		me.$set('list',res.data.list);

			// 	}
			// })
		},


		ready : function () {
			window.scroll(0,0);

			/* body... */



		}


	})

	module.exports = homeComponent
