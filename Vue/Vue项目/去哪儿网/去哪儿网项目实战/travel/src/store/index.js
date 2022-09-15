import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  // 键值都一样 就可以做进一步的简化 es6的写法
  state,
  //   因为只是修改一个state值 没有异步操作和批量操作 没必要转发dispatch调用actions，直接用mutations调用commits就行了
  //   actions: {
  //     changeCity (ctx, city) { // 第一个参数是上下文参数ctx（可以用来调用Mutations的commit()），第二个参数是我们传递过来的参数
  //     //   console.log(city)
  //       ctx.commit('changeCity', city)
  //     }
  //   },
  mutations
  // getters: {
  //   doubleCity (state) {
  //     return state.city + ' ' + state.city
  //   }
  // }
})
