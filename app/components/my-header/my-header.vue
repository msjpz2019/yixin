<template>
	<view class="myHeaderComponent">
		<div v-if="back" class="leftBtn" @click="leftBtnClick">
			<slot name="back">返回</slot>
		</div>
		<div class="title"> 易信服装批发 </div>
		<div class="rightBtn" @click="rightBtnClick" v-if="menuStatus">
			{{menuText}}
		</div>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		props:{
			back:{
				default:true
			},
			menuStatus:{
				default:true
			},
			menuText:{
				default:"菜单"
			}
		},
		methods:{
			menuEvent(){
				console.log('no method')
			},
			leftBtnClick(){
				uni.navigateBack({
					delta: 1
				});
			},
			rightBtnClick(){
				try{
					if(Object.keys(this._events).indexOf('menuEvent') !== -1){
						this.$emit('menuEvent')
					}else{
						this.menuEvent();
					}
				}catch(e){
					this.menuEvent();
				}
				
			}
		}
	}
</script>

<style lang="scss">
.myHeaderComponent{
	display: block;
	width: 100%;
	height: rpx(100);
	background-image: linear-gradient(45deg, #f43f3b, #ec008c);
	position: relative;
	padding-top: var(--status-bar-height);
	font-size: 32upx;
	color: #fff;
	.title{
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 38upx;
	}
	.leftBtn{
		position: absolute;
		height: rpx(100);
		left: rpx(10);
		bottom: 0;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.rightBtn{
		position: absolute;
		height: rpx(100);
		right: rpx(10);
		bottom: 0;
		display: flex;
		justify-content: center;
		align-items: center;
	}
}
</style>
