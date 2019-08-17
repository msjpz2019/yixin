import Vue from 'vue';
import Router from './uni-simple-router/index.js';
Vue.use(Router);
const router = new Router({
	routes: [{
			path: "/pages/login",
			name: 'login'
		},
		{
			path: "/pages/home",
			name: 'home'
		}
	]
});

router.beforeEach((to, from, next) => {
	console.log(to,from)
	next();
	// if(to.name=='tabbar-5'){
	// 	next({name:'router4',params:{
	// 		msg:'我拦截了tab5并重定向到了路由4页面上',
	// 		laspageMsg:JSON.stringify(to.query)
	// 	}});
	// }else{
	// 	next();
	// }
})
router.afterEach((to, from) => {
	//console.log(from)
})

export default router
