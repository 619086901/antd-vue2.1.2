const moduleA = {
  //防止名称冲突设置命名空间
  //标记为命名空间
  namespaced: true,

  state: {
    name: 'moduleA',
    count: 0
  },
  getters: {
    AgetGetter(state) {
      return state.name
    }
  },
  mutations: {
    AsetName(state, value) {
      state.name = value
    },
    AplusCount(state) {
      state.count++
    }
  },
  actions: {
    AsetCount(context) {
      setTimeout(() => {
        context.commit('AplusCount')
      }, 1000)
    }
  }
}

export default moduleA
