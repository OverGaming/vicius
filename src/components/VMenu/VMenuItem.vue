<template>
  <component
    :is="htmlTag"
    :href="href"
    class="v-menu-item"
    :class="{ 'v-menu-item--active': active }"
    :type="htmlTag === 'button' ? type : undefined"
  >
    <div v-if="$slots.prepend" class="v-menu__box">
      <slot name="prepend" />
    </div>
    <VText class="v-menu-item__text" variant="body" size="b3" ellipsis>
      <slot />
    </VText>
    <div v-if="$slots.append" class="v-menu__box">
      <slot name="append" />
    </div>
  </component>
</template>

<script setup lang="ts">
  import VText from '../VText/VText.vue'
  import { computed } from 'vue'
  import type { VMenuItemProps } from './types'

  const props = withDefaults(defineProps<VMenuItemProps>(), {
    type: 'button',
    active: false
  })

  const htmlTag = computed(() => (props.href ? 'a' : 'button'))
</script>

<style>
  .v-menu-item {
    display: grid;
    grid-auto-flow: column;
    justify-content: start;
    align-items: center;
    gap: var(--v-unit-3);
    min-height: var(--v-unit-12);
    width: 100%;
    padding-inline-start: var(--v-unit-4);
    padding-inline-end: var(--v-unit-4);
    border-radius: var(--v-radius-sm);
    transition: var(--v-duration-default) var(--v-easing-standard);
    transition-property: background-color, color;

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

  .v-menu__box {
    display: flex;
  }
</style>
