<template>
  <header class="desktop-nav">
    <div class="container desktop-nav-wrapper">
      <div class="logo-wrapper">
        <router-link to="/"><img src="@/assets/images/logo-default.svg" width="120px" alt="Sportify Logo" /></router-link>
      </div>
      <nav class="nav-links">
        <ul>
          <li>
            <router-link to="/discover"
              ><i class="material-icons"> near_me </i>Discover</router-link
            >
          </li>
          <li>
            <router-link to="/buddies"
              ><i class="material-icons"> group </i>Buddies</router-link
            >
          </li>
          <li>
            <router-link to="/profile"
              ><i class="material-icons"> person </i>Profile</router-link
            >
          </li>
          <li>
            <router-link to="/settings"
              ><i class="material-icons"> settings </i>Settings</router-link
            >
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "DesktopNav",
};
</script>