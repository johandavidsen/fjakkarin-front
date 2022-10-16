<template>
  <div class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-gray-300" >
    <h3 v-html=" post.title.rendered" class="text-xl font-semibold tracking-wide"></h3>
    <time class="text-xs tracking-wide uppercase dark:text-gray-400">{{ post.date }}</time>
    <p v-if="post.excerpt.rendered" v-html="post.excerpt.rendered" class="mt-3"></p>
  </div>

</template>

<script>
export default {
  props: [
    'post'
  ],
  name: "PostTeaser"
}
</script>
