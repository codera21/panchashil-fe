<template>
  <div class="mero-desh fourGrid-section">
    <div class="container">
      <div class="grid-title">
        <span>ताजा खबर</span>
      </div>

      <div class="row">
        <div class="col-md-3 mb-3">
          <div class="fourGrid-section-card box-shadow">
            <nuxt-link to="/single-page">
              <img src="http://lorempixel.com/405/227/" alt class="img-fluid" />
            </nuxt-link>
            <nuxt-link to="/single-page">
              <span
                class="card-title"
              >कोरोनाबाट मृत्यु भएका पुरुषको रिपोर्ट : कहिले नेगेटिभ, कहिले पोजेटिभ !</span>
            </nuxt-link>
          </div>
        </div>
        <div class="col-md-3 mb-3">
          <div class="fourGrid-section-card box-shadow">
            <nuxt-link to="/single-page">
              <img src="http://lorempixel.com/405/227/" alt class="img-fluid" />
            </nuxt-link>
            <nuxt-link to="/single-page">
              <span
                class="card-title"
              >कोरोनाबाट मृत्यु भएका पुरुषको रिपोर्ट : कहिले नेगेटिभ, कहिले पोजेटिभ !</span>
            </nuxt-link>
          </div>
        </div>
        <div class="col-md-3 mb-3">
          <div class="fourGrid-section-card box-shadow">
            <nuxt-link to="/single-page">
              <img src="http://lorempixel.com/405/227/" alt class="img-fluid" />
            </nuxt-link>
            <nuxt-link to="/single-page">
              <span
                class="card-title"
              >कोरोनाबाट मृत्यु भएका पुरुषको रिपोर्ट : कहिले नेगेटिभ, कहिले पोजेटिभ !</span>
            </nuxt-link>
          </div>
        </div>
        <div class="col-md-3 mb-3">
          <div class="fourGrid-section-card box-shadow">
            <nuxt-link to="/single-page">
              <img src="http://lorempixel.com/405/227/" alt class="img-fluid" />
            </nuxt-link>
            <nuxt-link to="/single-page">
              <span
                class="card-title"
              >कोरोनाबाट मृत्यु भएका पुरुषको रिपोर्ट : कहिले नेगेटिभ, कहिले पोजेटिभ !</span>
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