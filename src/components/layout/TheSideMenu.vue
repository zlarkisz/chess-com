<script setup>
import { useChessboard } from "@/composables/useChessboard";

const { clickedSquares } = useChessboard();
</script>

<template>
  <aside class="flex flex-col items-center gap-2 bg-primary-200/20 p-4">
    <div class="flex items-center gap-4">
      <h2 class="text-lg font-semibold">Clicked Squares</h2>

      <span class="text-sm" v-text="clickedSquares.length" />
    </div>

    <Transition name="slide-fade">
      <ul
        v-if="clickedSquares.length"
        class="flex max-w-full flex-row gap-1 overflow-auto whitespace-nowrap text-sm md:list-disc md:flex-col"
      >
        <li v-for="(square, index) in clickedSquares" :key="index">
          {{ String.fromCharCode(65 + square.row) }}{{ 8 - square.col }} - Click
          #{{ square.order }}
        </li>
      </ul>
    </Transition>
  </aside>
</template>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translatey(20px);
  opacity: 0;
}
</style>
