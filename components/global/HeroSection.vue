<template>
  <div class="">
    <div class="relative">
      <div class="mx-auto max-w-7xl">
        <div class="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
          <svg
            class="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-gray-800 lg:block"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="0,0 90,0 50,100 0,100" />
          </svg>

          <div class="relative px-6 py-24 sm:py-24 lg:px-8 lg:py-24 lg:pr-0">
            <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
              <div class="hidden sm:mb-10 sm:flex">
                <div
                  class="relative rounded-full px-3 py-1 text-sm leading-6 text-blue-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
                >
                  Con cualquier duda o consulta, utiliza nuestro formulario de
                  <a
                    href="/contacto"
                    class="whitespace-nowrap font-semibold text-blue-600"
                    ><span
                      class="absolute inset-0"
                      aria-hidden="true"
                    />contacto <span aria-hidden="true">&rarr;</span></a
                  >
                </div>
              </div>
              <h1 class="text-4xl font-bold tracking-tight sm:text-6xl">
                {{ data.author }}
              </h1>
              <p>
                ¡Bienvenidos a un nuevo viaje visual bajo la luna y las
                estrellas! Mi nombre es <strong>Quique Aparicio</strong> y tengo
                el placer de presentarles mi último emprendimiento: un blog
                completamente dedicado al mágico y a veces misterioso, mundo de
                la fotografía nocturna.
              </p>
              <p>
                Cae la noche y mientras la mayoría de las personas se preparan
                para descansar, los amantes de la fotografía nocturna abrimos
                nuestros ojos y encendemos <strong>nuestras cámaras</strong>. La
                oscuridad del cielo se convierte en nuestro lienzo y cada fuente
                de luz, ya sea una lámpara de la calle o el brillo de la vía
                láctea, se convierte en nuestra paleta de colores.
              </p>
              <p>
                Ya seas un experto fotógrafo buscando nuevas ideas y técnicas,
                un principiante en busca de inspiración y guía, o simplemente un
                entusiasta interesado en el arte y la belleza de la fotografía
                nocturna, este blog es para ti. Espero que disfruten de esta
                aventura tanto como yo disfruto cada noche bajo las estrellas y
                los destellos de luz, capturando el encanto inexplorado de la
                noche. Juntos descubriremos que, incluso en la más profunda
                oscuridad, siempre hay una imagen esperando a ser capturada.
              </p>
              <p>
                ¡Así que prepara tu cámara y únete a mí en este viaje nocturno!
              </p>

              <div class="mt-10 flex items-center gap-x-6">
                <div class="flex space-x-6">
                  <a
                    v-for="item in navigation.social"
                    :key="item.name"
                    :href="item.href"
                    class="text-blue-500 hover:text-gray-400"
                  >
                    <span class="sr-only">{{ item.name }}</span>
                    <component
                      :is="item.icon"
                      class="h-6 w-6"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-gray-800 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <!-- <img
          class="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
          src="/img/autor.webp"
          :alt="data.author"
        /> -->
        <NuxtImg
          provider="cloudinary"
          src="subexpuesta/quique_aparicio.jpg"
          format="webp"
          class="object-cover lg:aspect-auto lg:h-full lg:w-full"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import data from "../../data/info.json";

let navigation = {
  social: [
    {
      name: "Facebook",
      href: "https://www.facebook.com/qaparicio",
      icon: defineComponent({
        render: () =>
          h("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
            h("path", {
              "fill-rule": "evenodd",
              d: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
              "clip-rule": "evenodd",
            }),
          ]),
      }),
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/quique_aparicio/",
      icon: defineComponent({
        render: () =>
          h("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
            h("path", {
              "fill-rule": "evenodd",
              d: "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z",
              "clip-rule": "evenodd",
            }),
          ]),
      }),
    },
    {
      name: "Twitter",
      href: "https://twitter.com/eac9",
      icon: defineComponent({
        render: () =>
          h("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
            h("path", {
              d: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84",
            }),
          ]),
      }),
    },
  ],
};
</script>
