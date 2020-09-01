<template>
  <div class="news-mini-card">
    
    <ul>
      <li>
        <a href="" v-for="item in items" :key="item.id" class="mini-newscard">
          <figure>
            <img :src="item.imgSrc" :alt="item.imgAlt" />
          </figure>
          <h6>{{item.title}}</h6>
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
        {
          id: 0,
          imgSrc: "https://via.placeholder.com/1000X500?text=Relevant+Image",
          imgAlt: "alt title",
          title: "किशोरीमाथि तीन बालकलाई बलात्कार गर्न लगाएपछि",
        },
        {
          id: 1,
          imgSrc: "https://via.placeholder.com/1000X500?text=Relevant+Image",
          imgAlt: "alt title",
          title: "किशोरीमाथि तीन बालकलाई बलात्कार गर्न लगाएपछि",
        },
      ],
    };
  },
};
</script>
