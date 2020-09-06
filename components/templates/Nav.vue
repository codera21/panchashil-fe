<template>
  <header class="header">
    <div class="top-header">
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <div class="top-header--inner">
              <figure class="logo-img top-header--left">
                <nuxt-link to="/">
                  <img src="https://www.panchasilmedia.com/_nuxt/img/logoo.becd54a.png" alt />
                </nuxt-link>
              </figure>
              <section class="top-header--right">
                <div class="header-date">
                  <i class="far fa-calendar-alt"></i>

                  <!-- <SCRIPT LANGUAGE="Javascript">
                        
                        // Array of day names
                        var dayNames = new Array("Sunday", "Monday", "Tuesday", "Wednesday",
                        "Thursday", "Friday", "Saturday");
                        // Array of month Names
                        var monthNames = new Array(
                        "January", "February", "March", "April", "May", "June", "July",
                        "August", "September", "October", "November", "December");
                        var now = new Date();
                        document.write(dayNames[now.getDay()] + ", " +
                        now.getDate() + " " +
                        monthNames[now.getMonth()] + ", " + now.getFullYear());
                        
                  </SCRIPT>-->
                  बुधबार, भाद्र ६, २०७५
                </div>
              </section>
            </div>
          </div>
          <div class="col-md-9">
            <a href>
              <img
                width="1536"
                height="213"
                src="https://via.placeholder.com/1536X213.png?text=Your Ads here"
                class="image wp-image-2734 attachment-full size-full lazy"
                style="max-width: 100%; height: auto;"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="main-header">
      <div class="container position-relative">
        <nav class="desktop-nav greedy d-none d-lg-block">
          <ul class="liststyle--none links">
            <li v-for="(link,index) in navlinks" :key="index">
              <nuxt-link to="/category-page">{{link.name}}</nuxt-link>
            </li>
          </ul>
        </nav>
        <div
          class="menu menu--close6 mega-button d-lg-none toggle-btn"
          id="sidebar-btn"
          @click.prevent="hamopen"
        >
          <div class="menu__icon">
            <div class="menu__line menu__line--1"></div>
            <div class="menu__line menu__line--2"></div>
            <div class="menu__line menu__line--3"></div>
          </div>
        </div>
      </div>
    </div>
    <div id="nav-expand" class="nav-flyout">
      <div id="nav-expand-menu" class="container nav-flyout__container">
        <div v-for="(link,index) in navLinks" :key="index" class="nav-flyout__menu-item">
          <a href class="nav-flyout__section-title">{{link.name}}</a>
        </div>
        <!-- <div class="nav-flyout__menu-item">
          <a href class="nav-flyout__section-title">समाचार</a>
        </div>
        <div class="nav-flyout__menu-item">
          <a href class="nav-flyout__section-title">फोटो फिचर</a>
        </div>
        <div class="nav-flyout__menu-item">
          <a href class="nav-flyout__section-title">अर्थ</a>
        </div>
        <div class="nav-flyout__menu-item">
          <a href class="nav-flyout__section-title">खेलकुद</a>
        </div>
        <div class="nav-flyout__menu-item">
          <a href class="nav-flyout__section-title">पत्रपत्रिका</a>
        </div>
        <div class="nav-flyout__menu-item">
          <a href class="nav-flyout__section-title">मनोरञ्जन</a>
        </div>-->
      </div>
      <div class="nav-flyout-footer">
        <div class="nav-flyout-footer__social"></div>
      </div>
    </div>

    <div class="sidebar-container" :class="{ active: isActive }">
      <div class="overlay" @click.prevent="hamopen"></div>
      <div>
        <ul class="main-list">
          <li v-for="(link,index) in navlinks" :key="index" class="main-list-item">
            <nuxt-link to="/category-page">
              <span>{{link.name}}</span>
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "nav",
  data() {
    return {
      isActive: false,
      navlinks: [
        { name: "मुख्य पृष्ठ", link: "#" },
        { name: "समाचार", link: "#" },
        { name: "फोटो फिचर", link: "#" },
        { name: "अर्थ", link: "#" },
        { name: "खेलकुद", link: "#" },
        { name: "पत्रपत्रिका", link: "#" },
        { name: "विश्व", link: "#" },
        { name: "मनोरञ्जन", link: "#" },
        { name: "भिडियो", link: "#" },
        { name: "फोटो फिचर", link: "#" },
        { name: "अर्थ", link: "#" },
      ],
    };
  },
  methods: {
    hamopen() {
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style scoped lang="scss"></style>
