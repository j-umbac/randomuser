import { Ref } from 'vue';
import fetchApiService from '@/service/fetch-api-service';

const url = 'https://randomuser.me/api/?';

const searchParams = new URLSearchParams();

export default function useApi() {
  const sendRequest = fetchApiService();
  async function callApi(error: Ref<boolean>, loading: Ref<boolean>, quantity: number, gender: string) {
    searchParams.set('exc', 'login,registered,dob,nat');
    searchParams.set('results', quantity.toString());
    searchParams.set('gender', gender);

    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const request = new Request(`${url}${searchParams}`, options);

    error.value = false;
    loading.value = true;

    try {
      const result = await sendRequest(request);
      const data = await result.json();
      const err = data.error;
      if (data.error) {
        throw err;
      }
      return data;
    } catch (err) {
      error.value = true;
      console.log(err);
    } finally {
      loading.value = false;
    }
  }

  return { callApi };
}
