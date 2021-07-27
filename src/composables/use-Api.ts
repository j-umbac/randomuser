import { Ref } from 'vue';
import fetchApi from '@/api/fetch-api';

const url = 'https://randomuser.me/api/?';
const searchParams = new URLSearchParams();

export default function useApi() {
  const sendRequest = fetchApi();
  async function get(url: string, searchParams: URLSearchParams, error: Ref<boolean>, loading: Ref<boolean>) {
    
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
      console.error('Error: ', err);
    } finally {
      loading.value = false;
    }
  }

  return { get };
}
