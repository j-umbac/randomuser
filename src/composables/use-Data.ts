import { ref } from 'vue';
import getApi from '@/composables/use-Api';

function getData() {
  const { callApi } = getApi();
  const users = ref(null);
  const error = ref(false);
  const loading = ref(false);
  const quantity = ref(1);
  const gender = ref();

  function getUsers() {
    callApi(error, loading, quantity.value, gender.value).then((data) => (users.value = data.results));
  }

  return { getUsers, users, loading, error, quantity, gender };
}

export default getData;
