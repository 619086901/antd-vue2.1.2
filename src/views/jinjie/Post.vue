<template>
  <div class="post">
    <div v-if="formconfig.loading" class="loading">Loading...</div>

    <div v-if="formconfig.error" class="error">{{ formconfig.error }}</div>

    <div v-if="formconfig.post" class="content">
      <h2>{{ formconfig.post }}</h2>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { useRoute, useRouter } from 'vue-router'
export default {
  setup() {
    const formconfig = reactive({
      error: '',
      post: '',
      loading: false
    })
    const fetchData = () => {
      formconfig.error = ''
      formconfig.post = ''
      formconfig.loading = true
      console.log('fetchData')
      setTimeout(() => {
        formconfig.error = '我是error'
        formconfig.post = '我是post'
        formconfig.loading = false
      }, 2000)
    }
    fetchData()
    return {
      formconfig,
      fetchData
    }
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    $route(to, from) {
      // this.fetchData()
      // console.log('to', to), console.log('from', from)
    }
  },
  created() {
    //created钩子代码可以写到setup()中
    // this.fetchData()
  }
}
</script>

<style lang="scss"></style>
