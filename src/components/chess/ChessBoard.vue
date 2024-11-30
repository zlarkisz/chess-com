<script setup>
import { computed, ref } from "vue";

import { useChessboard } from "@/composables/useChessboard";

import ChessBoardSquare from "./ChessBoardSquare.vue";

const {
  clickedSquares,
  highlightedSquares,
  handleSquareClick,
  getSquareOrder,
} = useChessboard();
</script>

<template>
  <div
    class="h-[calc(100vh-var(--headerHeight)-var(--sidebarHeight))] w-screen md:h-[calc(100vh-var(--headerHeight))] md:w-[calc(100vw-var(--sidebarWidth))]"
  >
    <div class="m-auto aspect-square max-h-full max-w-full bg-black">
      <div class="grid aspect-square grid-cols-8 grid-rows-8">
        <div v-for="rowIndex in 8" :key="`row-${rowIndex}`">
          <ChessBoardSquare
            v-for="colIndex in 8"
            :key="`square-${rowIndex}-${colIndex}`"
            :row-index="rowIndex - 1"
            :col-index="colIndex - 1"
            :is-highlighted="highlightedSquares.has(`${rowIndex - 1}-${colIndex - 1}`)"
            v-memo="[rowIndex, colIndex, highlightedSquares]"
            @click="handleSquareClick(rowIndex - 1, colIndex - 1)"
          >
            <template #text>
              {{ getSquareOrder(rowIndex - 1, colIndex - 1) }}
            </template>
          </ChessBoardSquare>
        </div>
      </div>
    </div>
  </div>
</template>
