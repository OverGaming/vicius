<template>
  <component :is="as" class="v-navigation-content">
    <slot />
  </component>
</template>

<script setup lang="ts">
  import type { VNavigationContentProps } from './types'

  withDefaults(defineProps<VNavigationContentProps>(), {
    as: 'nav'
  })
</script>

<style>
  .v-navigation-content {
    overflow-y: auto;
    height: 100%;
    position: relative;
    z-index: 1;
    scrollbar-color: transparent;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }

    /* scrollbar-color: var(--v-color-surface-mod-alt) transparent;
    scrollbar-width: 8px;

    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-track {
      background-color: var(--v-color-surface-mod-alt);
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--v-color-surface-mod);
      transition: var(--v-duration-default) var(--v-easing-standard);
      transition-property: background-color, color;
      border: 2px solid transparent;
      background-clip: content-box;
    } */
  }
</style>
