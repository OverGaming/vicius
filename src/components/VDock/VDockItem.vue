<template>
  <div class="v-dock-item" :class="{ 'v-dock-item--active': active }">
    <slot />
  </div>
</template>

<script setup lang="ts">
  import type { VDockItemProps } from './types'

  withDefaults(defineProps<VDockItemProps>(), {
    active: false
  })
</script>

<style>
  .v-dock-item {
    position: relative;
    display: flex;
    flex-direction: column;

    &::before {
      content: '';
      display: block;
      width: var(--v-unit-1);
      height: var(--v-unit-12);
      position: absolute;
      inset-block-start: 50%;
      inset-inline-start: calc(var(--v-unit-3) * -1);
      background-color: var(--v-color-primary);
      translate: 0 -50%;
      transition: var(--v-duration-default) var(--v-easing-standard);
      transition-property: height, opacity;
      border-end-end-radius: var(--v-radius-sm);
      border-start-end-radius: var(--v-radius-sm);
      opacity: 0;
    }

    &:where(&:hover, &:focus-visible, &:active):not(.v-dock-item--active),
    &:has(:where(*:hover, *:focus-visible, *:active)):not(.v-dock-item--active) {
      &::before {
        opacity: 1;
        height: var(--v-unit-3);
      }
    }
  }

  .v-dock-item--active {
    &::before {
      opacity: 1;
      height: var(--v-unit-12);
    }
  }
</style>
