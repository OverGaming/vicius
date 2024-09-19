<template>
  <li class="v-menu-item">
    <component
      :is="htmlTag"
      :href="href"
      class="v-menu-item__element"
      :class="{ 'v-menu-item--active': active }"
      :type="htmlTag === 'button' ? type : undefined"
    >
      <slot />
    </component>
  </li>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import type { VMenuItemProps } from './types'

  const props = withDefaults(defineProps<VMenuItemProps>(), {
    type: 'button',
    active: false
  })

  const htmlTag = computed(() => (props.href ? 'a' : 'button'))
</script>

<style>
  .v-menu-item__element {
    display: grid;
    grid-auto-flow: column;
    justify-content: start;
    align-items: center;
    gap: var(--v-unit-3);
    min-height: var(--v-unit-12);
    width: 100%;
    color: var(--v-color-text);
    padding: var(--v-unit-2) var(--v-unit-4);
    border-radius: var(--v-radius-sm);
    transition: var(--v-duration-default) var(--v-easing-standard);
    transition-property: background-color, color;
    font-weight: var(--v-font-weight-normal);
    font-size: var(--v-font-size-b3);
    line-height: var(--v-line-height);

    &:where(&:hover, &:focus-visible, &:active):not(.v-menu-item--active) {
      background-color: var(--v-color-surface-mod);
      color: var(--v-color-text-high);
    }

    &:has(.v-menu__box:first-of-type) {
      grid-auto-columns: auto 1fr;
    }

    &:has(.v-menu__box:last-of-type) {
      grid-auto-columns: 1fr auto;
    }

    &:has(.v-menu__box:first-of-type):has(.v-menu__box:last-of-type) {
      grid-auto-columns: auto 1fr auto;
    }
  }

  .v-menu-item--active {
    background-color: var(--v-color-surface-mod);
    color: var(--v-color-primary);
  }
</style>
