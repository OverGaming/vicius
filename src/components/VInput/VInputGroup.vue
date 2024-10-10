<template>
  <div class="v-input-group">
    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style>
  .v-input-group {
    display: flex;
    position: relative;

    &:has(.v-input-start-addon) {
      .v-input {
        border-start-start-radius: 0;
        border-end-start-radius: 0;
      }
    }

    &:has(.v-input-end-addon) {
      .v-input {
        border-end-end-radius: 0;
        border-start-end-radius: 0;
      }
    }

    &:has(.v-input-start-element) {
      .v-input {
        padding-inline-start: var(--v-input-height);
      }
    }

    &:has(.v-input-end-element) {
      .v-input {
        padding-inline-end: var(--v-input-height);
      }
    }

    .v-icon {
      font-size: var(--v-unit-6);
    }

    &:has(.v-input--sm) {
      --v-input-height: var(--v-unit-10);
      --v-input-font-size: var(--v-font-size-b3);
      --v-input-gap: var(--v-unit-3);

      .v-icon {
        font-size: var(--v-unit-5);
      }
    }

    &:has(.v-input--xs) {
      --v-input-height: var(--v-unit-8);
      --v-input-font-size: var(--v-font-size-b4);
      --v-input-gap: var(--v-unit-2);

      .v-icon {
        font-size: var(--v-unit-4);
      }
    }
  }
</style>
