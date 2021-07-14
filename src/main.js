import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import TodoElement from './components/TodoElement.vue'

const app = createApp(App)

app.component('TodoElement',TodoElement ).mount('#app')