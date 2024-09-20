<template>
  <div class="v-dialog-close" :class="{ 'v-dialog-close--static': static }">
    <VButton size="xs" @click="close">
      <VIcon name="Close" />
    </VButton>
  </div>
</template>

<script setup lang="ts">
  import { inject, ref } from 'vue'
  import VButton from '../VButton/VButton.vue'
  import { VDialogKey } from './keys'
  import type { VDialogCloseProps } from './types'
  import VIcon from '../VIcon/VIcon.vue'

  withDefaults(defineProps<VDialogCloseProps>(), {
    static: false
  })

  const { close } = inject(VDialogKey, {
    isOpen: ref(false),
    close: () => {}
  })
</script>

<style scoped>
  .v-dialog-close {
    &:not(.v-dialog-close--static) {
      background-color: var(--v-dialog-background-color);
      position: absolute;
      inset-block-start: var(--v-dialog-padding);
      inset-inline-end: var(--v-dialog-padding);
      z-index: 2;

      @media (--v-bp-sm-down) {
        box-shadow: var(--v-elevation);
      }
    }

    @media (--v-bp-sm-down) {
      & > * {
        border-radius: var(--v-dialog-border-radius);
      }
    }
  }
</style>
