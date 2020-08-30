<template>
  <div class="categorypage-container">
    <div class="container">
      <div class="row">
        <div class="col-md-9">
          <section class="threeGrid-section">
            <div class="grid-title">
              <span>{{title}}</span>
            </div>
            <div class="row">
              <div v-for="i in 4" :key="i" class="col-md-4">
                <div class="threeGrid-section-card newsCard">
                  <nuxt-link to="/single-page">
                    <img src="http://lorempixel.com/400/226/" alt class="img-fluid" />
                  </nuxt-link>
                  <h4>
                    <nuxt-link to="/single-page">उपत्यकामा एकैदिन भेटिए ३०१ कोरोना संक्रमित</nuxt-link>
                  </h4>
                </div>
              </div>
            </div>
          </section>
          <Pagination />
        </div>

        <div class="col-md-3">
          <CategoryNewsMiniCard />
          <hr />
          <CategorySideAds />
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
      title: "अन्तर्राष्ट्रिय",
    };
  },
};
</script>

<style scoped lang="scss">
</style>
