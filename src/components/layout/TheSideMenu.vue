<script setup>
import { useChessboard } from "@/composables/useChessboard";

const { clickedSquares } = useChessboard();
</script>

<template>
  <aside class="flex flex-col items-center gap-2 bg-primary-200/20 p-4">
    <h2 class="text-lg font-semibold">Clicked Squares</h2>

    <span class="text-sm" v-text="clickedSquares.length" />

    <ul class="flex gap-1  flex-row text-sm md:flex-col overflow-auto whitespace-nowrap max-w-full md:list-disc">
      <li v-for="(square, index) in clickedSquares" :key="index">
        {{ String.fromCharCode(65 + square.row) }}{{ 8 - square.col }} - Click
        #{{ square.order }}
      </li>
    </ul>
  </aside>
</template>
