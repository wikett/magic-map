<template>
  <div class="py-12">
    <div class="mx-auto max-w-7xl px-6 pb-[700px] lg:px-8">
      <div class="mx-auto max-w-full lg:text-center absolute]">
        <h1
          class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
        >
          Mapa de localizaciones para fotografia nocturna
        </h1>
        <p class="mt-6 text-lg leading-8 text-gray-600">
          Más de 1000 localizaciones para fotografía tanto nocturna, de paisaje,
          lightpainting o de larga duración. Comparte con nuestra comunidad
          estos magníficos lugares.
        </p>
        <div class="relative top-0 left-0">
          <MapboxMap
            map-id="map2"
            style="top: 20px; width: 100%; height: 700px"
            :options="{
              style: '', // style URL
              center: [-2.4495376, 40.5036935], // starting position
              zoom: 4.23, // starting zoom
            }"
          />
        </div>
      </div>
      <div class="mx-auto mt-[780px] max-w-full">
        <dl
          class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16"
        >
          <div
            v-for="feature in features"
            :key="feature.name"
            class="relative pl-16"
          >
            <dt class="text-base font-semibold leading-7 text-gray-900">
              <div
                class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-400"
              >
                <component
                  :is="feature.icon"
                  class="h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </div>
              {{ feature.name }}
            </dt>
            <dd class="mt-2 text-base leading-7 text-gray-600">
              {{ feature.description }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  ShareIcon,
  MapIcon,
  DocumentDuplicateIcon,
  RssIcon,
} from "@heroicons/vue/24/outline";

const features = [
  {
    name: "Comparte con la comunidad",
    description:
      "Una comunidad para aprender sobre fotografía y en concreto en la fotografía nocturna.",
    icon: ShareIcon,
  },
  {
    name: "Explora nuevas localizaciones",
    description:
      "Si vas de viaje y quieres fotografiar las localizaciones típicas del lugar, aquí tienes el mapa de localizaciones para fotografía nocturna que no te puedes perder.",
    icon: MapIcon,
  },
  {
    name: "Nuestras categorías",
    description:
      "Explora nuestras localizaciones fotográficas en estas categorías: Paisaje Nocturno, Nocturna Urbana, Lightpainting, Nocturna Monumentos, Nocturna Ruinas, Nocturna Vehículo-Maquinaria, Nocturna Minería, Atardecer-Amanecer, Larga Exposición Diurna, Dron",
    icon: DocumentDuplicateIcon,
  },
  {
    name: "Comunidad siempre viva",
    description:
      "Únete a nuestra comunidad de Telegram dando apoyo a nuevos fotógrafos y compartiendo momentos cada día.",
    icon: RssIcon,
  },
];
</script>
