import { ref } from 'vue';
import useApi from '@/composables/use-api';
import { IResult } from '@/interface/RandomUser';

export default function useData() {
  const { get } = useApi();
  const users = ref<IResult[]>();
  const error = ref(false);
  const loading = ref(false);
  const quantity = ref(1);
  const gender = ref();
  const errorMsg = ref();

  const url = 'https://randomuser.me/api/?';
  const searchParams = new URLSearchParams();

  async function getUsers() {
    searchParams.set('exc', 'login,registered,dob,nat');
    searchParams.set('results', quantity.value.toString());
    searchParams.set('gender', gender.value);


    const data = await get(url, searchParams, error, loading)
    .catch((err) => {
      console.error('Error: ', err);
      errorMsg.value = err;
    })
    users.value = data.results;

  }

  return { getUsers, users, loading, error, quantity, gender, errorMsg };
}
