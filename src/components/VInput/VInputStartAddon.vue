<template>
  <div class="v-input-start-addon">
    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style>
  .v-input-start-addon {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    min-width: var(--v-input-height);
    background-color: var(--v-color-surface-mod-alt-highest);
    border: var(--v-input-border-width) var(--v-input-border-style) var(--v-input-border-color);
    border-inline-end: 0;
    border-end-start-radius: var(--v-input-border-radius);
    border-start-start-radius: var(--v-input-border-radius);
    padding-inline: var(--v-input-gap);
    font-size: var(--v-input-font-size);
  }
</style>
