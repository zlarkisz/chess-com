<script setup>
import { ref } from "vue";

import TheHeader from "@components/layout/TheHeader.vue";
import TheSideMenu from "@components/layout/TheSideMenu.vue";
</script>

<!-- nkampa@chess.com -->

<template>
  <TheHeader />

  <main class="flex">
    <RouterView />
  </main>

  <TheSideMenu
    class="fixed bottom-0 right-0 h-[var(--sidebarHeight)] w-screen md:top-[var(--headerHeight)] md:h-[calc(100vh-var(--headerHeight))] md:w-[var(--sidebarWidth)]"
  />
</template>
