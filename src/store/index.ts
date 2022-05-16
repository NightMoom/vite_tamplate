import { defineStore } from "pinia"

const mainStore = defineStore("mainStore", {
  state: () => {
    return {
      counter: 0,
    }
  },
  actions: {
    increment() {
      this.counter++
    },
  },
  getters: {
    counter: (state) => state.counter,
  },
})

export default mainStore
