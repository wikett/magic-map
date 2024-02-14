<template>
  <main class="isolate">
    <!-- Hero section -->
    <!-- <div
      class="relative isolate -z-10 overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-16"
    >
      <div
        class="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
        aria-hidden="true"
      />
      <div class="mx-auto max-w-7xl px-6 sm:py-8 lg:px-8">
        <div
          class="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8"
        >
          <h1
            class="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto"
          >
            {{ info.mainTitle }}
          </h1>
          <div
            class="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1"
            v-html="info.authorsDescription"
          ></div>
          <img
            src="/img/autor.webp"
            alt="Autores"
            class="mt-10 aspect-[1/1] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
          />
        </div>
      </div>
      <div
        class="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32"
      />
    </div> -->
    <div class="bg-gray-900">
      <div class="relative isolate overflow-hidden p-14">
        <NuxtImg
          provider="cloudinary"
          src="subexpuesta/tbdkchp4gaqwxmdscm7d.jpg"
          width="1200"
          format="webp"
          class="absolute inset-0 -z-10 h-full w-full object-cover opacity-45"
        />
        <div
          class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style="
              clip-path: polygon(
                74.1% 44.1%,
                100% 61.6%,
                97.5% 26.9%,
                85.5% 0.1%,
                80.7% 2%,
                72.5% 32.5%,
                60.2% 62.4%,
                52.4% 68.1%,
                47.5% 58.3%,
                45.2% 34.5%,
                27.5% 76.7%,
                0.1% 64.9%,
                17.9% 100%,
                27.6% 76.8%,
                76.1% 97.7%,
                74.1% 44.1%
              );
            "
          />
        </div>
        <div class="mx-auto max-w-full py-32 sm:py-48 lg:py-56">
          <div class="hidden sm:mb-8 sm:flex sm:justify-center">
            <div
              class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20"
            >
              Tu comunidad de fotografía nocturna y mucho más...
            </div>
          </div>
          <div class="text-center">
            <h1
              class="text-4xl font-bold tracking-tight text-white sm:text-6xl"
            >
              Localizaciones de fotografías nocturnas
            </h1>
            <p class="mt-6 text-lg leading-8 text-blue-200">
              Descubre nuestro mapa con más de 1500 localizaciones, únete a
              nuestras redes sociales para estar atento al minuto y sigue
              nuestro blog donde vamos contando todo lo referencte a la
              fotografía.
            </p>
            <div class="mt-10 flex items-center justify-center gap-x-6">
              <UButton to="/mapa-localizaciones" size="xl">Ver mapa</UButton>
            </div>
          </div>
        </div>
        <div
          class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style="
              clip-path: polygon(
                74.1% 44.1%,
                100% 61.6%,
                97.5% 26.9%,
                85.5% 0.1%,
                80.7% 2%,
                72.5% 32.5%,
                60.2% 62.4%,
                52.4% 68.1%,
                47.5% 58.3%,
                45.2% 34.5%,
                27.5% 76.7%,
                0.1% 64.9%,
                17.9% 100%,
                27.6% 76.8%,
                76.1% 97.7%,
                74.1% 44.1%
              );
            "
          />
        </div>
      </div>
    </div>

    <!-- Content section -->
    <div class="mt-32 overflow-hidden sm:mt-40">
      <div class="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div
          class="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8"
        >
          <div class="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
            <h2
              class="text-3xl font-bold tracking-tight text-blue-500 sm:text-4xl"
            >
              Localizaciones destacadas
            </h2>
            <p class="mt-6 text-xl leading-8 text-gray-300">
              Esta es una selección de los mejores sitios para hacer fotografía
              nocturna, de paisaje o urbana. Si pincháis en la imágen os llevará
              al lugar exacto de donde se realizó la toma.
            </p>
          </div>
          <div
            class="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents"
          >
            <div
              class="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end"
            >
              <NuxtImg
                provider="cloudinary"
                src="/subexpuesta/bhw1yyupkfqbm9yljd2v.jpg"
                width="592"
                height="423"
                format="webp"
                class="rounded-2x object-cover"
              />
            </div>
            <div
              class="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8"
            >
              <div
                class="order-first flex w-64 flex-none justify-end self-end lg:w-auto"
              >
                <NuxtImg
                  provider="cloudinary"
                  src="/subexpuesta/apdpulgcwucmdljwh9iw.jpg"
                  width="384"
                  height="288"
                  format="webp"
                  class="pl-32 aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-fill overflow-hidden"
                />
              </div>
              <div
                class="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none"
              >
                <NuxtImg
                  provider="cloudinary"
                  src="/subexpuesta/zc3zex6s2g2wyrrd36a7.jpg"
                  width="592"
                  height="422"
                  format="webp"
                  class="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
              <div
                class="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none"
              >
                <NuxtImg
                  provider="cloudinary"
                  src="/subexpuesta/vet0ts4czghsvymntgkj.jpg"
                  width="539"
                  height="700"
                  format="webp"
                  class="aspect-[3/4] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script setup>
import { Dialog, DialogPanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

const mobileMenuOpen = ref(false);

useHead({
  title: "Subexpuesta.com | Comunidad sobre fotografía nocturna",
  meta: [
    {
      name: "description",
      content:
        "Localizaciones de fotografía nocturna. Únete a nuestra comunidad de noctógrafos donde siempre se aprende algo nuevo :)",
    },
  ],
});
</script>
