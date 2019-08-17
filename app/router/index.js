// 全局混入onLod 事件,如果在页面中使用了onLoad需要在该页面单独混入
export default {
	onLoad(_option_){
		this._pageOnLoad_(_option_);
	},
	methods: {
		_pageOnLoad_(_option_) {
			console.log(_option_,getCurrentPages()[0].route);
			// uni.showToast({
			// 	title: 'onLoad mixin!'
			// })
		}
	}
}
