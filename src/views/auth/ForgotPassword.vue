<template>
  <div class="forgot-password">
    <base-modal
      v-if="modalActive"
      :modalMessage="modalMessage"
      v-on:close-modal="closeModal"
    />
    <base-spinner v-if="loading" />
    <div class="forgot-password-wrapper auth-wrapper">
      <div class="forgot-password__img"></div>
      <div class="forgot-password__form">
        <div>
          <div class="logo-box">
            <img src="@/assets/images/logo-icon.svg" class="logo-icon" alt="logo icon" />
          </div>
          <h3>Forgot your password?</h3>
          <p>
            Don't feel bad. Please enter your email address for Sportify, and we
            will help you reset it.
          </p>
          <form class="auth-form-wrapper">
            <div class="field-wrapper">
              <base-input
                class="field"
                v-model="email"
                type="email"
                placeholder="Email address"
                spellcheck="false"
                autocomplete="off"
                maxlength="999"
              />
            </div>

            <base-button
              @click.prevent="resetPassword"
              type="submit"
              buttonClass="-primary"
              >Reset</base-button
            >
          </form>
          <p><router-link to="/login">Back to login</router-link></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export default {
  name: "ForgotPassword",

  data() {
    return {
      email: "",
      modalActive: false,
      modalMessage: "",
      loading: null,
    };
  },

  methods: {
    closeModal() {
      this.modalActive = !this.modalActive;
      this.email = "";
    },

    async resetPassword() {
      try {
        this.loading = true;
        await firebase
          .auth()
          .sendPasswordResetEmail(this.email)
          .then(() => {
            this.modalMessage =
              "If your account exists, you will receive an email with link to reset your password.";
            this.loading = false;
            this.modalActive = true;
          });
      } catch (error) {
        if (error.code === "auth/invalid-email")
          this.modalMessage = "Please input a valid email address.";

        if (error.code === "auth/missing-email")
          this.modalMessage = "Please fill in the email field.";

        if (error.code === "auth/network-request-failed")
          this.modalMessage = "Please check your connection and try again.";

        this.loading = false;
        this.modalActive = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.forgot-password__img {
  background: -webkit-linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.05) 0%,
    rgba(44, 22, 208, 0.17) 25%
  );
  background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.05) 0%,
      rgba(44, 22, 208, 0.17) 25%
    ),
    url("../../assets/images/forgot.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
}
</style>