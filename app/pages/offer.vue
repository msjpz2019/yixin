<template>
	<view class="oferView">
		<my-header  :menuStatus="false"></my-header>
		<view class="tabsContainer">
			<view class="tabItem active">进货</view>
			<view class="tabItem">详情</view>
			<view class="tabItem">交流</view>
		</view>
		<view class="canbookContainer">
			<view class="col1">库存</view>
			<view class="col2">
				<view class="canbookItem" v-for="n in 15">
					<view>图案{{n}}</view>
					<view>6363747</view>
				</view>
			</view>
		</view>
		<view class="offerContainer">
			<scroll-view scroll-y="true" class="offerLeftCont">
				<view class="offerLeftItem" v-for="n in 20">
					<view>
						<view>图案{{n}}</view>
					</view>
				</view>
			</scroll-view>
			<scroll-view scroll-y="true" class="offerRightCont">
				<view class="template_1">
					<view class="offerRight_row">
						<view class="offerRight_row_col"> </view>
						<view class="offerRight_row_col" v-for="col in list[0].size">{{col.name}}</view>
					</view>
					<view class="offerRight_row" v-for="col in list">
						<view class="offerRight_row_col">{{col.color}}</view>
						<view class="offerRight_row_col" :class="{'active':item.checked}" v-for="item in col.size" @tap="selectSingle(item)">￥{{item.price}}</view>
					</view>
				</view>
			</scroll-view>
		</view>
		<view class="offerBottomCont" v-if="selectDatas.length>0">
			<view>
				取消
			</view>
			<view>
				下单
			</view>
			<view>已选中 {{selectDatas.length}}</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				list:[
					{color:'白色',size:[{'name':'M','price':98},{'name':'S','price':98},{'name':'L','price':98},{'name':'XL','price':98}]},
					{color:'黑色',size:[{'name':'M','price':98},{'name':'S','price':98},{'name':'L','price':98},{'name':'XL','price':98}]},
					{color:'蓝色',size:[{'name':'M','price':98},{'name':'S','price':98},{'name':'L','price':98},{'name':'XL','price':98}]},
					{color:'米白',size:[{'name':'M','price':98},{'name':'S','price':98},{'name':'L','price':98},{'name':'XL','price':98}]},
					{color:'粉红',size:[{'name':'M','price':98},{'name':'S','price':98},{'name':'L','price':98},{'name':'XL','price':98}]},
					{color:'黑色',size:[{'name':'M','price':98},{'name':'S','price':98},{'name':'L','price':98},{'name':'XL','price':98}]},
					{color:'蓝色',size:[{'name':'M','price':98},{'name':'S','price':98},{'name':'L','price':98},{'name':'XL','price':98}]},
					{color:'米白',size:[{'name':'M','price':98},{'name':'S','price':98},{'name':'L','price':98},{'name':'XL','price':98}]},
					{color:'粉红',size:[{'name':'M','price':98},{'name':'S','price':98},{'name':'L','price':98},{'name':'XL','price':98}]},
					{color:'黑色',size:[{'name':'M','price':98},{'name':'S','price':98},{'name':'L','price':98},{'name':'XL','price':98}]},
					{color:'蓝色',size:[{'name':'M','price':98},{'name':'S','price':98},{'name':'L','price':98},{'name':'XL','price':98}]},
					{color:'米白',size:[{'name':'M','price':98},{'name':'S','price':98},{'name':'L','price':98},{'name':'XL','price':98}]},
					{color:'粉红',size:[{'name':'M','price':98},{'name':'S','price':98},{'name':'L','price':98},{'name':'XL','price':98}]},
					{color:'黑色',size:[{'name':'M','price':98},{'name':'S','price':98},{'name':'L','price':98},{'name':'XL','price':98}]},
					{color:'蓝色',size:[{'name':'M','price':98},{'name':'S','price':98},{'name':'L','price':98},{'name':'XL','price':98}]},
					{color:'米白',size:[{'name':'M','price':98},{'name':'S','price':98},{'name':'L','price':98},{'name':'XL','price':98}]},
					{color:'粉红',size:[{'name':'M','price':98},{'name':'S','price':98},{'name':'L','price':98},{'name':'XL','price':98}]},
				],
				selectDatas:[]
			}
		},
		methods:{
			selectSingle(item){
				item.checked = !item.checked;
				if(item.checked){
					this.selectDatas.push(item);
				}else{
					let tempAry = new Array();
					this.list.map(ary=>{
						ary.size.map(ary2=>{
							if(ary2.checked){
								tempAry.push(ary2);
							}
						})
					})
					this.selectDatas = tempAry;
				}
				
			}
		}
	}
</script>

<style lang="scss">
	.oferView{
		display: flex;
		flex-direction: column;
		height: 100%;
		overflow: hidden;
		.tabsContainer{
			display: flex;
			height: rpx(70);
			background-color: #f5f5f5;
			.tabItem{
				display: flex;
				height: rpx(70);
				box-sizing: border-box;
				border-bottom: 1px solid #fff;
				flex: 1;
				margin: 0 rpx(8);
				justify-content: center;
				align-items: center;
				color: #333;
				&.active{
					border-bottom: 2px solid #ec0788;
					color: #ec0788;
				}
			}
		}
		.canbookContainer{
			width: 100%;
			overflow: hidden;
			height: rpx(80);
			border-bottom: 1px solid #d5d5d5;
			display: flex;
			.col1{
				width: rpx(80);
				height: rpx(80);
				display: flex;
				align-items: center;
				justify-content: center;
				color: #666;
				font-size: rpx(26);
				border-right:1px solid #d5d5d5;
			}
			.col2{
				flex: 1;
				height: rpx(80);
				white-space: nowrap;
				overflow-x: scroll;
				-webkit-overflow-scrolling: touch;
				text-align: center;
				.canbookItem{
					height: rpx(80);
					font-size: rpx(26);
					color: #666;
					display: inline-block;
					padding:0 rpx(15);
					border-right: 1px solid #d5d5d5;
				}
			}
		}
		.offerContainer{
			width: 100%;
			flex: 1;
			display: flex;
			align-content: stretch;
			min-height:0;
			// position: relative;
			.offerLeftCont{
				width: rpx(160);
				border-right: 1px solid #d5d5d5;
				height: auto;
				min-height: 0;
				background-color: #e5e5e5;
				overflow-y: scroll;
				.offerLeftItem{
					height: rpx(70);
					line-height: rpx(70);
					border-bottom: 1px solid #d5d5d5;
					text-align: center;
					font-size: rpx(26);
					color: #444;
				}
			}
			.offerRightCont{
				flex: 1;
				height: auto;
				min-height: 0;
				overflow-y: scroll;
				.template_1{
					.offerRight_row{
						display: flex;
						border-bottom: 1px solid #d5d5d5;
						.offerRight_row_col{
							flex: 1;
							text-align: center;
							height: rpx(70);
							line-height: rpx(70);
							color: #444;
							border-right: 1px solid #d5d5d5;
							&.active{
								background-color: #ccc;
								color: #fff;
							}
						}
					}
				}
			}
		}
		.offerBottomCont{
			height: rpx(150);
			background-color: #333;
			color: #fff;
			display: flex;
		}
	}
</style>
