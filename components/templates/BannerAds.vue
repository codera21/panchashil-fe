<template>
  <div class="rd-ads">
    <section class="widget">
      <img
        :width="adObj.width"
        :height="adObj.height"
        :src="adObj.imgSrc"
        class="image wp-image-2734 attachment-full size-full lazy"
        style="max-width: 100%; height: auto; display: none"
      />
    </section>
  </div>
</template>

<script>
export default {
  name: "BannerAds",
  props: ["adObj"],
};
</script>

<style scoped>
</style>
