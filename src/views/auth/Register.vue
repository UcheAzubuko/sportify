<template>
  <div class="auth-wrapper register-view">
    <div class="auth-wrapper__form">
      <div>
        <div class="logo-box">
          <img src="@/assets/images/logo-icon.svg" class="logo-icon" alt="logo icon" />
        </div>
        <div>
          <h3>Register</h3>
          <form class="auth-form-wrapper">
            <div class="field-wrapper">
              <base-input
                class="field"
                v-model="user.firstname"
                type="text"
                placeholder="Firstname"
                spellcheck="false"
                autocomplete="off"
                maxlength="999"
              />

              <base-input
                class="field"
                v-model="user.lastname"
                type="text"
                placeholder="Lastname"
                spellcheck="false"
                autocomplete="off"
                maxlength="999"
              />

              <base-input
                class="field"
                v-model="user.username"
                type="text"
                placeholder="Username"
                spellcheck="false"
                autocomplete="off"
                maxlength="999"
              />

              <base-input
                class="field"
                v-model="user.phone"
                type="tel"
                placeholder="Phone number"
                spellcheck="false"
                autocomplete="off"
                maxlength="999"
              />

              <div class="form-interest">
                <span v-if="!user.interest" class="interest-placeholder"
                  >Select an interest</span
                >
                <base-select :options="interests" v-model="user.interest" />
              </div>

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

            <div class="register">
              <span
                >Already have an account?
                <router-link to="/auth/login" class="register-link">
                  Login</router-link
                >
              </span>
            </div>

            <transition name="fade">
              <div v-show="error" class="error">{{ errorMsg }}</div>
            </transition>

            <base-button
              type="submit"
              buttonClass="-primary"
              @click.prevent="register"
              >Register</base-button
            >
          </form>
        </div>
      </div>
    </div>
    <div class="auth-wrapper__img"></div>
  </div>
</template>

<script>
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import db from "@/firebase/FirebaseInit";

export default {
  name: "Register",

  data() {
    return {
      interests: this.$store.state.interests,
      user: {
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        interest: "",
        username: "",
        password: "",
      },
      error: null,
      errorMsg: "",
    };
  },

  methods: {
    async register() {
      try {
        if (
          this.user.firstname !== "" &&
          this.user.lastname !== "" &&
          this.user.email !== "" &&
          this.user.phone !== "" &&
          this.user.interest !== "" &&
          this.user.username !== "" &&
          this.user.password !== ""
        ) {
          this.error = false;
          this.errorMsg = "";
          const fb = await firebase.auth();
          const createUser = await fb.createUserWithEmailAndPassword(
            this.user.email,
            this.user.password
          );
          const result = await createUser;
          const database = db.collection("users").doc(result.user.uid);
          await database.set({
            firstname: this.user.firstname,
            lastname: this.user.lastname,
            email: this.user.email,
            username: this.user.username,
            phone: this.user.phone,
            interest: this.user.interest,
          });
          this.$router.push({ name: "VerifyEmail" });
          return;
        }
        this.error = true;
        this.errorMsg = "Please fill out the empty field(s)!";
        this.errorVanish();
        return;
      } catch (error) {
        this.error = true;

        if (error.code === "auth/invalid-email")
          this.errorMsg = "Please input a valid email address.";

        if (error.code === "auth/email-already-in-use")
          this.errorMsg = "That email address is already in use.";

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
    url("../../assets/images/reg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
