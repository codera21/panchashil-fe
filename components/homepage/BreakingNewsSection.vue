<template>
  <section class="breakingNews-section">
    <div class="breakingNews-wrap">
      <h1 class="text-center">
        <nuxt-link to="/single-page">अन्ततः माइक्रोसफ्टले इन्टरनेट एक्सप्लोरर बन्द गर्ने</nuxt-link>
      </h1>

      <nuxt-link to="/single-page">
        <img
          src="http://lorempixel.com/500/350/"
          alt="प्रधानमन्त्री ओली रामभक्तको अवतारमा"
          class="img-fluid"
        />
      </nuxt-link>
      <nuxt-link to="/single-page">
        <p>
          काठमाडौं । कुनै समयको वेब ब्राउजरको बादशाह इन्टरनेट एक्सप्लोरर अन्ततः बन्द हुने भएको छ । सन् २०२१
          को अगष्ट २१ देखि इन्टरनेट एक्सप्लोरर औपचारिक रुपमा बन्द हुने माइक्रोसफ्टले जनाएको छ ।
        </p>
      </nuxt-link>
    </div>
    <div class="breakingNews-wrap">
      <h1>
        <nuxt-link to="/single-page">स्वास्थ्य मन्त्रालयका प्रशासन प्रमुख विष्ट सुदूरपश्चिममा सरुवा</nuxt-link>
      </h1>

      <nuxt-link to="/single-page">
        <img
          src="http://lorempixel.com/520/380/"
          alt="प्रधानमन्त्री ओली रामभक्तको अवतारमा"
          class="img-fluid lazy"
        />
      </nuxt-link>
      <nuxt-link to="/single-page">
        <p>
          काठमाडौं । १२ वर्षको वनवास र एक वर्षको अज्ञातवासको शर्त पूरा गरेपछि कौरवले पाण्डवलाई उनीहरुको
          राज्य फिर्ता दिनमात्र अश्वीकार गरेनन्, पाण्डवलाई केवल पाँच गाउँ दिएर ...
        </p>
      </nuxt-link>
    </div>
    <div class="breakingNews-wrap">
      <h1>
        <nuxt-link to="/single-page">निषेधाज्ञामा सुतेर नबसौं, धेरै सुत्नुका यस्ता छन् बेफाइदा</nuxt-link>
      </h1>

      <nuxt-link to="/single-page">
        <img
          src="http://lorempixel.com/650/320/"
          alt="ह्वाइट हाउस बाहिर गोली चलेपछि रोकियो ट्रम्पको प्रेस सम्मेलन"
          class="img-fluid lazy"
        />
      </nuxt-link>
      <nuxt-link to="/single-page">
        <p>
          काठमाडौं । १२ वर्षको वनवास र एक वर्षको अज्ञातवासको शर्त पूरा गरेपछि कौरवले पाण्डवलाई उनीहरुको
          राज्य फिर्ता दिनमात्र अश्वीकार गरेनन्, पाण्डवलाई केवल पाँच गाउँ दिएर ...
        </p>
      </nuxt-link>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "BreakingNewsSection",
  data() {
    return {
      items: [],
    };
  },
  created() {
    axios("https://api.panchasilmedia.com/public/api/admin/news" ).then(
      (res) => {
        this.items = res.data;
        console.log(this.items);
      }
    );
  },
};
</script>

<style scoped>
</style>