<template>
  <header class="relative">
    <div>
      <nav class="relative mx-auto flex items-center justify-between px-6 pt-6 xl:px-8" aria-label="Global">
        <div class="flex flex-1 items-center mb-4">
          <div class="flex w-full items-center justify-between lg:w-auto">
            <NuxtLink to="/" class="font-pacifico text-2xl">
              {{ title ?? 'Fjakkarin' }}
            </NuxtLink>
            <div class="-mr-2 flex items-center lg:hidden">
              <button type="button" @click="toggle" class="focus-ring-inset inline-flex items-center justify-center rounded-md bg-warm-gray-50 p-2 text-warm-gray-400 hover:bg-warm-gray-100 focus:outline-none focus:ring-2 focus:ring-black" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
            </div>
          </div>
          <div class="hidden space-x-10 lg:ml-10 lg:flex">
            <NuxtLink v-if="$props.menu.length > 0"
                      :to="page.title"
                      :key="page.id"
                      v-for="page in $props.menu">
              {{ page.title }}
            </NuxtLink>
          </div>
        </div>
        <div class="hidden lg:flex lg:items-center lg:space-x-6">

        </div>
        <Menu :title="title" :menu="menu" :open="open" @toggle="toggle"></Menu>
      </nav>
    </div>

  </header>
</template>

<script>
import Menu from "@/components/Menu";
export default {
  name: "Header",
  components: {Menu},
  props: [
      'title',
      'menu'
  ],

  data() {
    return {
      open: false
    }
  },

  methods: {
    toggle () {
      console.log('dasda');
      this.open = !this.open
    }
  }
}
</script>
