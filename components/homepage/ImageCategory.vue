<template>
  <div class="module2-widget box-shadow">
    <div class="module2-widget-wrapper">
      <h2 class="module__title">
        <nuxt-link to="/category-page">{{catTitle}}</nuxt-link>
      </h2>
      <div class="data-holder">
        <div class="section-ordering">
          <div class="media-list__item">
            <div class="media">
              <div class="media__image">
                <img :src="catImage" class alt />
              </div>
              <div class="media__content"></div>
            </div>
          </div>
          <div class="clearfix"></div>
          <p v-for="i in news" :key="i.id" class>
            <nuxt-link :to="i.link" :title="i.title">{{i.title}}</nuxt-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageCategory",
  props: ["catTitle", "catImage", "news"],
};
</script>

<style lang="scss">
</style>