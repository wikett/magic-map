<template>
  <main>
    <div class="py-12 sm:py-12">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto text-justify">
          <h1
            class="text-3xl font-bold tracking-tight text-blue-500 sm:text-4xl"
          >
            Cómo se hizo
          </h1>
          <p>
            ¡Bienvenidos, entusiastas de la fotografía y aspirantes a fotógrafos
            profesionales! En nuestra categoría
            <strong>"Cómo se hizo"</strong> queremos invitar a nuestros
            compañeros a que nos expliquen cómo consiguieron realizar esa
            fotografía tan deseada.
          </p>

          <p>
            Muchas veces en fotografía nocturna, lightpainting o LED hay muchos
            trucos que hasta que no te lo explican por primera vez, es casi
            imposible que des con ellos.
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
const { data } = await useAsyncData("/blog/como-se-hizo", () =>
  queryContent("/blog/como-se-hizo").find()
);
</script>
