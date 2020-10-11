<template>
  <div class="mero-desh fourGrid-section">
    <div class="container">
      <div class="grid-title">
        <span>ताजा खबर</span>
      </div>

      <div class="row">
        <div v-for="item in news" :key="item.news_id" class="col-md-3 mb-3">
          <div class="fourGrid-section-card box-shadow h-100">
            <nuxt-link :to="`/news/${item.news_id}`">
              <!-- <img :src="item.image" :alt="item.title" class="img-fluid" /> -->
              <div
                class="img"
                :alt="item.title"
                :style="`background-image: url(https://admin.panchasilmedia.com/uploads/${item.image})`"
              />
            </nuxt-link>
            <nuxt-link :to="`/news/${item.news_id}`">
              <span class="card-title">{{
                item.title.length > 40
                  ? item.title.substr(0, 40) + "..."
                  : item.title
              }}</span>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsCardSectionTwo",
  props: ["news"],
  data() {
    return {
      items: [
        // taaza khabar section must  only have 4 items
        {
          id: 0,
          src: "http://lorempixel.com/405/227",
          link: "single-page/",
          title:
            "कोरोनाबाट मृत्यु भएका पुरुषको रिपोर्ट : कहिले नेगेटिभ, कहिले पोजेटिभ !",
        },
        {
          id: 1,
          src: "http://lorempixel.com/405/227",
          link: "single-page/",
          title:
            "कोरोनाबाट मृत्यु भएका पुरुषको रिपोर्ट : कहिले नेगेटिभ, कहिले पोजेटिभ !",
        },
        {
          id: 2,
          src: "http://lorempixel.com/405/227",
          link: "single-page/",
          title:
            "कोरोनाबाट मृत्यु भएका पुरुषको रिपोर्ट : कहिले नेगेटिभ, कहिले पोजेटिभ !",
        },
        {
          id: 2,
          src: "http://lorempixel.com/405/227",
          link: "single-page/",
          title:
            "कोरोनाबाट मृत्यु भएका पुरुषको रिपोर्ट : कहिले नेगेटिभ, कहिले पोजेटिभ !",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.img {
  height: 198px !important;
  background-position: center;
  background-size: cover;
}
</style>
