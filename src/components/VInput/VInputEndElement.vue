<template>
  <div class="v-input-end-element">
    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style>
  .v-input-end-element {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 2;
    inset-block-start: 50%;
    inset-inline-end: 0;
    transform: translateY(-50%);
    height: var(--v-input-height);
    width: var(--v-input-height);
    pointer-events: none;
  }
</style>
