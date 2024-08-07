<template>
  <div class="v-banner-content">
    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style>
  .v-banner-content {
    grid-row: 1/1;
    grid-column: 1/1;
    position: relative;
    z-index: 3;
    align-self: end;
  }
</style>
