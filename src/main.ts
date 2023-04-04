import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { setupStore } from "./store";

function bootstrap() {
  const app = createApp(App);
  // router config
  setupStore(app);
  // piana config
  app.mount("#app");
}

bootstrap();
