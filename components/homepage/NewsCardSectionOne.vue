<template>
  <section class="threeGrid-section">
    <div class="row">
      <div v-for="item in items" :key="item.id" class="col-md-4 mb-3">
        <div class="fourGrid-section-card box-shadow">
          <nuxt-link :to="{path: item.link }">
            <img :src="item.src" alt class="img-fluid" />
          </nuxt-link>
          <nuxt-link :to="{path: item.link }">
            <span class="card-title">{{item.title}}</span>
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "NewsCardSectionOne",
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

<style lang="scss">
</style>