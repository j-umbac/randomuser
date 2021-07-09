<template>
  <div class="home">
    <h1>Random User Generator</h1>
    <form @keydown.enter="getRndUser">
      <div class="Menu">
        <p>Number of Random Users to be Generated:</p>
        <InputNumber v-model="quantity" :min="1" showButtons />
        <Dropdown
          placeholder="Select a Gender"
          v-model="gender"
          :options="genders"
          optionLabel="name"
          optionValue="code"
        />
        <div>
          <Button label="Primary" class="p-button-rounded p-ripple" @click="getRndUser">Generate Random User</Button>
        </div>
      </div>
    </form>
    <div v-if="loading"><ProgressSpinner animationDuration="1s" strokeWidth="5" /></div>
    <div v-if="error">Oops! Cannot fetch data. Please try again.</div>
    <div class="dispContainer">
      <div v-for="user in users" :key="user.id.value" id="usersDisp">
        <div v-if="users">
          <UserCard :user="user" />
        </div>
      </div>
    </div>
    <ScrollTop :threshold="200" class="custom-scrolltop" icon="pi pi-arrow-up" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Button from 'primevue/button';
import InputNumber from 'primevue/inputnumber';
import Dropdown from 'primevue/dropdown';
import getApi from '@/composables/use-getApi';
import UserCard from '@/components/user-card.vue';
import ProgressSpinner from 'primevue/progressspinner';
import Ripple from 'primevue/ripple';
import ScrollTop from 'primevue/scrolltop';

export default defineComponent({
  name: 'Home',
  components: { Button, InputNumber, Dropdown, UserCard, ProgressSpinner, ScrollTop },
  directives: { Ripple },
  setup() {
    const { callApi } = getApi();

    const genders = ref([
      { name: 'Both', code: '' },
      { name: 'Female', code: 'female' },
      { name: 'Male', code: 'male' },
    ]);

    const users = ref();
    const error = ref(false);
    const loading = ref(false);
    const quantity = ref(1);
    const gender = ref();

    function getRndUser() {
      users.value = null;
      callApi(error, loading, quantity.value, gender.value).then((data) => (users.value = data.results));
    }

    return { getRndUser, users, loading, error, quantity, gender, genders };
  },
});
</script>

<style lang="scss">
img {
  min-width: 150px;
}
#usersDisp {
  display: inline-grid;
  margin: 20px;
  min-height: 200px;
}

.dispContainer {
  max-width: 80%;
  margin: 0 auto;
}

.Menu > * {
  margin: 1rem;
}

h1 {
  padding: 25px;
}
</style>
