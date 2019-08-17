const myMixin = {
  onLoad: function (option) {
		console.log(getCurrentPages()[0].route)
    this.hello();
  },
  methods: {
    hello: function () {
      uni.showToast({
      	title:'onLoad mixin!'
      })
    }
  }
}
export default myMixin;