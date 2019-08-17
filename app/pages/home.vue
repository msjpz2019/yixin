<template>
	<view class="homeView">
		<view class="headerContainer">
			<!-- <text>易信服装批发</text> -->
			<image class="logo" src="../static/img/common/logo.jpg" mode=""></image>
			<!-- <text>menu</text> -->
			<view class="rightBtn" @click="homeDrawerStatus = true">
				<text class="iconfont icon-people"></text>
				<text>text001</text>
			</view>
		</view>
		<scroll-view scroll-y="true" class="scrollContainer">
			<!-- 轮播图 -->
			<view class="swiperContainer">
				<view class="swiper-box">
					<swiper circular="true" autoplay="true" @change="swiperChange">
						<swiper-item v-for="swiper in swiperList" :key="swiper.id">
							<image :src="swiper.img" @tap="toSwiper(swiper)"></image>
						</swiper-item>
					</swiper>
					<view class="indicator">
						<view class="dots" v-for="(swiper, index) in swiperList" :class="[currentSwiper >= index ? 'on' : '']" :key="index"></view>
					</view>
				</view>
			</view>
			<!-- 快捷菜单 -->
			<view class="fastMenuContainer">
				<view class="box">
					<view class="iconbox bgc1">
						<text class="iconfont icon-JianK"></text>
					</view>
					<view class="namebox">最新行情</view>
				</view>
				<view class="box">
					<view class="iconbox bgc2">
						<text class="iconfont icon-TuiG"></text>
					</view>
					<view class="namebox">团队推广</view>
				</view>
				<view class="box">
					<view class="iconbox bgc3">
						<text class="iconfont icon-ChengYGL"></text>
					</view>
					<view class="namebox">团队管理</view>
				</view>
				<view class="box">
					<view class="iconbox bgc4">
						<text class="iconfont icon-TuanDU"></text>
					</view>
					<view class="namebox">团队货单</view>
				</view>
			</view>
			<!-- 广告图 -->
			<!-- <view class="bannerContainer"><image src="/static/img/banner.jpg"></image></view> -->
			<view class="br"></view>
			<view class="titleCont">
				<text class="iconfont icon-hotMenuTit-ic"></text>
				<text>伙拼爆品</text>
			</view>
			<!-- 热门菜单 -->
			<view class="hotMenuContainer">
				<view class="rowBox">
					<view class="colBox mr15">
						<view class="img1 bg-gradual-pink" @click="toGoods"></view>
					</view>
					<view class="colBox">
						<view class="img2 bg-gradual-green mb15" @click="toGoods"></view>
						<view class="img3 bg-gradual-orange" @click="toGoods"></view>
					</view>
				</view>
				<!-- <view class="rowBox mt15">
					<view class="colBox">
						<view class="img4 bg-gradual-blue"></view>
					</view>
				</view> -->
			</view>
			<view class="br"></view>
			<view class="titleCont">
				<text class="iconfont icon-hotMenuTit-ic"></text>
				<text>品类</text>
			</view>
			<view class="categoryContainer">
				<view class="category" v-for="(row, index) in categoryList" @click="toGoods" :key="index" >
					<view class="img"><image :src="row.img"></image></view>
					<view class="text">{{ row.name }}</view>
				</view>
			</view>
			<!-- 分类列表 -->
			<view class="br"></view>
			<view class="titleCont">
				<text class="iconfont icon-hotMenuTit-ic"></text>
				<text>精选好货</text>
			</view>
			<!-- 商品列表 -->
			<view class="goodsContainer">
				<view class="product-list">
					<view class="product" v-for="product in productList" :key="product.goods_id" @click="toGoods(product)" >
						<image mode="widthFix" :src="product.img"></image>
						<view class="name">{{ product.name }}</view>
						<view class="info">
							<view class="price">{{ product.price }}</view>
							<view class="slogan">{{ product.slogan }}</view>
						</view>
					</view>
				</view>
			</view>
		</scroll-view>
		<view class="footerContainer paddingSafeArea">
			<view class="box">
				<text class="itemIcon iconfont icon-daohangYH"></text>
				<text class="itemText">充值提款</text>
			</view>
			<view class="box">
				<text class="itemIcon iconfont icon-favor"></text>
				<text class="itemText">活动中心</text>
			</view>
			<view class="box">
				<text class="itemIcon iconfont icon-KaijiangB"></text>
				<text class="itemText">报价中心</text>
			</view>
			<view class="box">
				<text class="itemIcon iconfont icon-baobiaob"></text>
				<text class="itemText">进货单</text>
			</view>
			<view class="box">
				<text class="itemIcon iconfont icon-KEFB"></text>
				<text class="itemText">在线客服</text>
			</view>
		</view>
		
		<!-- 首页侧滑抽屉 -->
		<uni-drawer :visible="homeDrawerStatus" :mode="'right'" @close="homeDrawerStatus=false">
			<scroll-view scroll-y="true" class="homeDrawerContainer bg-gradual-red paddingStatusBar paddingSafeArea">
				<view class="itemBox">充值提现</view>
				<!-- <view class="itemBox" @click="checkVersionEvent">检查更新2</view> -->
				<view class="itemBox" @click="logoutEvent">退出登录</view>
			</scroll-view>
		</uni-drawer>
	</view>
</template>

<script>
	import uniDrawer from "@/components/uni-ui/uni-drawer/uni-drawer.vue";
	export default {
		components:{
			'uni-drawer':uniDrawer
		},
		onLoad(){
		},
		data() {
			return {
				currentSwiper: 0,
				swiperList: [{
						id: 1,
						src: 'url1',
						img: '/static/img/1.jpg'
					},
					{
						id: 2,
						src: 'url2',
						img: '/static/img/2.jpg'
					},
					{
						id: 3,
						src: 'url3',
						img: '/static/img/3.jpg'
					}
				],
				// 分类菜单
				categoryList: [
					{ id: 1, name: 'T恤', img: '/static/img/4.png' },
					{ id: 2, name: '衬衫', img: '/static/img/4.png' },
					{ id: 3, name: '裤子', img: '/static/img/4.png' },
					{ id: 4, name: '裙子', img: '/static/img/4.png' },
					{ id: 5, name: '牛仔裤', img: '/static/img/4.png' },
					{ id: 6, name: '西装', img: '/static/img/4.png' },
					{ id: 7, name: '休闲外套', img: '/static/img/4.png' },
					{ id: 8, name: '更多', img: '/static/img/4.png' }
				],
				productList: [
					{
						goods_id: 0,
						img: '/static/img/5.jpg',
						name: '商品名称商品名称商品名称商品名称商品名称',
						price: '￥168',
						slogan: '1235销量'
					},
					{
						goods_id: 1,
						img: '/static/img/5.jpg',
						name: '商品名称商品名称商品名称商品名称商品名称',
						price: '￥168',
						slogan: '1235销量'
					},
					{
						goods_id: 2,
						img: '/static/img/5.jpg',
						name: '商品名称商品名称商品名称商品名称商品名称',
						price: '￥168',
						slogan: '1235销量'
					},
					{
						goods_id: 3,
						img: '/static/img/5.jpg',
						name: '商品名称商品名称商品名称商品名称商品名称',
						price: '￥168',
						slogan: '1235销量'
					},
					{
						goods_id: 4,
						img: '/static/img/5.jpg',
						name: '商品名称商品名称商品名称商品名称商品名称',
						price: '￥168',
						slogan: '1235销量'
					},
					{
						goods_id: 5,
						img: '/static/img/5.jpg',
						name: '商品名称商品名称商品名称商品名称商品名称',
						price: '￥168',
						slogan: '1235销量'
					},
					{
						goods_id: 6,
						img: '/static/img/5.jpg',
						name: '商品名称商品名称商品名称商品名称商品名称',
						price: '￥168',
						slogan: '1235销量'
					},
					{
						goods_id: 7,
						img: '/static/img/5.jpg',
						name: '商品名称商品名称商品名称商品名称商品名称',
						price: '￥168',
						slogan: '1235销量'
					},
					{
						goods_id: 8,
						img: '/static/img/5.jpg',
						name: '商品名称商品名称商品名称商品名称商品名称',
						price: '￥168',
						slogan: '1235销量'
					},
					{
						goods_id: 9,
						img: '/static/img/5.jpg',
						name: '商品名称商品名称商品名称商品名称商品名称',
						price: '￥168',
						slogan: '1235销量'
					}
				],
				homeDrawerStatus:false
			};
		},
		methods:{
			//轮播图指示器
			swiperChange(event) {
				this.currentSwiper = event.detail.current;
			},
			toGoods(data){
				uni.navigateTo({
					url: '../pages/offer?key=cd998&id=863489388734'
				});
			},
			logoutEvent(){
				uni.reLaunch({url: '../pages/login'});
			},
			checkVersionEvent(){
				uni.navigateTo({
					url: '../pages/update'
				});
			}
		}
	}
</script>

<style lang="scss">
	.homeView {
		display: flex;
		flex-direction: column;
		height: 100%;
		overflow: hidden;
		.headerContainer {
			display: flex;
			height: rpx(100);
			background-image: linear-gradient(45deg, #f43f3b, #ec008c);
			background-color:#f35;
			align-items: center;
			justify-content: space-between;
			padding: 0 2%;
			padding-top: var(--status-bar-height);
			color: #fff;
			font-size: rpx(30);
			box-sizing: content-box;
			.logo{
				width: rpx(70);
				height: rpx(70);
			}
			.rightBtn{
				display: flex;
				height: 100%;
				justify-content: center;
				align-items: center;
				font-size: rpx(34);
				.iconfont{
					font-size: rpx(40);
					margin-right: rpx(8);
				}
			}
		}
		.br{
			height: rpx(20);
			background-color: #e6e6e6;
		}
		.scrollContainer {
			width: 100%;
			flex: 1;
			overflow: scroll;
		}

		.swiperContainer {
			width: 100%;
			margin-top: rpx(20);
			display: flex;
			justify-content: center;
			.swiper-box {
				width: 96%;
				height: rpx(230);
				overflow: hidden;
				border-radius: rpx(15);
				box-shadow: 0 rpx(8) rpx(25) rgba(0, 0, 0, 0.2);
				position: relative;
				z-index: 1;
				swiper {
					width: 100%;
					height: rpx(230);
					swiper-item {
						image {
							width: 100%;
							height: rpx(230);
						}
					}
				}

				.indicator {
					position: absolute;
					bottom: rpx(20);
					left: rpx(20);
					background-color: rgba(255, 255, 255, 0.4);
					width: rpx(150);
					height: rpx(5);
					border-radius: rpx(3);
					overflow: hidden;
					display: flex;

					.dots {
						width: 0;
						background-color: rgba(255, 255, 255, 1);
						transition: all 0.3s ease-out;

						&.on {
							width: (100%/3);
						}
					}
				}
			}
		}
		.categoryContainer {
			width: 92%;
			margin: 0 4%;
			padding: 0 0 30upx 0;
			border-bottom: solid 2upx #f6f6f6;
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;
			.category {
				width: 25%;
				margin-top: rpx(30);
				display: flex;
				flex-wrap: wrap;
				.img {
					width: 100%;
					display: flex;
					justify-content: center;
					image {
						width: 9vw;
						height: 9vw;
					}
				}
				.text {
					margin-top: 16upx;
					width: 100%;
					display: flex;
					justify-content: center;
					font-size: 24upx;
					color: #3c3c3c;
				}
			}
		}
		.fastMenuContainer{
			width: 100%;
			padding: rpx(10) rpx(50);
			box-sizing: border-box;
			display: flex;
			justify-content: space-between;
			margin-top: rpx(35);
			.box{
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				font-size: rpx(26);
				color: #666;
				.iconbox{
					width: rpx(90);
					height: rpx(90);
					border-radius: rpx(90);
					justify-content: center;
					align-items: center;
					display: flex;	
					text{
						color: #fff;
						font-size: rpx(50);
					}
					&.bgc1{background-color: #ff5969;}
					&.bgc2{background-color: #ff7a1d;}
					&.bgc3{background-color: #00b49b;}
					&.bgc4{background-color: #ffc800;}
				}
				.namebox{
					margin-top: rpx(8);
				}
			}
		}
		.titleCont{
			display: flex;
			align-items: center;
			line-height: rpx(80);
			color: #666;
			padding: 0 rpx(15);
			.iconfont{
				color: #f23355;
				font-size: rpx(40);
				margin-right: rpx(10);
			}
		}
		.hotMenuContainer{
			padding: 0 rpx(15) rpx(15) rpx(15);
			.rowBox{
				width: 100%;
				display: flex;
				overflow: hidden;
				.colBox{
					flex: 1;
				}
				.img1{
					width: 100%;
					height: rpx(240);
					border-radius: rpx(10);
				}
				.img2{
					width: 100%;
					height: rpx(112.5);
					border-radius: rpx(10);
				}
				.img3{
					width: 100%;
					height: rpx(112.5);
					border-radius: rpx(10);
				}
				.img4{
					width: 100%;
					height: rpx(112.5);
					border-radius: rpx(10);
				}
			}
		
			.mr15{margin-right: rpx(15)}
			.mb15{margin-bottom: rpx(15)}
			.mt15{margin-top: rpx(15)}
		}
		.bannerContainer {
			width: 92%;
			margin: rpx(40) 4%;
			image {
				width: 100%;
				height: rpx(150);
				border-radius: rpx(10);
			}
		}
		.goodsContainer {
			.title {
				width: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
				height: rpx(80);
				color: #f47825;
				font-size: rpx(30);
				margin-top: rpx(10);
				image {
					width: rpx(30);
					height: rpx(30);
				}
			}
			.loading-text {
				width: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
				height: rpx(60);
				color: #979797;
				font-size: rpx(24);
			}
			.product-list {
				width: 92%;
				padding: 0 4% rpx(3) 4%;
				display: flex;
				justify-content: space-between;
				flex-wrap: wrap;
				.product {
					width: 48%;
					border-radius: rpx(20);
					background-color: #fff;
					margin: 0 0 rpx(15) 0;
					box-shadow: 0upx rpx(5) rpx(25) rgba(0, 0, 0, 0.1);
					image {
						width: 100%;
						border-radius: rpx(25) rpx(20) 0 0;
					}
					.name {
						width: 92%;
						padding: rpx(10) 4%;
						display: -webkit-box;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 2;
						text-align: justify;
						overflow: hidden;
						font-size: rpx(28);
					}
					.info {
						display: flex;
						justify-content: space-between;
						align-items: flex-end;
						width: 92%;
						padding: rpx(10) 4% rpx(10) 4%;

						.price {
							color: #e65339;
							font-size: rpx(30);
							font-weight: 600;
						}
						.slogan {
							color: #807c87;
							font-size: rpx(24);
						}
					}
				}
			}
		}
		.footerContainer{
			display: flex;
			height: rpx(100);
			flex-direction: row;
			border-top: 1px solid #d6d6d6;
			background-image: linear-gradient(45deg, #f43f3b, #ec008c);
			.box{
				flex:1;
				height: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: column;
				color: #fff;
				image{
					width: rpx(40);
					height: rpx(40);
					display: block;
					margin-bottom: rpx(8);
				}
				.itemIcon{
					font-size: rpx(40);
					margin-bottom: rpx(5);
				}
				.itemText{
					font-size: rpx(24);
				}
			}
		}
		.homeDrawerContainer{
			width: 100%;
			height: 100%;
			box-sizing: border-box;
			.itemBox{
				padding: rpx(10);
				margin: rpx(10) 0;
				font-size: rpx(30);
			}
		}
	}
</style>
