<template>
  <nav class="mobile-nav">
    <div class="container">
      <div class="mobile-nav-links">
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
      </div>
    </div>
  </nav>
</template>


<script>
export default {
  name: "MobileNav",
};
</script>