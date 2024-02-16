<template>
  <div v-if="imageurl.length > 0">
    <NuxtImg
      :src="imageurl"
      :alt="title"
      width="312"
      height="234"
      format="webp"
      class="w-full rounded-2xl mt-6"
    />
    <figcaption class="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
      <InformationCircleIcon
        class="mt-0.5 h-5 w-5 flex-none text-gray-300"
        aria-hidden="true"
      />
      {{ title }}
    </figcaption>
  </div>
</template>
<script setup>
import { InformationCircleIcon } from "@heroicons/vue/20/solid";
defineProps({
  imageurl: {
    type: String,
  },
  title: {
    type: String,
  },
});
</script>
