<template>
  <!-- <div>
    <p>route: {{ $route.params.id }}</p>
    <p>route: {{ $route.params.title }}</p>
  </div> -->
  <main>
    <div class="mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <!-- Product -->
      <div
        class="lg:grid lg:grid-cols-7 lg:grid-rows-1 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16"
      >
        <!-- Product image -->
        <div class="lg:col-span-4 lg:row-end-1">
          <div
            class="aspect-h-3 aspect-w-4 overflow-hidden rounded-lg bg-gray-100"
          >
            <NuxtImg
              provider="cloudinary"
              :src="`/${loca.cloudinaryId}.jpg`"
              :alt="loca.titulo"
              width="592"
              height="423"
              format="webp"
              class="object-cover object-center"
            />
          </div>
          <div
            class="aspect-h-3 aspect-w-4 overflow-hidden rounded-lg mt-4 bg-gray-200"
          >
            <ClientOnly fallback-tag="div" fallback="Cargando localización...">
              <div style="height: 600px; width: 100%">
                <l-map
                  ref="map"
                  :zoom="15"
                  :center="[loca.latitud, loca.longitud]"
                  :useGlobalLeaflet="true"
                  min-zoom="3"
                  max-zoom="19"
                >
                  <l-tile-layer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    layer-type="base"
                    name="OpenStreetMap"
                    max-native-zoom="19"
                  ></l-tile-layer>
                  <l-marker :lat-lng="[loca.latitud, loca.longitud]">
                    <l-tooltip> {{ loca.titulo }}</l-tooltip>
                  </l-marker>
                </l-map>
              </div>
            </ClientOnly>
          </div>
        </div>

        <!-- Product details -->
        <div
          class="mx-auto mt-14 max-w-2xl sm:mt-16 lg:col-span-3 lg:row-span-2 lg:row-end-2 lg:mt-0 lg:max-w-none"
        >
          <div class="flex flex-col-reverse">
            <div class="mt-4">
              <h1
                class="text-2xl font-bold tracking-tight text-blue-500 text-opacity-80 sm:text-3xl"
              >
                {{ loca.titulo }}
              </h1>

              <p class="mt-2 text-sm text-blue-200">
                por <span class="text-pink-200">{{ loca.autor }}</span> (
                <time :datetime="loca.fechaToma.$date">{{
                  fechaFotografia
                }}</time
                >)
              </p>
            </div>
          </div>

          <p class="mt-6 text-blue-200">{{ loca.acceso }}</p>
          <hr class="my-6 border-blue-600 border-opacity-45" />
          <UMeter
            color="amber"
            :value="contaminacionLuminica"
            indicator
            label="Contaminación lumínica"
          />

          <UMeter
            color="rose"
            :value="peligrosidad"
            indicator
            label="Peligrosidad"
          />

          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
            <button
              type="button"
              class="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-8 py-3 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-50"
              @click="isOpen = true"
            >
              Ver en grande
            </button>
            <button
              type="button"
              class="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-50 px-8 py-3 text-base font-medium text-blue-700 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-50"
            >
              <a href="/mapa-localizaciones">Volver al mapa</a>
            </button>
          </div>

          <div class="mt-10 border-t border-blue-200 pt-10">
            <h3 class="text-sm font-medium text-blue-500">Coordenadas</h3>
            <div class="prose prose-sm mt-4 text-blue-200">
              <ul role="list">
                <li>Latitud: {{ loca.latitud }}</li>
                <li>Longitud: {{ loca.longitud }}</li>
                <li>
                  <a :href="getMapsUrl()" target="_blank" class="text-teal-600"
                    >Abrir en Google Maps</a
                  >
                </li>
              </ul>
            </div>
          </div>

          <div class="mt-10 border-t border-blue-200 pt-10">
            <h3 class="text-sm text-blue-500">Localización</h3>
            <div class="prose prose-sm mt-4 text-blue-200">
              <ul class="list-none">
                <li>{{ loca.ciudad }} ({{ loca.comunidad }})</li>
              </ul>
            </div>
          </div>

          <div class="mt-10 border-t border-blue-200 pt-10">
            <h3 class="text-sm font-medium text-blue-200">
              Comparte la localización con tus amigos:
            </h3>
            <div class="flex flex-row gap-2">
              <SocialShare
                v-for="network in [
                  'facebook',
                  'twitter',
                  'linkedin',
                  'whatsapp',
                  'telegram',
                ]"
                :key="network"
                :network="network"
                :styled="false"
                :label="false"
                class="p-4 rounded-none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <UModal v-model="isOpen" fullscreen class="z-[1002]">
      <UCard
        :ui="{
          base: 'h-full flex flex-col',
          rounded: '',
          divide: 'divide-y divide-gray-100 dark:divide-gray-800',
          body: {
            base: 'grow',
          },
        }"
      >
        <template #header>
          <div class="flex items-center justify-between">
            <h3
              class="text-base font-semibold leading-6 text-gray-900 dark:text-white"
            >
              {{ loca.titulo }}
            </h3>
            <UButton
              color="gray"
              variant="ghost"
              icon="i-heroicons-x-mark-20-solid"
              class="-my-1"
              @click="isOpen = false"
            />
          </div>
        </template>

        <div class="flex items-center justify-center max-h-screen">
          <NuxtImg
            provider="cloudinary"
            :src="`/${loca.cloudinaryId}.jpg`"
            :alt="loca.titulo"
            format="webp"
            class="object-cover object-center max-h-screen"
          />
        </div>
      </UCard>
    </UModal>
  </main>
</template>

<script setup>
import { format } from "date-fns";
const isOpen = ref(false);
const route = useRoute();
import { LMap, LTileLayer, LMarker, LTooltip } from "@vue-leaflet/vue-leaflet";
//  const mapRef = useMapboxRef("map1");

// useHead({
//   title: data.value.Title,
//   meta: [
//     { name: "description", content: data.value.Plot },
//     { property: "og:description", content: data.value.Plot },
//     { property: "og:image", content: data.value.Poster },
//     { name: "twitter:card", content: `summary_large_image` },
//   ],
// });

const loca = await queryContent(`/localizaciones/${route.params.id}`).findOne();

const fechaFotografia = format(loca.fechaToma.$date, "dd-MM-yyyy");
const contaminacionLuminica = Number.parseInt(loca.contaminacionLuminica) * 10;
const peligrosidad = Number.parseInt(loca.peligrosidad) * 10;

function getMapsUrl() {
  return `https://www.google.es/maps/@${loca.latitud},${loca.longitud},15z`;
}

const product = {
  name: "Application UI Icon Pack",
  version: { name: "1.0", date: "June 5, 2021", datetime: "2021-06-05" },
  price: "$220",
  description:
    "The Application UI Icon Pack comes with over 200 icons in 3 styles: outline, filled, and branded. This playful icon pack is tailored for complex application user interfaces with a friendly and legible look.",
  highlights: [
    "200+ SVG icons in 3 unique styles",
    "Compatible with Figma, Sketch, and Adobe XD",
    "Drawn on 24 x 24 pixel grid",
  ],
  imageSrc:
    "https://tailwindui.com/img/ecommerce-images/product-page-05-product-01.jpg",
  imageAlt:
    "Sample of 30 icons with friendly and fun details in outline, filled, and brand color styles.",
};
const reviews = {
  average: 4,
  featured: [
    {
      id: 1,
      rating: 5,
      content: `
        <p>This icon pack is just what I need for my latest project. There's an icon for just about anything I could ever need. Love the playful look!</p>
      `,
      date: "July 16, 2021",
      datetime: "2021-07-16",
      author: "Emily Selman",
      avatarSrc:
        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    },
    {
      id: 2,
      rating: 5,
      content: `
        <p>Blown away by how polished this icon pack is. Everything looks so consistent and each SVG is optimized out of the box so I can use it directly with confidence. It would take me several hours to create a single icon this good, so it's a steal at this price.</p>
      `,
      date: "July 12, 2021",
      datetime: "2021-07-12",
      author: "Hector Gibbons",
      avatarSrc:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    },
    // More reviews...
  ],
};
const faqs = [
  {
    question: "What format are these icons?",
    answer:
      "The icons are in SVG (Scalable Vector Graphic) format. They can be imported into your design tool of choice and used directly in code.",
  },
  {
    question: "Can I use the icons at different sizes?",
    answer:
      "Yes. The icons are drawn on a 24 x 24 pixel grid, but the icons can be scaled to different sizes as needed. We don't recommend going smaller than 20 x 20 or larger than 64 x 64 to retain legibility and visual balance.",
  },
  // More FAQs...
];
const license = {
  href: "#",
  summary:
    "For personal and professional use. You cannot resell or redistribute these icons in their original or modified state.",
  content: `
    <h4>Overview</h4>

    <p>For personal and professional use. You cannot resell or redistribute these icons in their original or modified state.</p>

    <ul role="list">
    <li>You\'re allowed to use the icons in unlimited projects.</li>
    <li>Attribution is not required to use the icons.</li>
    </ul>

    <h4>What you can do with it</h4>

    <ul role="list">
    <li>Use them freely in your personal and professional work.</li>
    <li>Make them your own. Change the colors to suit your project or brand.</li>
    </ul>

    <h4>What you can\'t do with it</h4>

    <ul role="list">
    <li>Don\'t be greedy. Selling or distributing these icons in their original or modified state is prohibited.</li>
    <li>Don\'t be evil. These icons cannot be used on websites or applications that promote illegal or immoral beliefs or activities.</li>
    </ul>
  `,
};
</script>
