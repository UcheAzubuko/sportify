<template>
  <div class="auth-wrapper login-view">
    <div class="auth-wrapper__img"></div>
    <div class="auth-wrapper__form">
      <div>
        <div class="logo-box">
          <img src="@/assets/images/logo-icon.svg" class="logo-icon" alt="logo icon" />
        </div>
        <div>
          <h3>Login</h3>
          <form class="auth-form-wrapper">
            <div class="field-wrapper">
              <base-input
                class="field"
                v-model="user.email"
                type="email"
                placeholder="Email"
                spellcheck="false"
                autocomplete="off"
                maxlength="999"
              />

              <base-input
                class="field"
                v-model="user.password"
                type="password"
                placeholder="Password"
                spellcheck="false"
                autocomplete="off"
                maxlength="999"
              />
            </div>
            <div class="forgot-password">
              <router-link to="/auth/forgot-password"
                >Forgot password?</router-link
              >
            </div>

            <transition name="fade">
              <div v-show="error" class="error">{{ errorMsg }}</div>
            </transition>

            <base-button
              @click.prevent="login"
              type="submit"
              buttonClass="-primary"
              >Login</base-button
            >

            <div class="register">
              <span
                >Don't have an account?
                <router-link to="/auth/register" class="register-link">
                  Register</router-link
                >
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export default {
  name: "Login",

  data() {
    return {
      user: {
        email: "",
        password: "",
      },
      error: null,
      errorMsg: "",
    };
  },

  methods: {
    async login() {
      try {
        if (this.user.email) {
          this.error = false;
          this.errorMsg = "";
          await firebase
            .auth()
            .signInWithEmailAndPassword(this.user.email, this.user.password);
          this.$router.push({ name: "Discover" });
          return;
        }
        this.error = true;
        this.errorMsg = "Please fill out the empty field(s)!";
        this.errorVanish();
        return;
      } catch (error) {
        this.error = true;

        if (error.code === "auth/wrong-password")
          this.errorMsg = "Wrong password.";

        if (error.code === "auth/invalid-email")
          this.errorMsg = "Please input a valid email address.";

        if (error.code === "auth/user-not-found")
          this.errorMsg =
            "There is no user record corresponding to this email. The user may have been deleted.";

        if (error.code === "auth/network-request-failed")
          this.errorMsg = "Please check your connection and try again.";

        this.errorVanish();
      }
    },

    errorVanish() {
      var that = this;
      setTimeout(() => {
        that.error = false;
      }, 3000);
    },
  },
};
</script>

<style lang="scss" scoped>
.auth-wrapper__img {
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
    url("../../assets/images/login.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}
</style>