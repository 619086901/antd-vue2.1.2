<template>
  <a-layout-sider
    breakpoint="lg"
    collapsed-width="0"
    collapsible
    style="background: #fff"
  >
    <div class="logo" />

    <a-menu
      theme="light"
      mode="inline"
      :inline-collapsed="collapsed"
      v-model:openKeys="data.openKeys"
      v-model:selectedKeys="data.selectedKeys"
      @click="selectClick"
      @openChange="openChange"
    >
      <template v-for="item in routers">
        <!--hidden 是否显示-->
        <template v-if="item.hidden">
          <!--hasonlyChildren二级菜单是否只有一个-->
          <a-menu-item v-if="hasOnlyChildren(item)" :key="item.path">
            <!--导航到path-->
            <router-link :to="item.children[0].path">
              <i class="icon" :class="item.children[0].meta.class"></i>
              <!--显示children第一个-->
              {{ item.children[0].meta.title }}
            </router-link>
          </a-menu-item>

          <!--二级菜单-->
          <a-sub-menu v-else :key="item.path">
            <template #title>
              <i class="icon" :class="item.meta.class"></i>
              <span> {{ item.meta.title }}</span>
            </template>

            <template v-if="item.children.length">
              <template v-for="child in item.children">
                <!--检测二级菜单的hidden-->
                <template v-if="child.hidden">
                  <a-menu-item :key="child.path">
                    <router-link :to="child.path">
                      <i class="icon" :class="child.meta.class"></i>
                      {{ child.meta.title }}
                    </router-link>
                  </a-menu-item>
                </template>
              </template>
            </template>
          </a-sub-menu>
        </template>
      </template>
    </a-menu>
  </a-layout-sider>
</template>

<script>
//图标
// import {
//   PieChartOutlined,
//   DesktopOutlined,
//   UserOutlined,
//   TeamOutlined,
//   FileOutlined,
//   VideoCameraOutlined,
//   UploadOutlined
// } from '@ant-design/icons-vue'
import { reactive, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
export default {
  name: 'Layout sider',
  components: {
    // PieChartOutlined,
    // DesktopOutlined,
    // UserOutlined,
    // TeamOutlined,
    // FileOutlined,
    // VideoCameraOutlined,
    // UploadOutlined
  },
  setup() {
    const data = reactive({
      openKeys: localStorage.getItem('openKeys')
        ? [localStorage.getItem('openKeys')]
        : [],
      selectedKeys: localStorage.getItem('selectedKeys')
        ? [localStorage.getItem('selectedKeys')]
        : []
    })
    const { options } = useRouter()
    const routers = options.routes

    //单击选择
    const selectClick = ({ item, key, keyPath }) => {
      data.selectedKeys = keyPath
      localStorage.setItem('selectedKeys', keyPath[0])
    }
    //展开选择
    const openChange = (openKeys) => {
      data.openKeys = openKeys
      localStorage.setItem('openKeys', openKeys[0])
    }
    //检测是否只有一个子路由
    const hasOnlyChildren = (data) => {
      if (!data.children) {
        //没有二级
        return false
      }
      //检测二级菜单是否隐藏
      let result = data.children.filter((item) => (item.hidden ? true : false))
      if (result.length === 1) {
        return true
      }
      return false
    }

    return {
      collapsed: ref(false),
      data,
      options,
      routers,
      selectClick,
      openChange,
      hasOnlyChildren
    }
  }
}
</script>

<style lang="scss">
.logo {
  height: 32px;
  background: rgba(200, 189, 189, 0.2);
  margin: 16px;
}
</style>
