<template>
  <div class="module2-widget box-shadow">
    <div class="module2-widget-wrapper">
      <h2 class="module__title">
        <nuxt-link to="/category-page">{{catTitle}}</nuxt-link>
      </h2>
      <div class="data-holder">
        <div class="section-ordering">
          <div class="media-list__item">
            <div class="media">
              <div class="media__image">
                <img
                  src="https://www.jhilko.com/wp-content/uploads/2020/08/covid-vaccine-1-400x225.jpg"
                  class
                  alt
                />
              </div>
              <div class="media__content">
                <h3 class="media__title">
                  <nuxt-link class="media__link" to="/single-page">गोसाइँकुण्डमा भक्तजनको भीड</nuxt-link>
                </h3>
              </div>
            </div>
          </div>
          <div class="clearfix"></div>
          <p class>
            <nuxt-link
              to="/category-page"
              title
            >भड्किलो तीज : हुनेखाने र हुँदा खानेबीचको दूरी बढाउँदै</nuxt-link>
          </p>
          <p class>
            <nuxt-link to="/category-page" title>छुट्टाछुटै घटनामा दुई जनाको मृत्यु</nuxt-link>
          </p>
          <p class>
            <nuxt-link
              to="/category-page"
              title
            >पहिरोका कारण अवरुद्ध पासाङल्हामु राजमार्ग खुलाउन आग्रह</nuxt-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageCategory",
  props: ["catTitle"],
};
</script>

<style lang="scss">
</style>