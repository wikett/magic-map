<template>
  <div>
    <NuxtImg
      :src="imageurl"
      :alt="title"
      width="1024"
      height="1024"
      format="webp"
      class="mt-8 rounded-xl shadow-2xl ring-1 ring-gray-900/10"
    />
    <div class="relative" aria-hidden="true">
      <div class="absolute -inset-x-20 bottom-0" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  imageurl: {
    type: String,
  },
  title: {
    type: String,
  },
});
</script>
