import store from '@/store';
const globals = {
	install: function(Vue) { //全局方法
		/*========== 全局Toast提示 ==========*/
		Vue.prototype.$showToast = function (config){
			let _config = {
				title: '操作成功!',
				icon: 'none',
			};
			if(config && typeof config == 'object'){
				_config = config;
			}else if(config &&  typeof config == 'string'){
				_config.title = config;
			}
			uni.showToast(_config);
		}
		
		Vue.prototype.$hideToast = function (){
			uni.hideToast();
		}
		/*========== 全局Loading提示 ==========*/
		Vue.prototype.$showLoading = function (config){
			let _config = {
				title: '加载中',
				mask: true
			};
			if(config && typeof config == 'object'){
				_config = config;
			}else if(config &&  typeof config == 'string'){
				_config.title = config;
			}
			uni.showLoading(_config);
		}
		Vue.prototype.$hideLoading = function (){
			uni.hideLoading();
		}
		/*========== 全局Modal提示 ==========*/
		Vue.prototype.$showModal = function (config){
			if(!config) return
			uni.showModal(config)
		}
		
		/*========== 全局ActionSheet提示 ==========*/
		Vue.prototype.$showActionSheet = function (config){
			if(!config) return
			uni.showActionSheet(config)
		}
		
		/*========== 全局Storage ==========*/
		Vue.prototype.$setStorage = function (key,value){
			if(key && typeof key =='string'){
				uni.setStorageSync(key, value);
			}else if(key && typeof key =='object'){
				uni.setStorage(key);
			}else{
				return
			}
		}
		
		Vue.prototype.$getStorage = function (key){
			if(key && typeof key =='string'){
				return uni.getStorageSync(key);
			}else if(key && typeof key =='object'){
				return uni.getStorage(key);
			}else{
				return null
			}
		}
		
		Vue.prototype.$removeStorage = function (key){
			if(key && typeof key =='string'){
				uni.removeStorageSync(key);
			}else if(key && typeof key =='object'){
				uni.removeStorage(key);
			}else{
				return null
			}
		}
		
		Vue.prototype.$clearStorage = function (is_isync = false){
			if(is_isync){
				uni.clearStorageSync();
			}else{
				uni.clearStorage();
			}
		}
		
		Vue.prototype.getServerDate = function (){
			console.log(1)
		}
		Vue.prototype.$mapState = function(obj){
			// console.log(store.state)
		};
	}
}
export default globals;