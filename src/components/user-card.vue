<template>
  <Card class="userCard">
    <template #header>
      <img :src="user.picture.large" alt="User Profile Picture" />
    </template>
    <template #title> {{ user.name.first }} {{ user.name.last }} </template>
    <template #subtitle>
      Email: {{ user.email }} <br />
      Phone: {{ user.phone }} | {{ user.cell }} <br />
      Gender: {{ user.gender }}
    </template>
    <template #footer>
      {{ user.location.street.number }} {{ user.location.street.name }}, {{ user.location.city }},
      {{ user.location.state }}, {{ user.location.country }}</template
    >
  </Card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Card from 'primevue/card';

export default defineComponent({
  name: 'UserCard',
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  components: { Card },
});
</script>

<style lang="scss">
.userCard {
  min-width: 15rem;
  max-width: 20rem;
  margin-bottom: 2em;
  border-radius: 5px;
  margin: 10px auto;
}
</style>
