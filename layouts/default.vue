<template>
  <div class="">
    <!-- <TopNav /> -->
    <Nav />

    <CardItems />

    <Nuxt />
    <Footer />
  </div>
</template>


<script>
import Footer from "../components/templates/Footer";
import TopNav from "../components/templates/TopNav";
import Nav from "../components/templates/Nav";
import CardItems from "../components/templates/CardItems";
import Content from "../components/templates/Description";
export default {
  components: { Content, Footer, TopNav, Nav, CardItems },
  head: {
    link: [
      {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.0.6/css/all.css",
      },
    ],
    meta:[
      {
        name:"viewport",
        content:"width=device-width,initial-scale=1.0"
      }
    ],

  },
};
</script>
