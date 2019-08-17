import store from '@/store';
import Request from './request.js';
const http = new Request();
 /* 设置全局API配置 */
http.setConfig((config) => {
	config.baseUrl = 'http://www.baidu.com';
	// config.header = {
	// 	a: 1,
	// 	b: 2
	// }
	return config
})
/* API请求之前拦截器 */
http.interceptor.request((config, cancel) => { 
	// config.header = {
	// 	...config.header,
	// 	b: 1
	// }
	/*
	if (!token) { // 如果token不存在，调用cancel 会取消本次请求，但是该函数的catch() 仍会执行
		cancel('token 不存在') // 接收一个参数，会传给catch((err) => {}) err.errMsg === 'token 不存在'
	}
	*/
	return config;
})
/* API请求之后拦截器 */
http.interceptor.response((response) => { 
	return response;
})

const api = {
	//配置公用方法
	install: function(Vue) {
		Vue.prototype.$api = http;
	}
}
export default api;