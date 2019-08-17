<script>
	export default {
		onLaunch() {
			// #ifdef APP-PLUS
			// 锁定屏幕方向
			plus.screen.lockOrientation('portrait-primary'); //锁定
			
			// #endif
			this.appEntrance();
		},
		onShow() {
			console.log('App Show')
		},
		onHide() {
			console.log('App Hide')
		},
		onError (err) {
			console.log(err)
		},
		methods:{
			//APP入口处理
			appEntrance(){
				//当前路由是否可以无token进入
				let token = this.$getStorage('token');
				// if(token){
				// 	
				// }
				// uni.redirectTo({
				// 	url: 'pages/login?id=1&name=uniapp'
				// });
				// uni.redirectTo({
				// 	url: 'pages/home?id=1&name=uniapp'
				// });
				// uni.redirectTo({
				// 	url: 'pages/offer?key=cd998&id=863489388734'
				// });
			}
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import "./static/fonts/iconfont.css";
	@import "./static/css/theme.scss";
</style>
