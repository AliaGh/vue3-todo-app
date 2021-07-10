import { createApp } from 'vue'
import App from './App.vue'
import installElementPlus from './plugins/element'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

const app = createApp(App)
installElementPlus(app)
app.mount('#app')