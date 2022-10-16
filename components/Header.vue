<template>
  <header class="relative">
    <div class="bg-warm-gray-50">
      <nav class="relative mx-auto flex items-center justify-between px-6 pt-6 xl:px-8" aria-label="Global">
        <div class="flex flex-1 items-center mb-4">
          <div class="flex w-full items-center justify-between lg:w-auto">
            <a href="/" class="font-pacifico text-2xl">
              Fjakkarin
            </a>
            <div class="-mr-2 flex items-center lg:hidden">
              <button type="button" class="focus-ring-inset inline-flex items-center justify-center rounded-md bg-warm-gray-50 p-2 text-warm-gray-400 hover:bg-warm-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <!-- Heroicon name: outline/bars-3 -->
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
            </div>
          </div>
          <div class="hidden space-x-10 lg:ml-10 lg:flex">
            <NuxtLink v-for="page in $props.pages" :to="page.slug" :key="pages.id" class="text-base font-medium text-warm-gray-500 hover:text-warm-gray-900">
              {{ page.title.rendered }}
            </NuxtLink>
          </div>
        </div>
        <div class="hidden lg:flex lg:items-center lg:space-x-6">

        </div>
      </nav>
    </div>

    <!--
      Mobile menu, show/hide based on menu open state.

      Entering: "duration-150 ease-out"
        From: "opacity-0 scale-95"
        To: "opacity-100 scale-100"
      Leaving: "duration-100 ease-in"
        From: "opacity-100 scale-100"
        To: "opacity-0 scale-95"
    -->
    <div class="absolute inset-x-0 top-0 z-30 origin-top transform p-2 transition lg:hidden">
      <div class="overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
        <div class="flex items-center justify-between px-5 pt-4">
          <div>
            <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=teal&shade=500" alt="">
          </div>
          <div class="-mr-2">
            <button type="button" class="inline-flex items-center justify-center rounded-md bg-white p-2 text-warm-gray-400 hover:bg-warm-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500">
              <span class="sr-only">Close menu</span>
              <!-- Heroicon name: outline/x-mark -->
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        <div class="pt-5 pb-6">
          <div class="space-y-1 px-2">
            <NuxtLink v-for="page in pages" :to="page.slug" :key="pages.id" class="block rounded-md px-3 py-2 text-base font-medium text-warm-gray-900 hover:bg-warm-gray-50">
              {{ page.title.rendered }}
            </NuxtLink>

          </div>
          <div class="mt-6 px-5">

          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: [
      'pages'
  ]
}
</script>
