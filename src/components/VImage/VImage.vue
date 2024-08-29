<template>
  <component
    :is="htmlTag"
    class="v-image"
    :class="{
      'v-image--aspect-ratio': aspectRatio !== 'auto',
      'v-image--error': hasError && slots.error,
      'v-image--rounded': rounded,
      'v-image--circle': circle
    }"
  >
    <slot v-if="hasError && slots.fallback" name="fallback" />
    <slot v-else-if="hasError && slots.error" name="error" />
    <template v-else>
      <slot />
      <img
        :src="src"
        :alt="alt"
        :loading="loading"
        :srcset="srcset"
        :sizes="sizes"
        @error="onError"
      />
    </template>
  </component>
</template>

<script setup lang="ts">
  import { watchEffect, ref, computed, useSlots } from 'vue'
  import type { VImageProps } from './types'

  const props = withDefaults(defineProps<VImageProps>(), {
    aspectRatio: 'auto',
    alt: '',
    loading: 'eager',
    fit: 'cover',
    position: 'center',
    rounded: false,
    circle: false
  })

  const slots = useSlots()
  const hasError = ref(false)
  const htmlTag = computed(() => (hasError.value || !slots.default ? 'div' : 'picture'))

  const onError = () => {
    hasError.value = true
  }

  watchEffect(() => {
    hasError.value = !props.src
  })
</script>

<style>
  .v-image {
    display: flex;
    flex-direction: column;

    &:not(.v-image--error) {
      aspect-ratio: var(--v-image-aspect-ratio, v-bind(aspectRatio));
      border-radius: var(--v-image-border-radius, 0);
      background-color: var(--v-color-skeleton);
    }

    & img {
      object-fit: var(--v-image-object-fit, v-bind(fit));
      object-position: var(--v-image-object-position, v-bind(position));
      border-radius: inherit;
      aspect-ratio: inherit;
      height: 100%;
      width: 100%;
    }
  }

  .v-image--rounded {
    --v-image-border-radius: var(--v-radius-sm);
  }

  .v-image--circle {
    --v-image-border-radius: var(--v-radius-pill);
  }
</style>
