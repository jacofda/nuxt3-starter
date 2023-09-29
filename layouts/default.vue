<template>
  <div class="" @click="layoutsStore.hideAll">
    <LayoutTheHeader />
    <slot />
    <LayoutTheFooter />
  </div>
</template>
<script setup lang="ts">
import { useLayoutStore } from '~/store/layouts'
useHead({
  bodyAttrs: {
    class: `min-h-screen bg-white selection:bg-primary/10 selection:text-primary dark:bg-gray-900`,
  },
});
const layoutsStore = useLayoutStore()
</script>
