<template>
  <router-view />
</template>

<script>
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export default {
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      this.$store.commit("updateUser", user);
      if (user) {
        this.$store.dispatch("getCurrentUser");
        // console.log(this.$store.state.profileEmail);
      }
    });
  },
};
</script>

<style lang="scss">
@import "./assets/scss/app.scss";
</style>