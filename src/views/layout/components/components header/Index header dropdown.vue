<template>
  <a-dropdown :trigger="['click']">
    <a class="ant-dropdown-link" @click.prevent>
      更多
      <DownOutlined />
    </a>
    <template #overlay>
      <a-menu>
        <a-menu-item key="0">
          <a href="http://www.alipay.com/">1</a>
        </a-menu-item>
        <a-menu-item key="1">
          <a href="http://www.taobao.com/">2</a>
        </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>

<script>
import { DownOutlined } from '@ant-design/icons-vue'
export default {
  components: {
    DownOutlined
  }
}
</script>

<style lang="scss"></style>
