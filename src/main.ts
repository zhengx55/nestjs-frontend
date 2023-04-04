import { createApp } from "vue";
import App from "./App.vue";
import { setupStore } from "./store";
import { setupRouter } from "./router";

function bootstrap() {
  const app = createApp(App);
  // router config
  setupStore(app);
  // piana config
  setupRouter(app);
  app.mount("#app");
}

bootstrap();
