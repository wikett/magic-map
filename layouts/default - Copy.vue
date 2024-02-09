<script setup>
const user = useUser();
definePageMeta({
  layout: "plain",
});
</script>
<template>
  <nav>
    <NuxtLink to="/">Home</NuxtLink> |
    <NuxtLink to="/mapa-localizaciones">Mapa localizaciones</NuxtLink>
    <NuxtLink v-if="!user.isLoggedIn" to="/login"> | Login</NuxtLink>
    <a v-else href="#" @click.prevent="user.logout"> | Logout</a>
  </nav>
  <slot></slot>
</template>
