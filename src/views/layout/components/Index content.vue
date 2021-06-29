<template>
  <a-layout-content>
    <div :style="{ padding: '24px', background: '#fff' }">
      <router-view> </router-view>
    </div>
  </a-layout-content>
</template>

<script>
export default {
  name: 'Layout content',
  setup() {
    const onclick = (data) => {
      console.log(data)
    }
    return {
      fadeName: '',
      onclick
    }
  },
  watch: {
    $route(to, from) {}
  }
}
</script>

<style lang="scss">
@media screen and (max-width: 700px) {
  .ant-layout-content {
    margin: 24px 16px 0;
    min-width: 0px !important;
    overflow: scroll;
    min-height: auto;
    height: auto;
    background: #fff;
    ::-webkit-scrollbar {
      width: 10px;
      height: 6px;
    }
  }
}
.ant-layout-content {
  margin: 24px 16px 0;
  min-width: 900px;
  min-height: auto;
  height: auto;
  background: #fff;
  ::-webkit-scrollbar {
    width: 10px;
    height: 6px;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-leave-to {
  display: none;
}
</style>
