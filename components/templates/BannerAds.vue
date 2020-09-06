<template>
  <div>
    <a v-for="(item, index) in items" :key="index" :href="item.index">
      <img
        width="1536"
        height="213"
        src="https://via.placeholder.com/1536X213.png?text=Your Ads here"
        class="image wp-image-2734 attachment-full size-full lazy"
        style="max-width: 100%; height: auto;"
      />
    </a>
  </div>
</template>

<script>
export default {
  name: "Banner Ads",
  data() {
    return {
      items: [
        {
          link: "#",
          width: "1536",
          height: "213",
          imgSrc: "https://via.placeholder.com/1536X213.png?text=Your Ads here",
        },
      ],
    };
  },
};
</script>