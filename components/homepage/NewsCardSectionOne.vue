<template>
  <section class="threeGrid-section">
    <div class="row">
      <div v-for="item in news" :key="item.news_id" class="col-md-4 mb-3">
        <div class="fourGrid-section-card box-shadow h-100">
          <nuxt-link :to="`/news/${item.news_id}`">
						<img :src="`https://admin.panchasilmedia.com/uploads/${item.image}`" alt class="img-fluid" />
          </nuxt-link>
          <nuxt-link :to="`/news/${item.news_id}`">
            <span class="card-title">{{
              item.title.length > 70
                ? item.title.substr(0, 70) + "..."
                : item.title
            }}</span>
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "NewsCardSectionOne",
  props: ["news"],
  data() {
    return {
      items: [
        // items should be in mulpliles of 3
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
      ],
    };
  },
};
</script>

<style lang="scss"></style>
