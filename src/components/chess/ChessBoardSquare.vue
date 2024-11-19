<script setup>
const props = defineProps({
  rowIndex: {
    type: Number,
    required: true,
  },

  colIndex: {
    type: Number,
    required: true,
  },

  isHighlighted: {
    type: Boolean,
    default: false,
  }
})
</script>

<template>
  <div
    class="relative flex h-full w-full items-center justify-center p-1"
    :class="[
      (props.rowIndex + props.colIndex) % 2 === 0 ? 'bg-white' : 'bg-primary-100',
      {
        'before:content before:bg-primary-400/40 before:absolute before:inset-0':
          props.isHighlighted,
      },
    ]"
  >
    <span class="text-xs">
      <slot name="text" />
    </span>
  </div>
</template>
