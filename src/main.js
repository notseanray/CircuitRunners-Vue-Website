import App from "./App.vue";
import router from "./router";
import PrimeVue from "primevue/config";
import "./index.css";
import "./assets/app.css";
import { Quasar } from "quasar";

import iconSet from "quasar/icon-set/fontawesome-v6";
import "@quasar/extras/fontawesome-v6/fontawesome-v6.css";

import "quasar/src/css/index.sass";
import { createApp } from "vue";
import { createPinia } from "pinia";

const pinia = createPinia();

const app = createApp(App);

app.use(pinia);
app.use(router);
app.use(PrimeVue);
app.use(Quasar, {
  iconSet: iconSet,
  config: {
    brand: {
      primary: "#20D54D",
    },
  },
  plugins: {}, // import Quasar plugins and add here
});
app.mount("#app");
