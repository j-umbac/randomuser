import { ref } from 'vue';
import useApi from '@/composables/use-Api';
import { Result } from '@/interface/RandomUser';

export default function useData() {
  const { callApi } = useApi();
  const users = ref<Result[]>();
  const error = ref(false);
  const loading = ref(false);
  const quantity = ref(1);
  const gender = ref();

  function getUsers() {
    callApi(error, loading, quantity.value, gender.value).then((data) => (users.value = data.results));
  }

  return { getUsers, users, loading, error, quantity, gender };
}
