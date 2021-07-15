<template>
  <div class="home">
    <div class="topBar">
      <h1>Random User Generator</h1>
      <form>
        <div class="Menu">
          <p>Number of Random Users to be Generated:</p>
          <InputNumber v-model="quantity" :min="1" showButtons />
          <Dropdown
            placeholder="Select a Gender"
            v-model="gender"
            :options="genders"
            optionLabel="name"
            optionValue="code"
            @change="updateList"
          />
          <div>
            <Button label="Primary" class="p-button-rounded p-ripple" @click="updateList">Generate Random User</Button>
          </div>
        </div>
      </form>
    </div>
    <div v-if="error">Oops! Cannot fetch data. Please try again.</div>
    <div v-if="users" class="dispContainer">
      <UserList :users="users" />
    </div>
    <ScrollTop :threshold="200" class="custom-scrolltop" icon="pi pi-arrow-up" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Button from 'primevue/button';
import InputNumber from 'primevue/inputnumber';
import Dropdown from 'primevue/dropdown';
import Ripple from 'primevue/ripple';
import ScrollTop from 'primevue/scrolltop';
import { genders } from '@/constants/genders';
import getData from '@/composables/use-Data';
import UserList from '../components/user-list.vue';

export default defineComponent({
  name: 'Home',
  components: { Button, InputNumber, Dropdown, ScrollTop, UserList },
  directives: { Ripple },
  setup() {
    const { getUsers, users, loading, error, quantity, gender } = getData();

    function updateList() {
      getUsers();
    }

    return {
      users,
      loading,
      error,
      quantity,
      gender,
      genders,
      updateList,
    };
  },
});
</script>

<style lang="scss">
.chip {
  font-size: 0.8em;
  text-transform: capitalize;
  font-weight: bold;
  color: gray;
}
.topBar {
  background-color: rgb(255, 255, 255);
  padding: 20px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
}
img {
  max-width: 200px;
  border-radius: 50%;
  margin: auto 5px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2);
}
#usersDisp {
  display: inline-grid;
  margin: 20px;
  min-height: 200px;
}

.dispContainer {
  max-width: 80%;
  margin: 20px auto;
}

.Menu > * {
  margin: 1rem;
}

h1 {
  padding: 25px;
}

/*List Animations*/
.modalCard-enter-from {
  opacity: 0;
}
.modalCard-enter-active {
  transition: all 0.5s ease;
}
.modalCard-leave-to {
  opacity: 0;
}
.modalCard-leave-active {
  transition: all 0.3s ease;
}
</style>
