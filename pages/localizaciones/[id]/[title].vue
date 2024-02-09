<template>
  <div>
    <p>route: {{ $route.params.id }}</p>

    <pre> {{ data }}</pre>
  </div>
</template>

<script setup>
const route = useRoute();
const { data, error } = await useFetch(
  `https://www.omdbapi.com/?apikey=8e3f600b&i=${route.params.id}`,
  {
    pick: ["Plot", "Title", "Poster"],
    key: `/localizaciones/${route.params.id}`,
  }
);
if (!data) {
  showError({
    statusCode: 404,
    statusMessage: "Page Not Found",
  });
}
useHead({
  title: data.value.Title,
  meta: [
    { name: "description", content: data.value.Plot },
    { property: "og:description", content: data.value.Plot },
    { property: "og:image", content: data.value.Poster },
    { name: "twitter:card", content: `summary_large_image` },
  ],
});
</script>
