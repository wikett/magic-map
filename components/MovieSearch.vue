<template>
  <form @submit.prevent="search">
    <input type="text" v-model="query" />
    <button>Search</button>
  </form>
  <ul>
    <li v-for="movie in movies" :key="movie.imdbID">
      <NuxtLink :to="`/localizaciones/${movie.imdbID}/${movie.Title}/`">
        <img :src="movie.Poster" :alt="movie.Title" />
      </NuxtLink>
    </li>
  </ul>
</template>

<script setup>
const query = ref("");
const movies = ref([]);
async function search() {
  const { Search } = await $fetch(
    `http://www.omdbapi.com/?apikey=8e3f600b&s=${query.value}`
  );
  movies.value = Search;
}
</script>
