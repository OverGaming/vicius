<template>
  <div class="v-avatar" :class="{ [`v-avatar--${size}`]: size }">
    <VImage class="v-avatar__img" :src="src" :alt="alt" aspect-ratio="1">
      <template #error>
        <VInitials v-if="label" :name="label" />
        <VIcon v-else name="Person" :size="size" />
      </template>
    </VImage>
  </div>
</template>

<script setup lang="ts">
  import VIcon from '../VIcon/VIcon.vue'
  import VImage from '../VImage/VImage.vue'
  import VInitials from '../VInitials/VInitials.vue'
  import type { VAvatarProps } from './types'

  withDefaults(defineProps<VAvatarProps>(), {
    alt: 'Avatar',
    size: 'bs'
  })
</script>

<style>
  .v-avatar {
    display: flex;
    justify-content: center;
    align-items: center;
    aspect-ratio: 1;
    background-color: var(--v-color-surface-mod);
    font-size: var(--v-avatar-font-size);
    width: var(--v-avatar-size, var(--v-unit-11));
    height: var(--v-avatar-size, var(--v-unit-11));
    border-radius: var(--v-radius-pill);
  }

  .v-avatar__img {
    --v-image-border-radius: var(--v-radius-pill);
  }

  .v-avatar--xs {
    --v-avatar-size: var(--v-unit-9);
    --v-avatar-font-size: var(--v-font-size-b3);
  }

  .v-avatar--sm {
    --v-avatar-size: var(--v-unit-10);
    --v-avatar-font-size: var(--v-font-size-b2);
  }

  .v-avatar--bs {
    --v-avatar-size: var(--v-unit-11);
  }

  .v-avatar--md {
    --v-avatar-size: var(--v-unit-12);
  }

  .v-avatar--lg {
    --v-avatar-size: var(--v-unit-13);
  }

  .v-avatar--xl {
    --v-avatar-size: var(--v-unit-14);
    --v-avatar-font-size: var(--v-font-size-b1);
  }
</style>
