<template>
  <a-layout-header>
    <div class="header left" style="float: left">
      <!--面包屑-->
      <Dreadcrumb />
    </div>

    <div class="header right" style="float: right">
      <!--更多-->
      <Dropdown />
    </div>
  </a-layout-header>

  <a-breadcrumb>
    <a-breadcrumb-item>浏览记录</a-breadcrumb-item>
    <a-breadcrumb-item v-for="key of data.meta.title.keys()">
      <router-link :to="data.meta.path[key]">
        {{ data.meta.title[key] }}
        {{ key }}
      </router-link>
    </a-breadcrumb-item>
  </a-breadcrumb>
</template>

<script>
import Dreadcrumb from './components header/Index header routes'
import Dropdown from './components header/Index header dropdown'
import { reactive, toRefs, ref } from 'vue'
export default {
  name: 'Layout header',
  components: {
    Dreadcrumb,
    Dropdown
  },
  setup() {
    const data = reactive({
      meta: {
        title: ['首页'],
        path: ['/shouye']
      }
    })
    return {
      data
    }
  },
  watch: {
    $route(e) {
      if (!this.data.meta.title.includes(e.meta.title)) {
        this.data.meta.title.push(e.meta.title)
      }
      if (!this.data.meta.path.includes(e.path)) {
        this.data.meta.path.push(e.path)
      }
    }
  }
}
</script>

<style lang="scss">
.ant-layout-header {
  height: auto;
  background: #fff;
  box-shadow: 0px -11px 20px 1px rgb(0, 0, 0, 0.5);
  //横向滚动条
  //white-space是防止内容自动折行
  //overflow-y设置为hidden，否则会出现上下滚动条
}
.ant-layout-sider-zero-width-trigger {
  top: 0px;
}
.ant-layout-sider-zero-width-trigger:hover {
  color: #1890ff;
}
</style>
