<template>
  <div id="app">
    <router-view />
  </div>
</template>

<!-- <script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { RouteName } from './constants/route-names';
import router from './router';

export default defineComponent({
  setup() {
    onMounted(() => {
      router.push({ name: RouteName.Home, params: { page: 1 } });
    });
  },
});
</script> -->

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

* {
  margin: 0px;
}
</style>
