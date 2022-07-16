<template>
  <div ref="geometryCube" class=""></div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
const geometryCube = defineComponent({
  name: 'GeometryCube',
  setup() {
    const geometryCube = ref(null)

    return {
      geometryCube,
    }
  },
})
export default geometryCube
</script>
