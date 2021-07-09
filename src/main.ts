import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import PrimeVue from 'primevue/config';
import '@/plugins/primevue';

const app = createApp(App);
app.use(router);
app.use(PrimeVue, { ripple: true });
app.mount('#app');
