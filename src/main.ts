import { createApp } from "vue"
import App from "./App.vue"
import { createPinia } from "pinia"
import router from "./router"

// 样式初始化
import "normalize.css"
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount("#app")
