<template>
  <div class="cat-side-ads" style="display: none">
    <div v-for="item in items" :key="item.id" class="advertisement my-2">
      <figure>
        <a :href="item.lnk" :title="item.title" target="_blank">
          <img :src="item.src" alt />
        </a>
      </figure>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      items: [
        {
          id: 0,
          lnk: "#",
          title: "ads title 0",
          src: "https://via.placeholder.com/330X90?text=Your Ad Here",
          isGif: false,
        },
        {
          id: 1,
          lnk: "#",
          title: "ads title 1",
          src: "https://via.placeholder.com/330X90?text=Your Ad Here",
          isGif: false,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.advertisement {
  margin-bottom: 0.5em;
}
</style>