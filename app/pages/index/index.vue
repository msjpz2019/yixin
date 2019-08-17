<template>
	<view class="fullPage">
		<template v-for="n in 200">
			<p>test-{{n}}</p>
			<br>
		</template>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		onPullDownRefresh() {
			console.log('onPullDownRefresh');
			this.initData();
		},
		methods: {
			initData(){
				setTimeout(() => {
					uni.stopPullDownRefresh();
				}, 1500);
			},
		}
	}
</script>

<style lang="scss">
.fullPage{
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	overflow: hidden;
	.top{
		height: 100upx;
		line-height: 100upx;
		width: 100%;
		background-color: red;
		padding-top: var(--status-bar-height);
		font-size: 30upx;
	}
	.openCode{
		height: 100upx;
		border-bottom: 1px solid #ddd;
	}
	.fastMenu{
		border-bottom: 1px solid #ddd;
		button{
			background-color: #fff;
			color: #333;
			height: 70upx;
			line-height: 70upx;
			font-size: 26upx;
		}
		
	}
	.main{
		flex: 1;
		display: flex;
		.main-list{
			width: 120upx;
			height: 100%;
			
			view{
				border-right: 1px solid #666;
				border-bottom: 1px solid #666;
				font-size: 24upx;
				height: 80upx;
				line-height: 80upx;
				text-align: center;
			}
		}
		.main-content{
			flex: 1;
			height: 100%;
			view{
				border-right: 1px solid #ccc;
				border-bottom: 1px solid #ccc;
				font-size: 18upx;
				height: 70upx;
				line-height: 70upx;
			}
		}
	}
	.bottom{
		height: 200upx;
		width: 100%;
		background-color: #eee;
	}
}
</style>
