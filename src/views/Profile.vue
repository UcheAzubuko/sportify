<template>
  <div class="profile container">
    <div class="cover-page">
      <div class="avatar-container">
        <h3>{{ initials }}</h3>
      </div>
      <div class="name">
        <span>{{ firstName + " " + lastName }}</span>
        <span>@{{ username }}</span>
      </div>
    </div>

    <div class="profile-details">
      <div class="profile-detail">
        <span>Phone number</span>
        <div class="profile-detail-box">
          <span>{{ phone }}</span>
        </div>
      </div>
      <div class="profile-detail">
        <span>Email address</span>
        <div class="profile-detail-box">
          <span>{{ email }}</span>
        </div>
      </div>
      <div class="profile-detail">
        <span>My interest</span>
        <div class="profile-detail-box">
          <span>{{ interest }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",

  computed: {
    initials() {
      return this.$store.state.profileInitials;
    },

    username() {
      return this.$store.state.profileUsername;
    },

    firstName() {
      return this.$store.state.profileFirstName;
    },

    lastName() {
      return this.$store.state.profileLastName;
    },

    email() {
      return this.$store.state.profileEmail;
    },

    phone() {
      return this.$store.state.profilePhone;
    },

    interest() {
      return this.$store.state.profileInterest;
    },
  },
};
</script>