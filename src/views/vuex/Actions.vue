<template>
  <div>count防抖:{{ count }}</div>
  <button @click="onClick">异步+1</button>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import 'lodash'
export default {
  setup() {
    const store = useStore()
    //computed()返回一个不变的响应式 ref 对象
    const count = computed(() => store.state.count)
    //dispatch调用Actionsss
    const click = () =>
      store
        .dispatch('increment')
        .then(() => console.log('执行成功'))
        .catch((e) => console.log(e))
    // debounce()防抖当事件快速连续不断触发时，动作只会执行一次。
    const onClick = _.debounce(click, 500)
    return {
      count,
      onClick,
      click
    }
  }
}
</script>

<style></style>
