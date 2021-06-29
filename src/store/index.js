import { createStore } from 'vuex'
import moduleA from './module/moduleA'
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

export default createStore({
  //data()数据
  state,
  //公共计算属性
  getters,
  //同步函数
  mutations,
  //异步
  actions,
  modules: {
    moduleA
  }
})
