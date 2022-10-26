<template>
  <transition
      enter-active-class="duration-150 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="duration-100 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
  >
    <div v-if="open" class="mobile-menu-container">
      <div class="mobile-menu-inner">
        <div class="mobile-menu-title">
          <NuxtLink to="/" class="font-pacifico text-2xl">
            {{ title }}
          </NuxtLink>
          <div class="button-holder">
            <button type="button" @click="close" class="button">
              <span class="sr-only">Close menu</span>
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        <div class="mobile-menu-content">
          <div class="items">
            <NuxtLink v-for="page in menu" :to="page.title" :key="page.id" class="item">
              {{ page.title }}
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
      'title',
      'open',
      'menu'
  ],

  name: "Menu",

  methods: {
    close() {
      this.$emit('toggle')
    }
  }
}
</script>

<style>
  .mobile-menu-container {
    @apply absolute inset-x-0 top-0 z-30 origin-top transform p-2 transition lg:hidden;
  }

  .mobile-menu-inner {
    @apply overflow-hidden bg-white shadow-lg ring-1 ring-black ring-opacity-5;
  }

  .mobile-menu-title {
    @apply flex items-center justify-between px-5 pt-4;
  }

  .mobile-menu-inner .button-holder {
    @apply -mr-2
  }

  .mobile-menu-inner .button {
    @apply inline-flex items-center justify-center rounded-md bg-white p-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black;
  }

  .mobile-menu-content {
    @apply pt-5 pb-6;
  }

  .mobile-menu-content .items {
    @apply space-y-1 px-2;
  }

  .mobile-menu-content .item {
    @apply block rounded-md px-3 py-2 text-base font-medium;
  }

</style>

