<template>
  <div class="verify-email container">
    <img src="@/assets/images/verify-email.gif" alt="verify email image" />
    <h2>Welcome to Sportify</h2>
    <p>
      We sent a verification link to the email you provided us with, kindly
      verify your account by clicking the link.
    </p>
    <base-button buttonClass="-primary" @click="$router.replace('/')">Continue</base-button>
  </div>
</template>

<script>
export default {
  name: "VerifyEmail",
};
</script>