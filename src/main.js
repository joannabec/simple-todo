import { createApp } from 'vue'
import App from './App.vue'
import BaseButton from './components/ui/BaseButton.vue'

import './index.css'

const app = createApp(App);
app.component('base-button', BaseButton);
app.mount('#app')
