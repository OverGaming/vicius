<template>
  <VNavigation as="nav" class="v-dock">
    <VNavigationHeader v-if="$slots.header" class="v-dock__header">
      <slot name="header" />
    </VNavigationHeader>
    <VNavigationContent as="div" class="v-dock__content">
      <slot />
    </VNavigationContent>
    <VNavigationFooter v-if="$slots.footer" class="v-dock__footer">
      <slot name="footer" />
    </VNavigationFooter>
  </VNavigation>
</template>

<script setup lang="ts">
  import VNavigation from '../VNavigation/VNavigation.vue'
  import VNavigationHeader from '../VNavigation/VNavigationHeader.vue'
  import VNavigationContent from '../VNavigation/VNavigationContent.vue'
  import VNavigationFooter from '../VNavigation/VNavigationFooter.vue'
</script>

<style>
  .v-dock {
    --v-dock-gap: var(--v-unit-3);

    display: inline-grid;
  }

  .v-dock__header,
  .v-dock__content,
  .v-dock__footer {
    display: inline-grid;
    grid-template-columns: auto;
    align-content: start;
    gap: var(--v-dock-gap);
    padding: var(--v-dock-gap);
  }

  .v-dock__header {
    padding-block-end: 0;
  }

  .v-dock__footer {
    padding-block-start: 0;
  }
</style>
