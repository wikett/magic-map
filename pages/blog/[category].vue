<template>
  <main>
    <div class="py-12 sm:py-12">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto text-justify">
          <h1
            class="text-3xl font-bold tracking-tight text-blue-500 sm:text-4xl"
          >
            {{ currentCategory.name }}
          </h1>
          <p>
            {{ currentCategory.description }}
          </p>
        </div>
        <div
          class="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          <ThumbArticle
            v-for="(post, index) in data"
            :key="index"
            :post="post"
          />
        </div>
      </div>
    </div>
  </main>
</template>
<script setup>
import info from "../data/info.json";
const route = useRoute();
const currentCategory = info.blog.find(
  (item) => item.category === "/blog/" + route.params.category
);

const { data } = await useAsyncData("/blog/" + route.params.category, () =>
  queryContent("/blog/" + route.params.category).find()
);
</script>
