<template>
  <div class="mero-desh fourGrid-section">
    <div class="container">
      <div class="grid-title">
        <span>ताजा खबर</span>
      </div>

      <div class="row">
        <div class="col-md-3 mb-3" v-for="item in items" :key="item.id">
          <div class="fourGrid-section-card box-shadow">
            <nuxt-link :to="{path: item.link }">
              <img :src="item.src" :alt="item.title" class="img-fluid" />
            </nuxt-link>
            <nuxt-link :to="{path: item.link }">
              <span class="card-title">{{item.title}}</span>
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
</style>