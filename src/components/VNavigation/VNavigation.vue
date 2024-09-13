<template>
  <component :is="as" class="v-navigation">
    <slot />
  </component>
</template>

<script setup lang="ts">
  import type { VNavigationProps } from './types'

  withDefaults(defineProps<VNavigationProps>(), {
    as: 'div'
  })
</script>

<style>
  .v-navigation {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;

    &:has(.v-navigation-header) {
      grid-template-rows: auto 1fr;
    }
  }
</style>
