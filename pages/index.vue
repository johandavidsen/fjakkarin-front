<template>
  <div class="min-h-screen flex flex-col">
    <Header :title="title" :menu="Object.values(mainMenu)"></Header>

    <main v-html="page.content.rendered"></main>

    <Footer :menu="mainMenu" :footer-menu-one="footerMenuOne" :footer-menu-two="footerMenuTwo"></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from "@/components/Footer";

export default {
  name: "Index",

  components: {
    Footer,
    Header
  },

  async asyncData ({ app, store, params }) {
    return {
      title: app.head.title,
      mainMenu: await app.$wp.menu().location('main-menu'),
      footerMenuOne: await app.$wp.menu().location('footer-menu-one'),
      footerMenuTwo: await app.$wp.menu().location('footer-menu-two'),
      page: await app.$wp.frontPage()
    }
  }
}
</script>