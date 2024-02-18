<template>
  <main>
    <div class="py-12 sm:py-12">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto text-justify">
          <h1
            class="text-3xl font-bold tracking-tight text-blue-500 sm:text-4xl"
          >
            Técnicas fotográficas
          </h1>
          <p>
            Ya sabemos que la fotografía no se trata sólo de apuntar y disparar.
            De hecho, es un <strong>arte</strong> que requiere mucha técnica y
            habilidad. A lo largo de los años, los profesionales y aficionados
            de la fotografía han desarrollado numerosas técnicas que nos ayudan
            a exprimir nuestra visión única. Podemos pensar en ellas como las
            <em>herramientas</em> de nuestro kit creativo.
          </p>

          <p>
            Por ejemplo, tenemos la regla de los tercios, una técnica simple
            pero efectiva para componer nuestras imágenes. Esta regla nos ayuda
            a posicionar las partes importantes de nuestra foto en ciertos
            puntos para lograr un
            <strong>efecto más atractivo y equilibrado</strong>.
          </p>

          <p>
            Otra técnica que seguro conoces es la profundidad de campo, que nos
            permite jugar con lo que está nítido y lo que queda desenfocado en
            nuestra imagen. Esto puede agregar un toque profesional y estético a
            nuestras fotos, y es especialmente útil en <em>retratos</em> y
            <em>fotografía macro</em>.
          </p>

          <p>
            ¡Y no olvidemos las técnicas de iluminación! Cómo y desde donde
            iluminas tu objeto puede marcar una gran diferencia en tu foto.
            Aprender a usar la <strong>luz natural</strong> y
            <strong>artificial</strong> a tu favor es una habilidad esencial
            para cualquier fotógrafo.
          </p>

          <p>
            Sin embargo, recuerda que las reglas estaban hechas para ser rotas
            por lo que no tengas miedo a experimentar y probar cosas nuevas.
            Aunque estas técnicas fotográficas pueden ser un gran punto de
            partida, lo más importante es tu <strong>vision</strong> y
            <strong>creatividad</strong>. Eso es lo que hace las imágenes
            verdaderamente memorables.
          </p>

          <p>
            Por lo tanto, amigos, sigan disparando, sigan explorando y, sobre
            todo, ¡sigan divirtiéndose! No hay nada más gratificante que ver el
            mundo a través de tu lente y capturar esos <em>momentos únicos</em>.
          </p>

          <p>
            ¿Cuáles son las técnicas fotográficas que más te gustan y por qué?
            ¿Cómo las usas en tus imágenes? ¡Nos encantaría que nos dejaras tus
            comentarios! Nos encanta aprender de esta grandiosa comunidad y
            compartir experiencias.
          </p>

          <p>¡Hasta la próxima, <strong>genios de la cámara</strong>!</p>
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
const { data } = await useAsyncData("/blog/tecnicas-fotograficas", () =>
  queryContent("/blog/tecnicas-fotograficas").find()
);
</script>
