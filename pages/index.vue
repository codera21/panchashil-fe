<template>
  <div class="container">
    <div class="row col-12">
      <BannerAds :ad-obj="$store.state.homepage.topBannerAd" />
    </div>
    <!-- main section -->
    <section class="breakingNews-section">
      <div class="breakingNews-wrap" v-for="n in breaking_news" :key="n.id">
        <h1 class="text-center">
          <nuxt-link :to="`/news/${n.id}`">{{ n.title }}</nuxt-link>
        </h1>

        <nuxt-link :to="`/news/${n.id}`">
          <img :src="n.image" :alt="n.headline" class="img-fluid" />
        </nuxt-link>
        <nuxt-link :to="`/news/${n.id}`">
          <p v-html="n.description"></p>
        </nuxt-link>
      </div>
    </section>

    <!--  //- main section -->

    <div class="row col-12">
      <BannerAds :ad-obj="topBannerAd" />
    </div>

    <NewsCardSectionOne :news="related_news" />
    <hr />
    <NewsCardSectionTwo :news="latest_news" />

    <div class="row col-12">
      <BannerAds :ad-obj="topBannerAd" class="my-3" />
    </div>

    <div class="row module2">
      <div
        v-for="category in bottomCategories"
        :key="category.id"
        class="col-md-4 col-lg-3 col-sm-6 mb-5"
      >
        <ImageCategory
          class="px-1"
          :category="category"
          :news="category.news"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      breaking_news: [],
      related_news: [],
      latest_news: [],
      bottomCategories: [],

      topBannerAd: { 
        
        id: 0,
        link: "#",
        width: "1536",
        height: "213",
        imgSrc:
          "https://via.placeholder.com/1536X213.png?text=Your Ads here -- in home page",
      },

      // bottomCategories: [
      //   {
      //     id: 0,
      //     catTitle: "समाज",
      //     catImage:
      //       "https://via.placeholder.com/400X255.png?text=Relevant+Image",
      //     news: [
      //       {
      //         id: 0,
      //         title: "भड्किलो तीज : हुनेखाने र हुँदा खानेबीचको दूरी बढाउँदै",
      //         link: "#",
      //       },
      //     ],
      //   },
      // ],
    };
  },

  created() {
    this.fetch();
    this.$axios
      .get(
        "https://api.panchasilmedia.com/api/admin/news/breaking_news/type/all/category"
      )
      .then(({ data }) => {
        this.breaking_news = data.slice(Math.max(data.length - 4, 0));
      });

    this.$axios
      .get(
        "https://api.panchasilmedia.com/api/admin/news/default/type/all/category"
      )
      .then(({ data }) => {
        this.latest_news = data.slice(Math.max(data.length - 4, 0));
      });

    this.$axios
      .get(
        "https://api.panchasilmedia.com/api/admin/news/related/type/all/category"
      )
      .then(({ data }) => {
        this.related_news = data.slice(Math.max(data.length - 3, 0));
      });
  },

  methods: {
    fetch() {
      this.categories = [];
      this.$axios
        .get(`https://api.panchasilmedia.com/api/admin/news-category?limit=5&`)
        .then(({ data }) => {
          let categories = data.data;
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
            this.bottomCategories = res.filter(
              (category) => category.news.length > 0
            );
          });

          // this.categories = categories;
        });
    },
  },
};
</script>

<style lang="scss">
.breakingNews {
  &-section {
    margin: 1rem auto;
  }

  &-wrap {
    text-align: center;
    background: white;
    padding: 1rem 10px;
    margin-bottom: 1rem;
    padding-bottom: 1px;

    a {
      &:hover {
        color: #1688ca;
      }
    }

    h1 {
      font-weight: bold;
      border-bottom: 1px solid lightgrey;
      padding-bottom: 5px;
    }

    img {
      width: auto;
    }

    p {
      margin: 1rem auto;
      font-size: 22px;
    }
  }
}

.threeGrid-section {
  &-card {
    h4 {
      background: white;
      padding: 10px;
      font-weight: bold;
    }
  }
}

.grid-title {
  display: inline-block;
  border-bottom: 2px solid #1688ca;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
}

.fourGrid-section {
  background: white;
  padding: 1rem 0;

  &-card {
    .card-title {
      display: block;
      margin-top: 10px;
      font-size: 18px;
      font-weight: bold;
      padding: 5px 10px;
    }
  }
}

.module__title {
  font-size: 1.4rem;
  display: block;
  border-bottom: 2px solid white;
  padding-bottom: 5px;

  a {
    position: relative;
    &:after {
      position: absolute;
      content: "";
      height: 3px;
      width: 100%;
      background: #1688ca;
      bottom: -2px;
      left: 0;
    }
  }
}

.module2 {
  .module2-widget {
    background: white;
    padding: 10px;
    margin-bottom: 20px;
  }

  .media {
    flex-direction: column;
  }

  .media-list__item {
    margin-bottom: 0;
  }

  .media__content {
    position: relative;
    padding-top: 5px;
    background: transparent;

    .media__title {
      font-size: 16px;
      margin-top: 5px;
    }

    .media__link {
      color: #333;
      font-weight: bold;
      line-height: 1.4;
    }
  }
}

.section-ordering p {
  font-size: 16px;
  line-height: 20px;
  position: relative;
  border-top: 1px solid #eee;
  padding: 10px 0 10px 15px;
  margin: 0;
  display: block;

  &:before {
    position: absolute;
    top: 18px;
    left: 0;
    content: "";
    border-radius: 100%;
    background: #1688ca;
    height: 5px;
    width: 5px;
  }

  a {
    padding: 5px 0;
  }
}
</style>
