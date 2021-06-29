<template>
  <br />
  <span>共享的属性data</span>
  {{ data }}<br />
  <br />
  getters姓名:{{ getGetter }}
  <br />
  getters2姓名:{{ getGetter2 }}
</template>

<script>
import { reactive, toRefs, ref, computed } from 'vue'
import { useStore } from 'vuex'
export default {
  setup() {
    const store = useStore()
    let data = computed(() => store.state)
    console.log(store)
    return {
      data,
      getGetter: computed(() => store.getters.getGetter),
      getGetter2: computed(() => store.getters.getGetter2(2))
    }
  }
}
</script>

<style></style>
