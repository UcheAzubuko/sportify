<template>
  <div class="base-button">
    <button
      v-on="$listeners"
      v-bind="$attrs"
      class="button"
      :class="buttonClass"
    >
      <slot />
    </button>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,

  props: {
    buttonClass: {
      type: String,
    },
  },
};
</script>