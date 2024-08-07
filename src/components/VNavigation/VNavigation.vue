<template>
  <div class="v-navigation">
    <div v-if="$slots.header" class="v-navigation__header">
      <slot name="header" />
    </div>

    <div class="v-navigation__content">
      <slot />
    </div>

    <div v-if="$slots.footer" class="v-navigation__footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style>
  .v-navigation {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
  }

  .v-navigation__header {
    position: relative;
    z-index: 2;
  }

  .v-navigation__content {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--v-unit-10);
    padding: var(--v-unit-5);
    overflow-y: auto;
    align-self: start;
    align-content: start;
    height: 100%;
    position: relative;
    z-index: 1;
    scrollbar-color: transparent;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
    /* scrollbar-color: var(--v-color-surface-mod-alt) transparent;
    scrollbar-width: 8px;

    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-track {
      background-color: var(--v-color-surface-mod-alt);
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--v-color-surface-mod);
      transition: var(--v-duration-default) var(--v-easing-standard);
      transition-property: background-color, color;
      border: 2px solid transparent;
      background-clip: content-box;
    } */
  }

  .v-navigation__footer {
    position: relative;
    z-index: 2;
  }
</style>
