<template>
  <div>
    <h1>404</h1>
    <h2>Page Not Found.</h2>
    <br />
    <Button label="Secondary" class="p-button-rounded p-button-secondary" @click="goBack">Home</Button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Button from 'primevue/button';
import router from '@/router';
import { RouteName } from '@/constants/route-names';

export default defineComponent({
  components: { Button },
  setup() {
    function goBack() {
      router.push({ name: RouteName.Home });
    }
    return { goBack };
  },
});
</script>

<style scoped>
h1 {
  font-size: 10em;
  padding: 30px;
}
</style>
