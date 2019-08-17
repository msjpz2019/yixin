<template>
	<view class="loginView" :class="theme">
		<my-header :back="false" :menuStatus="false"></my-header>
		<image src="../static/img/common/logo.jpg" mode="aspectFit" class="logo"></image>
		<view class="content">
			<view class="loginCell">
				<input type="text" maxlength="11" v-model="login.username" placeholder="请输入用户名"/>
			</view>
			<view class="loginCell">
				<input type="password" v-model="login.password" placeholder="请输入登录密码"/>
			</view>
			<view class="loginBtn" @click="defaultHandlerLogin">
				登 录
			</view>
			<view class="loginExtend">
				<navigator url="#">
					<text>忘记密码？</text><text class="btn">点击找回</text>
				</navigator>
			</view>
		</view>
	</view>
</template>

<script>
	import {mapState,mapMutations} from 'vuex';
	export default {
		data() {
			return {
				login: {
					loading: false,
					username:"test001",
					password:"123456"
				},

			};
		},
		
		onLoad(){
		},
		computed: {
			...mapState(['theme']),
		},
		methods:{
			...mapMutations(['setTheme']),
			defaultHandlerLogin:function(){
				
				// this.$showLoading();
				// this.$api.get('/test.php',{}).then(res=>{
				// 	this.$hideLoading();
				// 	this.$showToast(JSON.stringify(res.data))
				// }).catch(err=>{
				// 	
				// })
				// return
				
				uni.hideKeyboard();//收起键盘
				let {username,password} = this.login;
				if(!username || !password){
					uni.showToast({title: '用户名和密码不能为空',icon: 'none'});
					return
				}
				uni.redirectTo({
					url: './home?name=m&age=1'
				});
				// this.$Router.push({ name: 'home', params: { userId: '123' }})
			},
			BindInput:function(e){
				var dataval = e.currentTarget.dataset.val;
				this.login[dataval] = e.detail.value; 
			},
			menuEvent(){
				console.log('menuEvent')
			}
		}
	}
</script>

<style lang="scss">
	.loginView{
		display: flex;
		flex-direction: column;
		height: 100%;
		overflow: hidden;
		.logo{
			width: rpx(250);
			height: rpx(250);
			display: block;
			margin: rpx(100) auto;
		}
		.content {
			width: 85%;
			margin: 0 auto;
			overflow: hidden;
			.loginCell{
				margin-top: rpx(20);
				input{
					height: rpx(88);
					width: 100%;
					line-height: rpx(88);
					color: #353535;
					font-size: rpx(28);
					box-sizing: border-box;
					appearance: none;
					border: rpx(2) solid #e5e5e5;
					box-shadow: none;
					border-radius: rpx(44);
					outline: 0;
					display: block;
					padding-left: rpx(30);
					margin: 0;
					font-family: inherit;
					background: #fff;
					resize: none;
				}
			}
			.loginBtn{
				height: rpx(88);
				width: 100%;
				line-height: rpx(88);
				color: #ffffff;
				font-size: 32rpx;
				border-radius: rpx(44);
				outline: 0;
				display: block;
				margin: 0;
				font-family: inherit;
				background-image: linear-gradient(45deg, #f43f3b, #ec008c);
				opacity: 0.8;
				margin-top: rpx(30);
				text-align: center;
			}
			.loginExtend{
				text-align: right;
				line-height: rpx(80);
				font-size: rpx(28);
				color: #444;
				.btn{
					color: royalblue;
				}
			}
		}
		
	}
</style>
