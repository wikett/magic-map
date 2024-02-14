<template>
  <h1>blog</h1>
</template>
<script setup>
import info from "../content/info.json";
const route = useRoute();
useHead({
  title: "Blog de Subexpuesta.com",
  meta: [
    {
      hid: "description",
      name: "description",
      content:
        "Descubre nuestros artículos sobre fotografía nocturna, fotografía de móvil o cómo se hizo",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: `https://${info.domain}${route.path}`,
    },
  ],
});
</script>
