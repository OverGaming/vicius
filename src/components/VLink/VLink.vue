<template>
  <VText v-bind="props" :as="htmlTag" :href="href" class="v-link">
    <slot />
  </VText>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import VText from '../VText/VText.vue'
  import type { VLinkProps } from './types'

  const props = withDefaults(defineProps<VLinkProps>(), {
    as: 'button'
  })

  const htmlTag = computed(() => (props.href ? 'a' : props.as))
</script>

<style>
  .v-link {
    &:is(a, button) {
      @media (hover) {
        &:hover,
        &:focus,
        &:active {
          text-decoration: underline;
        }
      }
    }
  }
</style>
