<template>
  <transition
      enter-active-class="duration-150 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="duration-100 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
  >
    <div v-if="open" class="absolute inset-x-0 top-0 z-30 origin-top transform p-2 transition lg:hidden">
      <div class="overflow-hidden bg-white shadow-lg ring-1 ring-black ring-opacity-5">
        <div class="flex items-center justify-between px-5 pt-4">
          <div>
            <a href="/" class="font-pacifico text-2xl">
              Fjakkarin
            </a>
          </div>
          <div class="-mr-2">
            <button type="button" @click="close" class="inline-flex items-center justify-center rounded-md bg-white p-2 text-warm-gray-400 hover:bg-warm-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black">
              <span class="sr-only">Close menu</span>
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
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {

  props: [
      'open',
      'pages'
  ],

  name: "Menu",

  methods: {
    close() {
      this.$emit('toggle')
    }
  }
}
</script>

