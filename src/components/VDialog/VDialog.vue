<template>
  <Teleport to="body">
    <dialog
      v-if="isOpen"
      v-bind="attrs"
      ref="dialog"
      class="v-dialog"
      @close="close"
      @click="clickOutsideHandler"
    >
      <div class="v-dialog__inner">
        <slot v-if="showClose" name="close">
          <VDialogClose />
        </slot>
        <slot v-bind="{ isOpen, close }" />
      </div>
    </dialog>
  </Teleport>
</template>

<script setup lang="ts">
  import { watchEffect, ref, useAttrs, provide } from 'vue'
  import type { VDialogProps } from './types'
  import { VDialogKey } from './keys'
  import VDialogClose from './VDialogClose.vue'

  defineOptions({
    inheritAttrs: false
  })

  withDefaults(defineProps<VDialogProps>(), {
    showClose: true
  })

  const isOpen = defineModel({ type: Boolean, default: false })
  const attrs = useAttrs()
  const dialog = ref<HTMLDialogElement | null>(null)

  const close = () => {
    isOpen.value = false
  }

  const clickOutsideHandler = (event: MouseEvent) => {
    if (event.target === dialog.value) {
      close()
    }
  }

  watchEffect(() => {
    if (dialog.value) {
      if (isOpen.value) {
        dialog.value.showModal()
      } else {
        dialog.value.close()
      }
    }
  })

  provide(VDialogKey, {
    isOpen,
    close
  })
</script>

<style>
  .v-dialog {
    --v-dialog-background-color: var(--v-color-surface);
    --v-dialog-box-shadow: var(--v-elevation-high);
    --v-dialog-padding: var(--v-unit-6);
    --v-dialog-border-radius: var(--v-radius-sm);
    --v-dialog-width: var(--v-container-tn);
    --v-dialog-backdrop-color: var(--v-color-backdrop);

    display: flex;
    flex-direction: column;
    background-color: var(--v-dialog-background-color);
    box-shadow: var(--v-dialog-box-shadow);
    color: inherit;
    container-type: inline-size;
    outline: none;
    padding: 0;
    border: 0;

    @media (--v-bp-sm-down) {
      max-width: 100vw;
      max-height: 100vh;
      height: 100dvh;
      width: 100dvw;
    }

    @media (--v-bp-sm) {
      max-width: calc(100dvw - (var(--v-dialog-padding) * 2));
      max-height: calc(100dvh - (var(--v-dialog-padding) * 2));
      width: min(var(--v-dialog-width), 100%);
      border-radius: var(--v-dialog-border-radius);
    }

    &::backdrop {
      background: var(--v-dialog-backdrop-color);
    }
  }

  .v-dialog__inner {
    overflow-y: auto;
    overscroll-behavior: contain;
    flex-grow: 1;
    scroll-timeline: --v-dialog-scroll-timeline block;
    min-height: calc((var(--v-dialog-padding) * 2) + var(--v-unit-8));
  }

  .v-dialog__content {
    position: relative;
    z-index: 1;
  }

  body:has(.v-dialog) {
    overflow-y: hidden;
  }
</style>
