<template>
  <div class="v-menu">
    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style>
  .v-menu {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--v-unit-4);
  }
</style>
