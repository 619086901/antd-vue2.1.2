<template>
  <a-breadcrumb :routes="routes">
    <template #itemRender="{ route, params, routes, paths }">
      <span v-if="routes.indexOf(route) === routes.length - 1">
        {{ this.$route.meta.title }}
      </span>

      <span v-else-if="routes.indexOf(route) === 1">
        {{ this.$route.meta.belong }}
      </span>

      <router-link :to="`${route.path}`" v-else="routes.indexOf(route) === 1">
        {{ this.$route.meta.timu }}
      </router-link>
    </template>
  </a-breadcrumb>
</template>

<script>
import { ref, reactive, toRefs } from 'vue'
import { useRoute, useRouter } from 'vue-router'
export default {
  name: 'Layout header routes',
  setup() {
    const routes = ref([
      {
        id: '0',
        path: '/shouye',
        breadcrumbName: '首页',
        children: []
      },
      {
        id: '1',
        path: '',
        breadcrumbName: '',
        children: []
      },
      {
        id: '2',
        path: '',
        breadcrumbName: '',
        children: []
      }
    ])

    const { options } = useRouter()
    const routers = options.routes
    return {
      routes,
      routers
    }
  },
  watch: {
    // 监听路由变化
    $route(e) {}
  }
}
</script>

<style lang="scss">
.ant-breadcrumb {
  width: 100%;
  padding: 15px;
  a {
    padding: 15px;
  }
  a:hover {
    border-bottom: 1px solid red;
  }
}
</style>
