<template>
  <article
    class="v-banner"
    :class="{
      'v-banner--overlay': overlay,
      'v-banner--gradient': hasGradient
    }"
    :style="style"
  >
    <div class="v-banner__image">
      <slot name="image" />
    </div>

    <slot />
  </article>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import type { VBannerProps } from './types'

  const props = withDefaults(defineProps<VBannerProps>(), {
    overlay: true
  })

  const hasGradient = computed(() => !!props.overlayDeg || props.overlayDeg === 0)

  const style = computed(() => ({
    '--v-banner-gradient-deg': `${props.overlayDeg}deg`
  }))
</script>

<style>
  .v-banner {
    --v-banner-overlay-color: color-mix(in hsl, var(--v-color-overlay), transparent 50%);

    display: grid;
    grid-template-columns: 1fr;
  }

  .v-banner--overlay {
    &::before {
      content: '';
      display: block;
      background: var(--v-banner-overlay-color);
      z-index: 2;
      pointer-events: none;
    }
  }

  .v-banner--gradient {
    --v-banner-overlay-color: linear-gradient(
      var(--v-banner-gradient-deg),
      var(--v-color-overlay) 10%,
      transparent 90%
    );
  }

  .v-banner::before,
  .v-banner__image {
    grid-row: 1/1;
    grid-column: 1/1;
    position: relative;
  }

  .v-banner__image {
    z-index: 1;

    & > .v-image {
      height: 100%;
      width: 100%;
    }
  }
</style>
