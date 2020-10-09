<template>
  <section class="singlepage-container">
    <div class="container">
      <div class="row col-12">
        <BannerAds :ad-obj="topBannerAd" />
      </div>

      <div class="row col-12 my-2">
        <BannerAds :ad-obj="topBannerAd" />
      </div>

      <div class="row">
        <div class="col-md-8">
          <div class="newscontainer">
            <!-- {{ news }} -->
            <header>
              <h2 v-html="news.title"></h2>
            </header>

            <div class="editor-container">
              <div class="editor-left">
                <img
                  src="https://user-images.githubusercontent.com/17085948/94036836-72e1e880-fde4-11ea-9d75-f5a2ea6e01f6.jpg"
                  alt
                />
                <h5>
                  <b>{{ news.title }}</b
                  >,
                </h5>
                <div class="date">१४ भाद्र २०७५</div>
              </div>
              <div class="share-container"></div>
            </div>

            <article class="">
              <div class="thumbnail-post">
                <img :src="news.image" alt />
              </div>
              <div class="content-entry">
                <p v-html="news.description"></p>
              </div>
            </article>

            <!-- <h3 class="youropinion"> प्रतिक्रिया</h3> -->

            <!-- <div class="module2">
              <div class="module2-widget box-shadow">
                <div class="module2-widget-wrapper">
                  <h2 class="module__title">
                    <span>सम्बन्धित समाचारहरू</span>
                  </h2>
                  <div class="data-holder">
                    <div class="section-ordering">
                      <p
                        title="Delhi: Class 12 student commits suicide inside Tilak Vihar police station"
                        class="story section-order"
                      >
                        <a href
                          >भड्किलो तीज : हुनेखाने र हुँदा खानेबीचको दूरी
                          बढाउँदै</a
                        >
                      </p>
                      <p
                        title="2 BSF jawans killed in encounter with Naxals in Chhattisgarh"
                        class="story section-order"
                      >
                        <a href>छुट्टाछुटै घटनामा दुई जनाको मृत्यु</a>
                      </p>
                      <p
                        title="2 BSF jawans killed in encounter with Naxals in Chhattisgarh"
                        class="story section-order"
                      >
                        <a href
                          >पहिरोका कारण अवरुद्ध पासाङल्हामु राजमार्ग खुलाउन
                          आग्रह</a
                        >
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div> -->
          </div>
        </div>
        <div class="col-md-4">
          <div class="rightsection">
            <NewsMiniCard />
            <hr />
            <SideAds />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "single-page",

  data() {
    return {
      news: {},
      topBannerAd: {
        id: 0,
        link: "#",
        width: "1536",
        height: "213",
        imgSrc:
          "https://via.placeholder.com/1536X213.png?text=Your Ads here -- in home page",
      },
    };
  },

  validate({ params }) {
    return params.id;
  },

  created() {
    this.$axios
      .get(
        `https://admin.panchasilmedia.com/api/news/newsbyid/${this.$route.params.id}`
      )
      .then(({ data }) => {
        this.news = data.pop();
      });
  },
};
</script>

<style scoped lang="scss">
//singlepage section

.singlepage-container {
  background: white;
  margin-top: 5px;
  header h2 {
    font-weight: bold;
    margin: 20px 0 10px;
    font-size: 34px;
  }
  .editor-container {
    border-bottom: 1px solid #3333;
    margin-bottom: 10px;
    .editor-left {
      font-family: "Roboto";
      display: flex;
      align-items: center;
      margin: 10px 0;
      img {
        width: 40px;
        border-radius: 50%;
        margin-right: 0.5em;
      }
      h5 {
        margin: 0;
        font-size: 14px;
      }
    }
  }
  .newscontainer {
    .mini-newscard {
      margin-top: 1rem;
      margin-bottom: 1rem;
      figure {
        height: 60px;
        width: 60px;
        border-radius: 50%;
        overflow: hidden;
      }
      .newscard-content {
        width: initial;

        h5 {
          font-size: 1.2rem;
          margin-top: 0;
          margin-bottom: 5px;
        }
        .content {
          margin-top: 0;
        }
      }
    }
  }

  article {
    .thumbnail-post {
    }
    .content-entry {
      font-family: roboto;
      margin-top: 1rem;
      p {
        font-size: 1.1rem;
        strong {
          font-size: 1.5rem;
        }
      }
    }
  }
  .tags-container {
    .uk-badge {
      padding: 15px;
      background: blue;
    }
    a:hover {
      color: red;
    }
  }
  .youropinion {
    background: gray;
    padding: 1%;
    color: white;
  }
  .relatednews-container {
    margin-top: 1rem;
    a {
      font-size: 1.4rem;
      font-weight: bold;
      color: blue;
      margin-top: 5px;
      display: block;
    }
  }
  .news-list {
    a {
      font-size: 1.4rem;
    }
  }
  .rightsection {
    margin-top: 20px;
    .title {
      h5 {
        font-weight: bold;
        border-bottom: 2px solid #1688ca;
        display: inline-block;
      }
    }
    .mini-newscard {
      width: 100%;
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      figure {
        img {
          width: 90px;
          height: 80px;
          object-fit: cover;
        }
      }
      h6 {
        padding: 0 10px;
        font-weight: bold;
      }
    }
  }

  blockquote {
    color: #777;
    float: left;
    font-size: 1.35em;
    line-height: 1.3em;
    margin: 10px 10px 10px 20px;
    padding: 10px;
    text-align: left;
    width: 300px;
    border: none;
    border-left: 6px solid #aaaaaa;
    background-color: #f8f8f8;
    position: relative;
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 32px;
      height: 64px;
    }
  }
}

.module__title {
  font-size: 1.4rem;
  display: block;
  border-bottom: 2px solid white;
  padding-bottom: 5px;

  span {
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
