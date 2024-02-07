<script setup>
const user = useUser();
definePageMeta({
  layout: "plain",
});

function login() {
  user.isLoggedIn = true;
  useRouter().push("/");
}
</script>
<template>
  <form @submit.prevent="login">
    <h1>Username</h1>
    <label for="username">
      <input type="text" />
    </label>
    <label for="password">
      <input type="password" />
    </label>
    <button>Login</button>
  </form>
</template>
