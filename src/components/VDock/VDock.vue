<template>
  <nav class="v-dock">
    <slot />
  </nav>
</template>

<script setup lang="ts"></script>

<style>
  .v-dock {
    display: inline-grid;
    grid-template-columns: auto;
    gap: var(--v-unit-3);
    padding: var(--v-unit-3);
  }
</style>
