<script setup>
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { XMarkIcon } from "@heroicons/vue/24/outline";
import info from "../data/info.json";
const { prev, page, next, toc } = useContent();
const route = useRoute();
const open = ref(false);
let postUno = null;
let postDos = null;

const categoria = page.value?.category ?? "/";

const { data } = await useAsyncData(categoria, () =>
  queryContent(categoria).find()
);

if (data.value) {
  const randomPost = data.value?.length
    ? Math.floor(Math.random() * data.value?.length)
    : 10;
  const randomPost2 = data.value?.length
    ? Math.floor(Math.random() * data.value?.length)
    : 10;
  postUno = data.value[randomPost];
  postDos = data.value[randomPost2];
}
let navigation = {
  social: [
    {
      name: "Facebook",
      href: page.value.author.facebookUrl ?? "",
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
      href: page.value.author.instagramUrl ?? "",
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
      href: page.value.author.xUrl ?? "",
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
let autorRandom = Math.floor(Math.random() * 6 + 1);
const autorPicture = `/img/autor288_${autorRandom}.webp`;
</script>
<template>
  <main class="px-6 py-8 lg:px-8">
    <div class="mx-auto max-w-4xl text-base leading-7 text-blue-100">
      <TransitionRoot as="template" :show="open">
        <Dialog as="div" class="relative z-10" @close="open = false">
          <div class="fixed inset-0" />

          <div class="fixed inset-0 overflow-hidden">
            <div class="absolute inset-0 overflow-hidden">
              <div
                class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10"
              >
                HOLA
                <TransitionChild
                  as="template"
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enter-from="translate-x-full"
                  enter-to="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leave-from="translate-x-0"
                  leave-to="translate-x-full"
                >
                  <DialogPanel class="pointer-events-auto w-screen max-w-md">
                    <div
                      class="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl"
                    >
                      <div class="px-4 sm:px-6">
                        <div class="flex items-start justify-between">
                          <DialogTitle
                            class="text-base font-semibold leading-6 text-blue-900"
                            >📰 Tabla de Contenido</DialogTitle
                          >
                          <div class="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              class="relative rounded-md bg-white text-blue-400 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                              @click="open = false"
                            >
                              <span class="absolute -inset-2.5" />
                              <span class="sr-only">Close panel</span>
                              <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div class="relative mt-6 flex-1 px-4 sm:px-6">
                        <!-- Your content -->
                        <ul v-if="toc && toc.links">
                          <li v-for="link in toc.links" :key="link.text">
                            <a @click="open = false" :href="`#${link.id}`">
                              {{ link.text }}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </DialogPanel>
                </TransitionChild>
              </div>
            </div>
          </div>
        </Dialog>
      </TransitionRoot>
      <div class="max-w-4xl">
        <a href="#" class="cursor-pointer" @click="open = true"
          >📰 Tabla de Contenido</a
        >
        <ContentDoc v-slot="{ doc }">
          <ContentRenderer :value="doc" />
        </ContentDoc>

        <p class="mt-16 text-2xl font-bold tracking-tight text-green-800">
          Compártelo con tus amigos:
        </p>
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
    <section class="isolate overflow-hiddenpx-6 lg:px-8">
      <div class="relative mx-auto max-w-2xl lg:max-w-4xl">
        <div class="relative my-6">
          <div class="absolute inset-0 flex items-center" aria-hidden="true">
            <div class="w-full border-t border-gray-300" />
          </div>
          <div class="relative flex justify-center">
            <span class="bg-gray-800 px-2 text-sm text-pink-500">Autor</span>
          </div>
        </div>
        <figure class="">
          <div
            v-if="page.author.user === 'quique_aparicio'"
            class="relative col-span-2 lg:col-start-1 lg:row-start-2"
          >
            <blockquote
              class="text-sm leading-8 text-blue-200 sm:text-xl sm:leading-9 lg:text-xl italic font-semibold"
            >
              <p>{{ info.authorsSmallDescription }}</p>
            </blockquote>
          </div>
          <div
            v-if="page.author.user === 'quique_aparicio'"
            class="col-end-1 w-16 lg:row-span-4 lg:w-72"
          >
            <NuxtImg
              :src="autorPicture"
              :alt="info.author"
              width="288"
              height="288"
              format="webp"
              class="aspect-square object-cover rounded-xl bg-blue-50 lg:rounded-3xl"
            />
          </div>
          <figcaption class="text-base lg:col-start-1 lg:row-start-3">
            <div class="font-semibold text-green-800">
              <a
                v-if="page.author.user === 'quique_aparicio'"
                class="text-pink-500"
                href="/quienes-somos"
                >{{ info.author }}</a
              >
              <span class="text-pink-500" v-else
                >Escrito por: {{ page.author.user }}</span
              >
            </div>
            <div class="flex my-3 space-x-6">
              <a
                v-for="item in navigation.social"
                :key="item.name"
                :href="item.href"
                class="text-gray-500 hover:text-gray-400"
              >
                <span v-if="item.href !== ''" class="sr-only">{{
                  item.name
                }}</span>
                <component
                  v-if="item.href !== ''"
                  :is="item.icon"
                  class="h-6 w-6"
                  aria-hidden="true"
                />
              </a>
            </div>
          </figcaption>
        </figure>

        <!-- <div>
          <h3>Más artículos que te pueden interesar</h3>
          <div
            class="mx-auto grid max-w-2xl auto-rows-fr grid-cols-1 gap-3 sm:mt-8 lg:mx-0 lg:max-w-none lg:grid-cols-4"
          >
            <ThumbArticle v-if="prev && prev._path !== '/info'" :post="prev" />
            <ThumbArticle :post="postUno" />
            <ThumbArticle :post="postDos" />

            <ThumbArticle v-if="next" :post="next" />
          </div>
          <google-adsense type="multiplex" />
        </div> -->
      </div>
    </section>
  </main>
</template>
