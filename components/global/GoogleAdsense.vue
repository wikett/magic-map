<template>
  <component :class="_class" :is="tag">
    <ins
      v-if="type == 'in-article'"
      class="adsbygoogle"
      style="display: block; text-align: center"
      data-ad-layout="in-article"
      data-ad-format="fluid"
      data-ad-client="ca-pub-5731349288066148"
      data-ad-slot="4197687694"
    ></ins>
    <ins
      v-if="type == 'multiplex'"
      class="adsbygoogle"
      style="display: block"
      data-ad-format="autorelaxed"
      data-ad-client="ca-pub-5731349288066148"
      data-ad-slot="2183319321"
    ></ins>
  </component>
</template>
<script setup>
const props = defineProps({
  _class: {
    type: Array,
  },
  tag: {
    type: String,
    default: "div",
  },
  type: {
    type: String,
    default: "in-article",
  },
});

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
