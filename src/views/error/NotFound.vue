<template>
  <div class="not-found">
    <img src="@/assets/images/404.jpg" alt="4040 page image">
    <h2>Oops! The page doesn't exist.</h2>
    <base-button buttonClass="-primary" @click="$router.push('/')">Go back home</base-button>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
}
</script>