<script setup>
import { useChessboard } from "@/composables/useChessboard";

import ChessBoardSquare from "./ChessBoardSquare.vue";

const { clickedSquares, handleSquareClick, getSquareOrder } = useChessboard();
</script>

<template>
  <div class="flex h-full items-center justify-center">
    <div
      class="grid aspect-square w-full max-w-[600px] grid-cols-8 grid-rows-8"
    >
      <div v-for="rowIndex in 8" :key="`row-${rowIndex}`">
        <ChessBoardSquare
          v-for="colIndex in 8"
          :key="`square-${rowIndex}-${colIndex}`"
          :row-index="rowIndex - 1"
          :col-index="colIndex - 1"
          :is-highlighted="
            clickedSquares.some(
              (s) => s.row === rowIndex - 1 && s.col === colIndex - 1,
            )
          "
          @click="handleSquareClick(rowIndex - 1, colIndex - 1)"
        >
          <template #text>
            {{ getSquareOrder(rowIndex - 1, colIndex - 1) }}
          </template>
        </ChessBoardSquare>
      </div>
    </div>
  </div>
</template>
