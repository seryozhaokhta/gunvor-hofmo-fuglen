// src/main.js

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createI18n } from "vue-i18n";
import poemsEn from "./i18n/poems_en.json";
import poemsNo from "./i18n/poems_no.json";
import poemsRu from "./i18n/poems_ru.json";

const messages = {
  en: poemsEn,
  no: poemsNo,
  ru: poemsRu,
};

const i18n = createI18n({
  legacy: false,
  locale: "en",
  messages,
});

const app = createApp(App);
app.use(router);
app.use(i18n);
app.mount("#app");
