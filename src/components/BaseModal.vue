<template>
  <div class="modal">
    <div class="modal-content">
      <p>{{ modalMessage }}</p>
      <base-button @click="closeModal" buttonClass="-modal">Close</base-button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["modalMessage"],

  methods: {
    closeModal() {
      this.$emit("close-modal");
    },
  },
};
</script>