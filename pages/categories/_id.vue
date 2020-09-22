<template>
  <div class="categorypage-container">
    <div class="container">
      <div class="row">
        <div class="col-md-9">
          <section class="threeGrid-section mb-3">
            <div class="grid-title">
              <span>{{ news_category.name }}</span>
            </div>
            <div class="row">
              <div v-for="news in latest_news" :key="news.id" class="col-md-4">
                <div class="threeGrid-section-card newsCard">
                  <nuxt-link :to="`/news/${news.id}`">
                    <!-- <img :src="news.image" alt class="img-fluid" /> -->
                    <!-- <img :src="news.image" alt class="img-fluid" /> -->
                    <div
                      class="img"
                      :alt="news.title"
                      :style="`background-image: url(${news.image})`"
                    />
                  </nuxt-link>
                  <h4>
                    <nuxt-link :to="`/news/${news.id}`">
                      <span class="card-title">{{
                        news.title.length > 50
                          ? news.title.substr(0, 50) + "..."
                          : news.title
                      }}</span>
                    </nuxt-link>
                  </h4>
                </div>
              </div>
            </div>
          </section>
          <!-- <Pagination /> -->

          <!-- <div class="my-3" v-if="latest_news.length > 0">
            <ul class="pagination justify-content-center">
              <li class="page-item disabled">
                <a class="page-link" href="#" tabindex="-1">Previous</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">1</a>
              </li>
              <li class="page-item active">
                <a class="page-link" href="#">
                  2
                  <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">3</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">Next</a>
              </li>
            </ul>
          </div> -->
          <!--  -->
        </div>

        <div class="col-md-3">
          <div class="rightsection">
            <div class="title">
              <h5>लोकप्रिय</h5>
            </div>
            <NewsMiniCard />
            <hr />
            <SideAds />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "category-page",
  data() {
    return {
      // title: "अन्तर्राष्ट्रिय",
      latest_news: [],
      meta: {},
      news_category: {},
    };
  },
  created() {
    // console.log(this.$route.params.id);
    this.$axios
      .get(
        `https://api.panchasilmedia.com/api/admin/news-category/${this.$route.params.id}`
      )
      .then(({ data }) => {
        this.news_category = data.news_category;
      });

    this.$axios
      .get(
        `https://api.panchasilmedia.com/api/admin/news/default/type/${this.$route.params.id}/category`
      )
      .then(({ data }) => {
        this.latest_news = data;
      });
  },
};
</script>

<style scoped lang="scss">
.img {
  height: 198px !important;
  background-position: center;
  background-size: cover;
}
</style>
