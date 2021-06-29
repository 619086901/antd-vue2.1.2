export default {
  getGetter(state) {
    return state.book.name
  },
  // getGetter2 (state) {
  //   return function (id) {
  //     return state.book.name+id
  //   }
  // }
  getGetter2: (state) => (id) => {
    return state.book.name + id
  }
}
