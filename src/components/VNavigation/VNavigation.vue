<template>
  <div class="v-navigation">
    <slot />
  </div>
</template>

<script setup lang="ts"></script>

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
