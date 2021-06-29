<template>
  <div>我是State</div>
  <br />
  <span>共享的属性data.count:</span>
  {{ data.count }}
  <button @click="onClick">+1</button>
  <br />
  <ul>
    <li>姓名{{ name }}</li>
    <li>年龄{{ age }}</li>
  </ul>
  姓名<input type="text" v-model="name" /> 年龄<input
    type="text"
    v-model="age"
  />
  <br />
</template>

<script>
import { reactive, toRefs, ref, computed } from 'vue'
import { useStore } from 'vuex'
export default {
  setup() {
    const store = useStore()
    //computed保留反应性
    //返回的值返回一个不变的响应式 ref 对象
    let data = computed(() => store.state)
    //表单v-model使用带有 setter 的双向绑定计算属性,否则严格模式就会报错
    let name = computed({
      get: () => store.state.book.name,

      set: (value) => store.commit('plusname', value)
    })
    let age = computed({
      get: () => store.state.book.age,

      //传递一个对象
      set: (value) =>
        store.commit({
          type: 'plusage',
          age: value
        })
    })

    const increment = () => {
      store.commit('increment')
    }
    const onClick = () => {
      increment()
    }
    return {
      onClick,
      data,
      age,
      name
    }
  }
}
</script>

<style></style>
