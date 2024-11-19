<script setup>
import TheHeader from "@components/layout/TheHeader.vue";
import TheSideMenu from "@components/layout/TheSideMenu.vue";
</script>

<template>
  <TheHeader />

  <div
    class="flex h-[calc(100dvh-var(--mobileHeaderHeight))] flex-col md:h-[calc(100dvh-var(--desktopHeaderHeight))] md:flex-row"
  >
    <main class="flex-grow p-4 md:w-2/3">
      <RouterView />
    </main>

    <TheSideMenu class="md:w-1/4" />
  </div>
</template>
