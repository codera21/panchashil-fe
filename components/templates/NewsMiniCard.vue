<template>
  <div class="news-mini-card">
    <ul>
      <li>
        <a href="" v-for="item in items" :key="item.id" class="mini-newscard">
          <figure>
            <img :src="item.image" :alt="item.title" />
          </figure>
          <h6>{{ item.title }}</h6>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      miniCardTitle: "लोकप्रिय",
      items: [
        // {
        //   id: 0,
        //   imgSrc: "https://via.placeholder.com/1000X500?text=Relevant+Image",
        //   imgAlt: "alt title",
        //   title: "किशोरीमाथि तीन बालकलाई बलात्कार गर्न लगाएपछि",
        // },
        // {
        //   id: 1,
        //   imgSrc: "https://via.placeholder.com/1000X500?text=Relevant+Image",
        //   imgAlt: "alt title",
        //   title: "किशोरीमाथि तीन बालकलाई बलात्कार गर्न लगाएपछि",
        // },
      ],
    };
  },
  created() {
    this.$axios
      .get(
        "https://api.panchasilmedia.com/api/admin/news/default/type/all/category"
      )
      .then(({ data }) => {
        this.items = data.slice(Math.max(data.length - 2, 0));
      });
  },
};
</script>
