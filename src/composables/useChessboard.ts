import { ref } from "vue";
import type { Ref } from 'vue';

interface ISquare {
  row: number;
  col: number;
  order: number;
}

const clickedSquares: Ref<ISquare[]> = ref([]);

export function useChessboard() {
  function handleSquareClick(row: number, col: number): void {
    const square = { row, col, order: clickedSquares.value.length + 1 };

    if (!clickedSquares.value.some((s) => s.row === row && s.col === col)) {
      clickedSquares.value.push(square);
    }
  }

  function getSquareOrder(row: number, col: number): number | null {
    const square = clickedSquares.value.find(
      (s) => s.row === row && s.col === col,
    );

    return square?.order ?? null;
  };

  return {
    clickedSquares,
    handleSquareClick,
    getSquareOrder
  };
}
