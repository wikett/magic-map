<template>
  <div class="py-12">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-full lg:text-center absolute]">
        <h1
          class="mt-2 text-3xl font-bold tracking-tight text-blue-500 text-opacity-80 sm:text-4xl"
        >
          Mapa de localizaciones para fotografia nocturna
        </h1>

        <p class="mt-6 text-lg leading-8 text-blue-200">
          Más de 1500 localizaciones para fotografía tanto nocturna, de paisaje,
          lightpainting o de larga duración. Comparte con nuestra comunidad
          estos magníficos lugares.
        </p>

        <div class="relative top-0 left-0">
          <ClientOnly fallback-tag="div" fallback="Cargando localizaciones...">
            <div style="height: 600px; width: 100%">
              <l-map
                ref="map"
                :zoom="zoom"
                :center="[47.41322, -1.219482]"
                :useGlobalLeaflet="true"
                min-zoom="3"
                max-zoom="13"
              >
                <l-tile-layer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  layer-type="base"
                  name="OpenStreetMap"
                  max-native-zoom="19"
                ></l-tile-layer>
                <l-marker-cluster-group>
                  <l-marker
                    v-for="loca in localizaciones"
                    :lat-lng="[loca.latitud, loca.longitud]"
                    @click="showLoca(loca)"
                  >
                    <l-tooltip> {{ loca.titulo }}</l-tooltip>
                  </l-marker>
                </l-marker-cluster-group>
              </l-map>
            </div>
          </ClientOnly>
        </div>
      </div>
      <div class="mx-auto mt-24 max-w-full">
        <dl
          class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16"
        >
          <div
            v-for="feature in features"
            :key="feature.name"
            class="relative pl-16"
          >
            <dt
              class="text-base font-semibold leading-7 text-blue-500 text-opacity-80"
            >
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
            <dd class="mt-2 text-base leading-7 text-blue-200">
              {{ feature.description }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
  <TransitionRoot as="template" :show="open && locaSelected !== undefined">
    <Dialog as="div" class="relative z-[1001]" @close="open = false">
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div
          class="fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity"
        />
      </TransitionChild>

      <div class="fixed inset-0 z-[1001] w-screen overflow-y-auto">
        <div
          class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
        >
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <DialogPanel
              class="relative transform overflow-hidden rounded-lg bg-blue-950 px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6"
            >
              <div class="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                <button
                  type="button"
                  class="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                  @click="open = false"
                >
                  <span class="sr-only">Close</span>
                  <XMarkIcon class="h-6 w-6 text-black" aria-hidden="true" />
                </button>
              </div>
              <div class="sm:flex sm:items-start">
                <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <DialogTitle
                    as="h3"
                    class="text-base font-semibold leading-6 text-blue-500"
                    >{{ locaSelected.titulo }}</DialogTitle
                  >
                  <div class="mt-2">
                    <NuxtImg
                      provider="cloudinary"
                      :src="`/${locaSelected.cloudinaryId}.jpg`"
                      width="592"
                      height="423"
                      format="webp"
                      class="object-cover object-center"
                    />
                    <p class="text-sm text-blue-200">
                      {{ locaSelected.acceso }}
                    </p>
                  </div>
                </div>
              </div>
              <div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                <NuxtLink
                  :to="`/localizaciones/${getId(locaSelected._id)}/${convertSEO(
                    locaSelected.titulo
                  )}`"
                >
                  <UButton :loading="redirecting" @click="redirecting = true"
                    >Ver localización</UButton
                  >
                </NuxtLink>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { ref } from "vue";
import info from "../data/info.json";
const redirecting = ref(false);
const route = useRoute();
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { ExclamationTriangleIcon, XMarkIcon } from "@heroicons/vue/24/outline";
const { convertSEO, getId } = seoUtils();
const open = ref(false);
import {
  ShareIcon,
  MapIcon,
  DocumentDuplicateIcon,
  RssIcon,
} from "@heroicons/vue/24/outline";
import "vue-leaflet-markercluster/dist/style.css";
import { LMap, LTileLayer, LMarker, LTooltip } from "@vue-leaflet/vue-leaflet";
import { LMarkerClusterGroup } from "vue-leaflet-markercluster";

const zoom = ref(4);
const locaSelected = ref({});

const localizaciones = await queryContent(`/localizaciones`).find();

function showLoca(loca) {
  locaSelected.value = loca;
  open.value = !open.value;
  if (open.value) {
    redirecting.vale = false;
  }
}
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

useHead({
  title: "Mapa de Localizaciones fotográficas",
  meta: [
    {
      hid: "description",
      name: "description",
      content:
        "🌍 Mapa con más de 1500 localizaciones para fotografía tanto nocturna, de paisaje, lightpainting o de larga duración.",
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
