<template>
  <div class="modalOverlay">
    <Card class="modalCard">
      <template #header>
        <img :src="user.picture.large" alt="User Profile Picture" />
      </template>
      <template #title> {{ user.name.first }} {{ user.name.last }} <br /> </template>
      <template #subtitle>
        Email: {{ user.email }} <br />
        Phone: {{ user.phone }} | {{ user.cell }} <br />
        <br />
        <Chip class="chip">{{ user.gender }}</Chip>
      </template>
      <template #content>
        {{ user.location.street.number }} {{ user.location.street.name }}, {{ user.location.city }},
        {{ user.location.state }}, {{ user.location.country }}</template
      >
    </Card>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import Card from 'primevue/card';
import Chip from 'primevue/chip';
import { IResult } from '@/interface/RandomUser';

export default defineComponent({
  name: 'UserModal',
  components: { Card, Chip },
  props: {
    user: {
      type: Object as PropType<IResult>,
      required: true,
    },
  },
});
</script>

<style lang="scss">
.modalOverlay {
  position: fixed;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  z-index: 100;
}

.modalCard {
  min-width: 25rem;
  max-width: 30rem;
  margin-bottom: 2em;
  border-radius: 5px;
  margin: 8% auto;
  position: relative;
  padding: 20px;
}
</style>
