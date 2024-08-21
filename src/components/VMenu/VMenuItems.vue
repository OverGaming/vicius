<template>
  <ul class="v-menu-items">
    <slot />
  </ul>
</template>

<script setup lang="ts"></script>

<style>
  .v-menu-items {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--v-unit-05);
    align-content: start;

    &:not(:last-child) {
      margin-block-end: var(--v-unit-4);
    }
  }
</style>
