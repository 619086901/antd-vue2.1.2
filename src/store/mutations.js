export default {
  increment(state) {
    // εζ΄ηΆζ
    state.count++
  },
  plusage(state, payload) {
    state.book.age = payload.age
  },
  plusname(state, value) {
    state.book.name = value
  }
}
