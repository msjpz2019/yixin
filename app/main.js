import Vue from 'vue';
import App from './App';
import myHeader from "@/components/my-header/my-header.vue";
import uniIcon from "@/components/uni-ui/uni-icon/uni-icon.vue";
import routerMixin from '@/router/index.js';
import global from "@/components/global.js";
import store from './store';
import api from "@/components/api/index.js";
import CONFIGS from '@/configs/configs.json';
Vue.prototype.CONFIGS = CONFIGS;
Vue.config.productionTip = false;

Vue.prototype.$store = store;
Vue.mixin(routerMixin);
Vue.use(global);
Vue.use(api);
App.mpType = 'app';
uni.$on('onShow',function(data){
	console.log('监听到事件来自 update ，携带参数 msg 为：' + data.msg);
})
const app = new Vue({
	store,
    ...App
});
Vue.component('my-header',myHeader);
Vue.component('uni-icon',uniIcon);
app.$mount();
