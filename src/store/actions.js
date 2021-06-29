export default {
  increment(context) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        context.commit('increment')
        resolve()
      }, 1000)
    })
  }
  //解构
  // increment({commit}) {
  //   setTimeout(() => {
  //     commit('increment')
  //   }, 1000)
  // }
  // increment2({ dispatch }) {
  //   return dispatch('increment').then(() => {
  //     console.log('执行成功')
  //   })
  // }
}
