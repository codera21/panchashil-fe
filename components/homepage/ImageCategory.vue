<template>
  <div class="module2-widget box-shadow px-3">
    <div class="module2-widget-wrapper">
      <h2 class="module__title">
        <nuxt-link :to="`/categories/${category.id}`">{{
          category.name
        }}</nuxt-link>
      </h2>
      <div class="data-holder">
        <div class="section-ordering">
          <div class="media-list__item">
            <div class="media">
              <div class="media__image w-100 h-100">
                <!-- <img :src="news[0].image" class alt /> -->
                <div
                  :style="`background-image:url(${news[0].image})`"
                  class="img"
                  alt
                />
              </div>
              <div class="media__content"></div>
            </div>
          </div>
          <div class="clearfix"></div>
          <!-- {{ news }} -->
          <p v-for="i in news" :key="i.id" class="title">
            <nuxt-link :to="`/news/${i.id}`">
              {{
                i.title.length > 50 ? i.title.substr(0, 50) + "..." : i.title
              }}
            </nuxt-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageCategory",
  props: ["category", "news"],
};
</script>

<style lang="scss">
.title {
  height: 60px;
  overflow: hidden;
}

.module2-widget {
  height: 100%;
}

.img {
  height: 198px !important;
  background-position: center;
  background-size: cover;
}
</style>
