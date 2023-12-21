import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './components/App.vue';
import Modals from './plugins/modals/index';

createApp(App).use(createPinia()).use(Modals).mount('#app');
