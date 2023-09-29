<template>
  <div class="">
    <NuxtLayout class="">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
if (process.client) {
  const lenis = new Lenis();

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
}
</script>
