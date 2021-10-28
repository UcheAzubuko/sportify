<template>
  <div>
    <base-modal
      v-if="modalActive"
      :modalMessage="modalMessage"
      v-on:close-modal="closeModal"
    />
    <div class="settings container">
      <div class="settings-wrapper">
        <h2>Settings</h2>
        <p>Make changes to your account, user.</p>

        <div class="settings-fields">
          <div class="settings-field">
            <span>Update Email</span>
            <base-input
              class="field"
              v-model="email"
              type="email"
              spellcheck="false"
              autocomplete="off"
              maxlength="999"
            />
          </div>
          <div class="settings-field">
            <span>Update Username</span>
            <base-input
              class="field"
              v-model="username"
              type="username"
              spellcheck="false"
              autocomplete="off"
              maxlength="999"
            />
          </div>
          <div class="settings-field">
            <span>Update password</span>
            <base-input
              class="field"
              v-model="password"
              type="password"
              spellcheck="false"
              autocomplete="off"
              maxlength="999"
            />
          </div>

          <transition name="fade">
            <div v-show="error" class="error">{{ errorMsg }}</div>
          </transition>

          <div class="settings-field">
            <base-button buttonClass="-primary" @click="saveChanges">Save changes</base-button>
          </div>

          <div class="settings-field" @click="logout">
            <div class="logout">
              <span>Logout</span> <i class="material-icons"> logout </i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export default {
  name: "Settings",

  data() {
    return {
      modalMessage: "",
      modalActive: false,
      password: "",
      email: "",
      error: null,
      errorMsg: "",
    };
  },

  methods: {
    logout() {
      firebase.auth().signOut();
      window.location.reload();
    },

    closeModal() {
      this.modalActive = !this.modalActive;
    },

    async saveChanges() {
      try {
        if (this.username !== "" && this.password !== "" && this.email !== "") {
          this.error = false;
          this.errorMsg = "";
          const auth = firebase.auth().currentUser;
          this.$store.dispatch("updateUserSettings");
          await auth.updateEmail(this.email);
          console.log("Email updated!!");
          await auth.updatePassword(this.password);
          this.error = true;
          this.errorMsg = "Please fill out the empty field(s)!";
          this.errorVanish();
          return;
        }
      } catch (err) {
        console.log(err);
      }
    },

    errorVanish() {
      var that = this;
      setTimeout(() => {
        that.error = false;
      }, 3000);
    },
  },

  computed: {
    username: {
      get() {
        return this.$store.state.profileUsername;
      },
      set(payload) {
        this.$store.commit("changeUsername", payload);
      },
    },
  },
};
</script>