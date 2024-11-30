import { ref, computed } from "vue";
import type { Ref } from 'vue';

interface ISquare {
  row: number;
  col: number;
  order: number;
}

const clickedSquares: Ref<ISquare[]> = ref([]);

export function useChessboard() {
  const highlightedSquaresSet = ref(new Set<string>());

  const highlightedSquares = computed({
    get: () => highlightedSquaresSet.value,

    set: (squareKey: string) => {
      highlightedSquaresSet.value.add(squareKey);
    },
  });

  function handleSquareClick(row: number, col: number): void {
    const squareKey = `${row}-${col}`;

    if (!highlightedSquares.value.has(squareKey)) {
      highlightedSquares.value.add(squareKey);

      const square = { row, col, order: clickedSquares.value.length + 1 };

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
    highlightedSquares,
    handleSquareClick,
    getSquareOrder
  };
}
