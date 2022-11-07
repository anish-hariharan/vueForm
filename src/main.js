import { createApp } from 'vue';

import App from './App.vue';
import BaseDialog from "./components/UI/BaseDialog.vue";
import Submission from "./components/UI/Submission.vue";

const app = createApp(App)

app.component('base-dialog', BaseDialog)
app.component('submission', Submission)

app.mount('#app');
