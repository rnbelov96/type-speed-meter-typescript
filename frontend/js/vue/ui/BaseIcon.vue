<template lang="html">
  <svg
    :width="width"
    :height="height"
    aria-hidden="true"
  >
    <use :xlink:href="`images/sprite.svg#${id}`" />
  </svg>
</template>

<script setup lang="ts">
defineProps<{
  id: string
  width?: string,
  height?: string
}>();
</script>
