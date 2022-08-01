import { createApp } from "vue"
import App from "./App.vue"
import { setGlobalOptions } from "vue-request"
import { createPinia } from "pinia"

setGlobalOptions({
  manual: true,
})

const app = createApp(App)
app.use(createPinia())

app.mount("#app")
