import { Ref } from 'vue';
function getApi() {
  async function callApi(error: Ref<boolean>, loading: Ref<boolean>, quantity: number, gender: string) {
    error.value = false;
    loading.value = true;
    try {
      const result = await fetch(`https://randomuser.me/api/?results=${quantity}&gender=${gender}`, {
        method: 'GET',
      });
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
