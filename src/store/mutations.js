export default {
  increment(state) {
    // 变更状态
    state.count++
  },
  plusage(state, payload) {
    state.book.age = payload.age
  },
  plusname(state, value) {
    state.book.name = value
  }
}
