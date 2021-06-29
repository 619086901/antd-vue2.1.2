<template>
  <div class="post">
    <div v-if="formconfig.error" class="error">{{ formconfig.error }}</div>

    <div v-if="formconfig.post" class="content">
      <h2>{{ formconfig.post }}</h2>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { useRoute, useRouter } from 'vue-router'
//导航守卫在setup()只有这两个
import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'
import { message } from 'ant-design-vue'
export default {
  setup() {
    const formconfig = reactive({
      error: '',
      post: ''
    })

    return {
      formconfig
    }
  },
  beforeRouteEnter(to, from, next) {
    message
      .loading('加载中')
      .then(() => {
        setTimeout(() => {
          next((vm) => {
            console.log(vm)
            vm.formconfig.error = '我是error(先加载)'
            vm.formconfig.post = '我是post(先加载)'
          })
        }, 2000)
      })
      .then(() => message.success('加载完成'))
  }
}
</script>

<style lang="scss"></style>
