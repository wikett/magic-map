<template>
  <div class="py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:text-center">
        <h2 class="text-base font-semibold leading-7 text-white-600">
          Todos nuestros artículos
        </h2>
        <p
          class="mt-2 text-3xl font-bold tracking-tight text-blue-200 sm:text-4xl"
        >
          El blog de Subexpuesta.com
        </p>
        <p class="mt-6 text-lg leading-8 text-blue-600">
          No solamente compartiremos con todos vosotros las localizaciones de
          fotograía nocturna, sino que también tendremos comparativas, el "cómo
          se hizo" de una fotografía, novedades y cualquier cosa que puedas
          imaginar. ¡Échale un vistazo!
        </p>
      </div>
      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <dl
          class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16"
        >
          <div
            v-for="feature in features"
            :key="feature.name"
            class="relative pl-16"
          >
            <NuxtLink :to="feature.category">
              <div>
                <dt class="text-base font-semibold leading-7 text-green-600">
                  <div
                    class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600"
                  >
                    <component
                      :is="feature.icon"
                      class="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {{ feature.name }}
                </dt>
                <dd class="mt-2 text-base leading-7 text-blue-200">
                  {{ feature.description }} <br />
                  <a
                    href="#"
                    class="text-sm font-semibold leading-6 text-pink-400"
                    >Ver artículos <span aria-hidden="true">→</span></a
                  >
                </dd>
              </div>
            </NuxtLink>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>
<script setup>
import info from "../data/info.json";
const route = useRoute();
import {
  ViewfinderCircleIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/vue/24/outline";

const features = [
  {
    name: "Objetivos",
    description:
      "Analizamos, comentamos y vemos en detalle todo tipo de objetivos para todos los tipos de cámara.",
    icon: ViewfinderCircleIcon,
    category: "/blog/objetivos",
  },
  {
    name: "Cómo se hizo",
    description:
      "Árticulos sobre cómo se hizo la fotografía. En este caso el autor de la fotografía se pasa por nuestro Blog para comentarnos cómo se hizo y sacar de ahí valiosos trucos 🙂",
    icon: QuestionMarkCircleIcon,
    category: "/blog/como-se-hizo",
  },
  {
    name: "Técnicas Fotográficas",
    description:
      "Aprende con nosotros todas las técnicas fotográficas que se te pasen por la cabeza. No solo de nocturnas vive el fotógrafo",
    icon: QuestionMarkCircleIcon,
    category: "/blog/tecnicas-fotograficas",
  },
];
useHead({
  title: "Blog de Subexpuesta.com",
  meta: [
    {
      hid: "description",
      name: "description",
      content:
        "Descubre nuestros artículos sobre fotografía nocturna, fotografía de móvil o cómo se hizo",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: `https://${info.domain}${route.path}`,
    },
  ],
});
</script>
