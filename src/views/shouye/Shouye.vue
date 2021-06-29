<template>
  发现自己要学的东西还有很多，学习vue3.0去了，还有route4许多等等，都要学习，这个就先放这里了
  {{ this.$route.params }}
  <br />id:{{ id }}

  <button @click="pushClick">push</button><br />
  <button @click="goClick(-1)">上一页</button>
  <button @click="goClick(1)">下一页</button><br />
  <router-link :to="{ name: 'Systemconfiguration' }">命名路由跳转</router-link
  ><br />
  <router-link :to="{ name: 'Systemconfiguration', params: { userId: 123 } }"
    >带参数的命名路由</router-link
  >
</template>

<script>
import { useRouter, useRoute } from 'vue-router'
export default {
  props: {
    id: {
      type: String
    }
  },
  setup() {
    const router = useRouter()
    const route = useRoute()
    // console.log('router', router) //跳转用router
    // console.log('route', route)
    const pushClick = () => {
      //因为组合式API setup()中没有this，所以访问不了this.$router
      //用useRouter来代替

      // router.push({
      //   name: 'Systemconfiguration'
      // })

      router.push('/systemconfiguration')

      // router.push({
      //   name: 'Shouye',
      //   params: {
      //     username://方法传进来的值
      //   }
      // })

      //shouye?plan=private
      // router.push({ path: '/shouye', query: { plan: 'private' } })
    }
    const goClick = (id) => {
      router.go(id)
    }
    return {
      router,
      route,
      pushClick,
      goClick
    }
  },
  beforeRouteLeave(to, from) {
    const answer = window.confirm('你真的想离开吗？我是组件离开守卫')
    if (!answer) return false
  },
  beforeRouteEnter(to, from, next) {
    // 在渲染该组件的对应路由被验证前调用
    // 不能获取组件实例 `this` ！
    // 因为当守卫执行时，组件实例还没被创建！
    next((vm) => {
      // 通过 `vm` 访问组件实例
    })
  },
  watch: {
    $route(to, form) {
      console.log('我是新的', to), console.log('我是旧的', form)
    }
  }
}
</script>

<style lang="scss"></style>
