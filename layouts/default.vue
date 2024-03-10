<template>
  <div class="bg-gray-800">
    <TheHeader />
    <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
      <NuxtPage />
    </div>
    <TheFooter />
  </div>
</template>
<script setup>
// useHead({
//   script: {
//     src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5731349288066148",
//     async: true,
//     crossorigin: "anonymous",
//   },
// });
onMounted(() => {
  nextTick(() => {
    try {
      // this is required for each ad slot (calling this once will only load 1 ad)
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (error) {
      console.error(error);
    }
  });
});
</script>
