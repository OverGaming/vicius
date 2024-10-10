<template>
  <div class="v-input-end-addon">
    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style>
  .v-input-end-addon {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    min-width: var(--v-input-height);
    background-color: var(--v-color-surface-mod-alt-highest);
    border: var(--v-input-border-width) var(--v-input-border-style) var(--v-input-border-color);
    border-inline-start: 0;
    border-end-end-radius: var(--v-input-border-radius);
    border-start-end-radius: var(--v-input-border-radius);
    padding-inline: var(--v-input-gap);
    font-size: var(--v-input-font-size);
  }
</style>
