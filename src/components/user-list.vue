<template>
  <div>
    <DataTable
      :value="users"
      :paginator="true"
      :rows="10"
      removableSort
      paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
      :autoLayout="true"
      v-model:selection="selectedUser"
      selectionMode="single"
      @row-click="openModal"
      @page="onPage($event)"
      @sort="sortList"
    >
      <template #empty> No users found. </template>
      <template #loading> Loading user data. Please wait. </template>
      <Column field="picture.large">
        <template #body="{ data }">
          <img :src="data.picture.large" width="60" />
        </template>
      </Column>
      <Column field="name.first" header="Name" sortable>
        <template #body="{ data }"> {{ data.name.first }} {{ data.name.last }} </template>
      </Column>
      <Column field="email" header="Email"></Column>
      <Column field="phone" header="Phone">
        <template #body="{ data }"> {{ data.phone }} | {{ data.cell }} </template>
      </Column>
      <Column field="gender" header="Gender">
        <template #body="{ data }"
          ><Chip class="chip">{{ data.gender }}</Chip>
        </template>
      </Column>
      <Column field="location" header="Address">
        <template #body="{ data }">
          {{ data.location.street.number }} {{ data.location.street.name }}, {{ data.location.city }},
          {{ data.location.state }}, {{ data.location.country }}
        </template>
      </Column>
    </DataTable>
  </div>
  <transition-group tag="div" name="modalCard" appear>
    <UserModal :user="selectedUser" v-if="showModalCard" @click.self="closeModal" />
  </transition-group>
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Chip from 'primevue/chip';
import UserModal from '../components/user-modal.vue';
import router from '@/router';
import { RouteName } from '@/constants/route-names';
import { IRandomUser } from '@/interface/RandomUser';
import IPage from '@/interface/page';

export default defineComponent({
  name: 'UserList',
  components: { DataTable, Column, Chip, UserModal },
  props: {
    users: {
      type: Object as PropType<IRandomUser>,
      required: true,
      default() {
        return null;
      },
    },
  },
  setup() {
    const selectedUser = ref();
    const pageNumber = ref(1);
    const showModalCard = ref(false);
    const maxPage = ref(1);

    function sortList() {
      router.push({ name: RouteName.List, params: { page: 1 } });
    }

    function closeModal() {
      showModalCard.value = false;
      router.push({ name: RouteName.List, params: { page: pageNumber.value } });
    }

    function openModal() {
      showModalCard.value = true;
      router.push({ name: RouteName.User, params: { id: Math.round(Math.random() * 100000) } });
    }

    function onPage<Type extends IPage>(event: Type) {
      pageNumber.value = event.page + 1;
      maxPage.value = event.pageCount;
      router.push({ name: RouteName.List, params: { page: pageNumber.value } });
    }

    return { selectedUser, showModalCard, onPage, openModal, closeModal, sortList };
  },
});
</script>
