<template>
  <div>
    <input v-bind="$attrs" :value="value" @input="updateValue" />
  </div>
</template>

<script>
export default {
  inheritAttrs: false,

  props: {
    value: {
      type: [String, Number],
    },
  },

  methods: {
    updateValue(e) {
      this.$emit("input", e.target.value);
    },
  },
};
</script>