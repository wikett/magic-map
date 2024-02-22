<template>
  <main>
    <div class="py-12 sm:py-12">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto text-justify">
          <h1
            class="text-3xl font-bold tracking-tight text-blue-500 sm:text-4xl"
          >
            Objetivos
          </h1>
          <p>
            ¡Bienvenidos, entusiastas de la fotografía y aspirantes a fotógrafos
            profesionales! En nuestra categoría
            <strong>"Objetivos"</strong> encontrarán una profusión de
            información importante que les ayudará a perfeccionar su arte. El
            <em>objetivo</em> es, literalmente y metafóricamente, el corazón de
            cada disparo, y entender cómo trabajar con él puede hacer una gran
            diferencia en sus habilidades fotográficas.
          </p>

          <p>
            Ya sea que estén buscando
            <strong
              >entender los fundamentos de los diferentes tipos de
              objetivos</strong
            >, necesiten consejos sobre
            <em>qué objetivo usar en qué situación</em>, o estén buscando
            reseñas de los <strong>últimos lanzamientos en el mercado</strong>,
            este es el lugar para ustedes. Aquí podrán explorar en un solo
            lugar, una variedad de temas que van desde técnicas, mantenimiento
            de objetivos, hasta equipos de gama alta y cómo afectan la calidad y
            el estilo de sus imágenes.
          </p>

          <p>
            Recordamos que la fotografía no se trata sólo de tener el mejor
            equipo, sino también de entender cómo usarlo eficazmente para
            capturar la <em>esencia</em> de una escena, una persona o un
            momento. Ese es el verdadero arte de la fotografía, y con los
            recursos y consejos ofrecidos aquí en nuestra categoría de
            <strong>Objetivos</strong>, cada uno de ustedes está un paso más
            cerca de dominarlo.
          </p>

          <p>
            Así que siéntanse libres de explorar y aprender más sobre su pasión.
            ¡Buena suerte en su viaje fotográfico!
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
const { data } = await useAsyncData("/blog/objetivos", () =>
  queryContent("/blog/objetivos").find()
);
</script>
