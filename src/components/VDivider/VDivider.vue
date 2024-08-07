<template>
  <div
    class="v-divider"
    :class="{
      'v-divider--dot': dot,
      'v-divider--content': slots.default
    }"
  >
    <VText v-if="slots.default && !dot" as="span" variant="body" size="b3" italic>
      <slot />
    </VText>
  </div>
</template>

<script setup lang="ts">
  import { useSlots } from 'vue'
  import VText from '../VText/VText.vue'

  defineProps({
    dot: {
      type: Boolean,
      default: false
    }
  })

  const slots = useSlots()
</script>

<style>
  .v-divider {
    &:not(.v-divider--content) {
      height: var(--v-unit-025);
      background: var(--v-color-outline);
    }
  }

  .v-divider--content {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    gap: var(--v-unit-2);
    align-items: center;

    &::before,
    &::after {
      content: '';
      display: block;
      height: var(--v-unit-025);
      background: var(--v-color-outline);
    }
  }

  .v-divider--dot {
    min-width: var(--v-unit-1);
    min-height: var(--v-unit-1);
    width: var(--v-unit-1);
    height: var(--v-unit-1);
  }
</style>
