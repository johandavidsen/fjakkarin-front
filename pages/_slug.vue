<template>
  <div>
    <Header :title="title" :pages="pages"></Header>

    <section class="max-w-7xl mx-auto px-4 py-12">
      <div class="relative px-4 sm:px-6 lg:px-8 max-w-prose mx-auto">
        <div class="mx-auto max-w-prose text-lg">
          <h1>
            <span class="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
            {{ page[0].title.rendered}}
            </span>
          </h1>
        </div>
        <div class="prose prose-lg mx-auto mt-6 text-justify" v-html="page[0].content.rendered"></div>
      </div>
    </section>
  </div>
</template>

<script>
import Header from '@/components/Header'

export default {
  name: "slug",

  components: {
    Header
  },

  async asyncData ({ app, store, params }) {
    let page = await app.$wp
        .pages()
        .slug(params.slug);

    if (page.length === 0) {
      return app.nuxt.error({ statusCode: 404, message: "err.message" });
    }

    return {
      title: app.head.title,
      pages: await app.$wp.pages(),
      page: page
    }
  }
}
</script>
