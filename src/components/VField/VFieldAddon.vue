<template>
  <div class="v-field-addon">
    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style>
  .v-field-addon {
    flex-shrink: 0;
    min-width: var(--v-input-height);
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
