<template>
  <div>state name：{{ statename }} || getters name:{{ gettersname }}</div>
  <div>state count节流:{{ statecount }}</div>
  <label>state</label><input type="text" v-model="statename" /><br />
  <button @click="onClick">异步</button>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import 'lodash'
export default {
  setup() {
    const store = useStore()
    const statename = computed({
      get: () => store.state.moduleA.name,

      set: (value) => store.commit('moduleA/AsetName', value)
    })
    const gettersname = computed(() => store.getters['moduleA/AgetGetter'])
    const statecount = computed(() => store.state.moduleA.count)
    const click = () => store.dispatch('moduleA/AsetCount')
    // throttle()节流的策略是，固定周期内，只执行一次动作，若有新事件触发，不执行
    const onClick = _.throttle(click, 1000)
    console.log(store)
    return {
      store,
      statename,
      onClick,
      statecount,
      gettersname
    }
  }
}
</script>

<style></style>
