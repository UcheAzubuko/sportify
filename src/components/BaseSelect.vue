<template>
  <div>
    <select v-bind="$attrs" :value="value" @input="updateValue" required>
      <option v-for="option in options" :key="option">
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,

  props: {
    options: {
      type: Array,
      required: true,
    },
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