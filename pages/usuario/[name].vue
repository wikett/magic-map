<template>
  <div class="bg-gray-900">
    <div class="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
      <div class="mx-auto max-w-2xl px-4 lg:max-w-none">
        <div
          class="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2"
        >
          <div>
            <h1 class="text-4xl font-bold tracking-tight text-blue-500">
              {{ route.params.name }}
            </h1>
            <p class="mt-4 text-blue-200">
              {{ currentUsuario.description }}
            </p>
            <div>
              <NuxtLink
                v-if="currentUsuario.urlWebsite"
                :to="currentUsuario.urlWebsite"
                target="_blank"
                external
              >
                <UAvatar
                  src="/img/social/icons8-website-48.png"
                  alt="Website"
                  class="m-4"
                />
              </NuxtLink>
              <NuxtLink
                v-if="currentUsuario.urlFacebook"
                :to="currentUsuario.urlFacebook"
                target="_blank"
                external
              >
                <UAvatar
                  src="/img/social/icons8-facebook.svg"
                  alt="Facebook"
                  class="m-4"
                />
              </NuxtLink>
              <NuxtLink
                v-if="currentUsuario.urlFlickr"
                :to="currentUsuario.urlFlickr"
                target="_blank"
                external
              >
                <UAvatar
                  src="/img/social/icons8-flickr.svg"
                  alt="Flickr"
                  class="m-4"
                />
              </NuxtLink>
              <NuxtLink
                v-if="currentUsuario.urlInstagram"
                :to="currentUsuario.urlInstagram"
                target="_blank"
                external
              >
                <UAvatar
                  src="/img/social/icons8-instagram.svg"
                  alt="Instagram"
                  class="m-4"
                />
              </NuxtLink>
              <NuxtLink
                v-if="currentUsuario.urlPinterest"
                :to="currentUsuario.urlPinterest"
                target="_blank"
                external
              >
                <UAvatar
                  src="/img/social/icons8-pinterest.svg"
                  alt="Pinterest"
                  class="m-4"
                />
              </NuxtLink>
              <NuxtLink
                v-if="currentUsuario.urlTelegram"
                :to="currentUsuario.urlTelegram"
                target="_blank"
                external
              >
                <UAvatar
                  src="/img/social/icons8-telegram-app.svg"
                  alt="Telegram"
                  class="m-4"
                />
              </NuxtLink>
              <NuxtLink
                v-if="currentUsuario.urlTiktok"
                :to="currentUsuario.urlTiktok"
                target="_blank"
                external
              >
                <UAvatar
                  src="/img/social/icons8-tiktok.svg"
                  alt="Tiktok"
                  class="m-4"
                />
              </NuxtLink>
              <NuxtLink
                v-if="currentUsuario.urlTwitter"
                :to="currentUsuario.urlTwitter"
                target="_blank"
                external
              >
                <UAvatar
                  src="/img/social/icons8-twitterx.svg"
                  alt="Twitter"
                  class="m-4"
                />
              </NuxtLink>
              <NuxtLink
                v-if="currentUsuario.urlYoutube"
                :to="currentUsuario.urlYoutube"
                target="_blank"
                external
              >
                <UAvatar
                  src="/img/social/icons8-youtube.svg"
                  alt="Youtube"
                  class="m-4"
                />
              </NuxtLink>
            </div>
          </div>
          <div
            class="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg bg-gray-100"
          >
            <ClientOnly
              fallback-tag="div"
              fallback="Cargando localizaciones..."
            >
              <div style="height: 600px; width: 100%">
                <l-map
                  ref="map"
                  zoom="3"
                  :center="[43.41322, -1.219482]"
                  :useGlobalLeaflet="true"
                  min-zoom="1"
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
        <div class="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
          <div
            v-for="incentive in incentives"
            :key="incentive.name"
            class="sm:flex lg:block"
          >
            <div class="sm:flex-shrink-0">
              <UIcon class="h-16 w-16" :name="incentive.icon" />
            </div>
            <div class="mt-4 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
              <h3 class="text-sm font-medium text-blue-100">
                {{ incentive.name }}
              </h3>
              <p class="mt-2 text-sm text-blue-300">
                {{ incentive.description }}
              </p>
            </div>
          </div>
        </div>
        <ul
          role="list"
          class="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
        >
          <li
            v-for="(loca, index) in localizaciones"
            class="list-none"
            :key="index"
          >
            <NuxtLink
              :to="`/localizaciones/${getId(loca._id)}/${convertSEO(
                loca.titulo
              )}`"
            >
              <NuxtImg
                provider="cloudinary"
                :src="`/${loca.cloudinaryId}.jpg`"
                :alt="loca.titulo"
                format="webp"
                class="aspect-[14/13] w-full rounded-2xl object-cover"
              />
            </NuxtLink>
            <p class="text-sm leading-6 ml-2 text-gray-500">
              {{ loca.titulo }}
            </p>
          </li>
        </ul>
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
import { format } from "date-fns";
const { convertSEO, getId } = seoUtils();
import usuario from "../../content/usuarios.json";
import "vue-leaflet-markercluster/dist/style.css";
import { LMap, LTileLayer, LMarker, LTooltip } from "@vue-leaflet/vue-leaflet";
import { LMarkerClusterGroup } from "vue-leaflet-markercluster";
const locaSelected = ref({});
const open = ref(false);
const redirecting = ref(false);

import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { XMarkIcon } from "@heroicons/vue/24/outline";

const route = useRoute();
const localizaciones = await queryContent(`/localizaciones`)
  .where({ autor: { $eq: route.params.name } })
  .find();
const currentUsuario = usuario.find(
  (item) => item.username === route.params.name
);
console.log(localizaciones[0]);
const incentives = [
  {
    name: "Localizaciones",
    icon: "i-heroicons-map-pin",
    description: `${localizaciones.length} localizaciones en total`,
  },
  {
    name: "Última localización",
    icon: "i-heroicons-rocket-launch",
    description: `La última localización de ${route.params.name} fue en ${
      localizaciones[localizaciones.length - 1].ciudad
    } (${localizaciones[localizaciones.length - 1].provincia})`,
  },
  {
    name: "Antigüedad",
    icon: "i-heroicons-calendar",
    description: getUserCreatedAt(),
  },
];
function showLoca(loca) {
  locaSelected.value = loca;
  open.value = !open.value;
  if (open.value) {
    redirecting.vale = false;
  }
}
function getUserCreatedAt() {
  return currentUsuario.createdAt
    ? `Miembro de subexpuesta.com desde ${format(
        currentUsuario.createdAt.$date,
        "dd-MM-yyyy"
      )}`
    : "No sabemos la antigüedad de este usuario";
}
</script>
