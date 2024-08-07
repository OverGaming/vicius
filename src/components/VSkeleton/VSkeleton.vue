<template>
  <div class="v-skeleton v-animate-pulse">
    <div class="v-skeleton__ratio">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { VSkeletonProps } from './types'

  withDefaults(defineProps<VSkeletonProps>(), {
    aspectRatio: 'auto',
    width: 'auto',
    height: 'auto'
  })
</script>

<style>
  .v-skeleton {
    width: 100%;
    max-width: v-bind(width);
    min-height: v-bind(height);
    background-color: var(--v-color-skeleton);
    border-radius: var(--v-radius-sm);
  }

  .v-skeleton__ratio {
    aspect-ratio: v-bind(aspectRatio);
  }
</style>
