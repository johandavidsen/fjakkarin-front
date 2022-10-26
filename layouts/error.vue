<template>
  <div>
    <Header></Header>

    <section class="container max-w-7xl px-4 py-12 text-center mx-auto">
      <h1 class="text-4xl mb-3" v-if="error.statusCode === 404">Page not found</h1>
      <h1 class="text-4xl mb-3" v-else>An error occurred - {{ error.statusCode }} </h1>

      <p class="mb-3"v-if="error.statusCode === 404">
        It seems the page your looking for is gone. <br />
        Please return to where you came from and try again. <br />
      </p>

      <NuxtLink to="/">Home page</NuxtLink>
    </section>
  </div>
</template>

<script>
import Header from "@/components/Header";

export default {
  components: {
    Header
  },
  props: ['error'],

  layout: 'error',

}
</script>