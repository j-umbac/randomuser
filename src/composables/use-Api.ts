import { Ref } from 'vue';

const url = 'https://randomuser.me/api/?';

const searchParams = new URLSearchParams();

function getApi() {
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
      const result = await fetch(request);
      return result.json();
    } catch {
      error.value = true;
    } finally {
      loading.value = false;
    }
  }

  return { callApi };
}

export default getApi;
