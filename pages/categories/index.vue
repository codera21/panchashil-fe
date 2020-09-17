<template>
  <div class="categorypage-container">
    <div class="container">
      <div class="row">
        <div class="col-md-9">
          <section
            class="threeGrid-section mb-3"
            v-for="category in categories"
            :key="category.id"
          >
            <div class="grid-title">
              <nuxt-link :to="`/categories/${category.id}`">
                <span>{{ category.name }}</span>
              </nuxt-link>
            </div>
            <div class="row">
              <div
                v-for="news in category.news"
                :key="news.id"
                class="col-md-4"
              >
                <div class="threeGrid-section-card newsCard">
                  <nuxt-link :to="`/news/${news.id}`">
                    <img :src="news.image" alt class="img-fluid" />
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

          <div class="my-3" v-if="categories.length > 0">
            <ul class="pagination justify-content-center">
              <li
                class="page-item"
                :class="{ disabled: meta.currentPage == 1 }"
                @click="
                  () => {
                    if (meta.currentPage > 1) fetch(meta.currentPage - 1);
                  }
                "
              >
                <a class="page-link" href="#" tabindex="-1">Previous</a>
              </li>

              <li
                class="page-item"
                v-for="i in meta.totalNumberOfPage"
                :class="{ active: meta.currentPage == i }"
                :key="i"
                @click="fetch(i)"
              >
                <a class="page-link" href="#">{{ i }}</a>
              </li>

              <li
                class="page-item"
                :class="{
                  disabled: meta.currentPage == meta.totalNumberOfPage,
                }"
                @click="
                  () => {
                    if (meta.currentPage != meta.totalNumberOfPage)
                      fetch(meta.currentPage + 1);
                  }
                "
              >
                <a class="page-link" href="#">Next</a>
              </li>
            </ul>
          </div>
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
      categories: [],
      meta: {
        currentPage: 0,
        currentPageData: 0,
        nextPage: 0,
        totalData: 0,
        totalNumberOfPage: 0,
      },
    };
  },
  created() {
    this.fetch(1);
  },

  methods: {
    fetch(page) {
      this.categories = [];
      this.$axios
        .get(
          `https://api.panchasilmedia.com/api/admin/news-category?limit=5&page=${page}`
        )
        .then(({ data }) => {
          let categories = data.data;
          this.meta.currentPage = data.currentPage;
          this.meta.currentPageData = data.currentPageData;
          this.meta.nextPage = data.nextPage;
          this.meta.totalData = data.totalData;
          this.meta.totalNumberOfPage = data.totalNumberOfPage;
          //
          categories = categories.map((category) => {
            return this.$axios
              .get(
                `https://api.panchasilmedia.com/api/admin/news/default/type/${category.id}/category`
              )
              .then(({ data }) => {
                category.news = data.slice(0, 5);
                return category;
              });
          });

          Promise.all(categories).then((res) => {
            this.categories = res.filter(
              (category) => category.news.length > 0
            );
          });

          // this.categories = categories;
        });
    },
  },
};
</script>

<style scoped lang="scss"></style>
