<template>
  <header class="header">
    <div class="top-header">
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <div class="top-header--inner">
              <figure class="logo-img top-header--left">
                <nuxt-link to="/">
                  <img
                    src="https://user-images.githubusercontent.com/17085948/94036836-72e1e880-fde4-11ea-9d75-f5a2ea6e01f6.jpg"
                    alt
                  />
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
                  <!-- बुधबार, भाद्र ६, २०७५ -->
                  <iframe
                    scrolling="no"
                    border="0"
                    frameborder="0"
                    marginwidth="0"
                    marginheight="0"
                    allowtransparency="true"
                    src="https://www.ashesh.com.np/linknepali-time.php?dwn=only&font_color=333333&font_size=14&bikram_sambat=0&api=222199k398"
                    width="165"
                    height="22"
                    style="padding-top: 6px"
                  ></iframe>
                </div>
              </section>
            </div>
          </div>
          <div class="col-md-9"></div>
        </div>
      </div>
    </div>
    <div class="main-header">
      <div class="container position-relative">
        <nav class="desktop-nav greedy d-none d-lg-block">
          <ul class="liststyle--none links">
            <!-- <li v-for="(link, index) in navLinks" :key="`apple${index}`">
              <nuxt-link :to="`/categories/${link.category_id}`">{{
                link.category_name
              }}</nuxt-link>
            </li> -->
            <li
              class="nav-item dropdown"
              v-for="(link, index) in navLinks"
              :key="`apple${index}`"
            >
              <!-- 
                :to="`/categories/${link.category_id}`"

             -->
              <a
                href="#"
                class="nav-link dropdown-toggle py-0"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                >{{ link.category_name }}</a
              >
              <!-- {{ link }} -->
              <div class="dropdown-menu py-0" aria-labelledby="navbarDropdown">
                <nuxt-link
                  class="dropdown-item py-0"
                  :to="`/categories/${link.category_id}/${category.id}`"
                  v-for="category in link.sub_cat"
                  :key="category.id"
                  >{{ category.name }}</nuxt-link
                >
              </div>
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
        <div
          v-for="(link, index) in navLinks"
          :key="index"
          class="nav-flyout__menu-item"
        >
          <a href class="nav-flyout__section-title">{{ link.category_name }}</a>
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
          <li
            v-for="(link, index) in navLinks"
            :key="index"
            class="main-list-item"
          >
            <nuxt-link to="/category-page">
              <span>{{ link.category_name }}</span>
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
      navLinks: [],
    };
  },

  created() {
    this.$axios
      .get("https://admin.panchasilmedia.com/api/news/getcategory")
      .then(({ data }) => {
        this.navLinks = data.slice(0, 12);
      });
  },

  methods: {
    hamopen() {
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style scoped lang="scss">
.dropdown-menu {
  top: 40px;
  &:hover {
    display: block;
  }
}

.dropdown-toggle:hover + .dropdown-menu {
  display: block;
}

.dropdown-menu:hover ~ .dropdown-toggle {
  background-color: red !important;
}
</style>
