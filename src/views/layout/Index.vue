<template>
  <a-layout>
    <Sider />
    <a-layout>
      <Header />
      <Content />
      <Footer />
    </a-layout>
  </a-layout>
</template>

<script>
import Footer from './components/Index footer'
import Content from './components/Index content'
import Header from './components/Index header'
import Sider from './components/Index sider'
export default {
  name: 'Layout',
  components: {
    Footer,
    Content,
    Header,
    Sider
  },
  setup() {
    return {}
  }
}
</script>

<style lang="scss">
.ant-layout {
  height: 100vh;
}
</style>
