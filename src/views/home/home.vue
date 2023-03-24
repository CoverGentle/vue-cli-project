<template>
  <div class="home">
    <a-layout>
    <a-layout-sider>
      <Nav />
    </a-layout-sider>
    <a-layout>
      <a-layout-header>
        <Header/>
      </a-layout-header>
      <a-layout-content>
        <Main/>
      </a-layout-content>
    </a-layout>
  </a-layout>
  </div>
</template>

<script>
import Nav from "./nav.vue"
import Header from "./header.vue"
import Main from "./main.vue"
export default {
  name: "Home",
  components: {Nav,Header,Main},
};
</script>

<style scoped>
.home{
  width: 100%;
  height: 100%;
}
</style>
