<template>
  <component :is="as" class="v-menu">
    <div v-if="$slots.label" class="v-menu__label">
      <slot name="label" />
    </div>
    <div class="v-menu__content">
      <slot />
    </div>
  </component>
</template>

<script setup lang="ts">
  import type { VMenuProps } from './types'

  withDefaults(defineProps<VMenuProps>(), {
    as: 'nav'
  })
</script>

<style>
  .v-menu {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--v-unit-4);
  }

  .v-menu__content {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--v-unit-05);
    align-content: start;
  }
</style>
