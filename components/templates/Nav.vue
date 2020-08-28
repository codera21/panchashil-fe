<template>
  <header class="header">
    <div class="top-header">
        <div class="container">
          <div class="row">
            <div class="col-md-3">
              <div class="top-header--inner">
                <figure class="logo-img top-header--left">
                    <img src="https://www.panchasilmedia.com/_nuxt/img/logoo.becd54a.png" alt="">
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
                        
                        </SCRIPT> -->

                        बुधबार, भाद्र ६, २०७५

                    </div>
                </section>
            </div>
            </div>
            <div class="col-md-9">
              <a href="">
                <img src="http://bg.annapurnapost.com/uploads/media/1000x90_20180521043922.gif" alt="">
              </a>
            </div>
          </div>
            

        </div>
    </div>
    <div class="main-header">
        <div class="container position-relative">
            <nav class="desktop-nav  greedy d-none d-lg-block">
                <ul class="liststyle--none links">
                    <li><a href="">मुख्य पृष्ठ</a></li>
                    <li><a href="">समाचार</a></li>
                    <li><a href="">फोटो फिचर</a></li>
                    <li><a href="">अर्थ</a></li>
                    <li><a href="">खेलकुद</a></li>
                    <li><a href="">पत्रपत्रिका</a></li>
                    <li><a href="">विश्व</a></li>
                    <li><a href="">मनोरञ्जन</a></li>
                    <li><a href="">भिडियो</a></li>
                    <li><a href="">फोटो फिचर</a></li>
                    <li><a href="">अर्थ</a></li>
                   
                </ul>
                
              
            </nav>
            <div class="menu menu--close6 mega-button  d-lg-none toggle-btn" id="sidebar-btn" @click.prevent="hamopen">
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
            <div class="nav-flyout__menu-item">
                <a href="" class="nav-flyout__section-title">मुख्य पृष्ठ</a>
                <ul class="liststyle--none nav-flyout__submenu">
                    <li class="nav-flyout__submenu-item">
                        <a href="" class="nav-flyout__submenu-link">nepal</a>
                    </li>
                    <li class="nav-flyout__submenu-item">
                        <a href="" class="nav-flyout__submenu-link">nepal</a>
                    </li>
                    <li class="nav-flyout__submenu-item">
                        <a href="" class="nav-flyout__submenu-link">nepal</a>
                    </li>
                    <li class="nav-flyout__submenu-item">
                        <a href="" class="nav-flyout__submenu-link">nepal</a>
                    </li>
                </ul>
            </div>
            <div class="nav-flyout__menu-item">
                <a href="" class="nav-flyout__section-title">समाचार</a>
                <ul class="liststyle--none nav-flyout__submenu">
                    <li class="nav-flyout__submenu-item">
                        <a href="" class="nav-flyout__submenu-link">nepal</a>
                    </li>
                    <li class="nav-flyout__submenu-item">
                        <a href="" class="nav-flyout__submenu-link">nepal</a>
                    </li>
                    <li class="nav-flyout__submenu-item">
                        <a href="" class="nav-flyout__submenu-link">nepal</a>
                    </li>
                    <li class="nav-flyout__submenu-item">
                        <a href="" class="nav-flyout__submenu-link">nepal</a>
                    </li>
                </ul>
            </div>
            <div class="nav-flyout__menu-item">
                <a href="" class="nav-flyout__section-title">फोटो फिचर</a>
                <ul class="liststyle--none nav-flyout__submenu">
                    <li class="nav-flyout__submenu-item">
                        <a href="" class="nav-flyout__submenu-link">nepal</a>
                    </li>
                    <li class="nav-flyout__submenu-item">
                        <a href="" class="nav-flyout__submenu-link">nepal</a>
                    </li>
                    <li class="nav-flyout__submenu-item">
                        <a href="" class="nav-flyout__submenu-link">nepal</a>
                    </li>
                    <li class="nav-flyout__submenu-item">
                        <a href="" class="nav-flyout__submenu-link">nepal</a>
                    </li>
                </ul>
            </div>
            <div class="nav-flyout__menu-item">
                <a href="" class="nav-flyout__section-title">अर्थ</a>
                <ul class="liststyle--none nav-flyout__submenu">
                    <li class="nav-flyout__submenu-item">
                        <a href="" class="nav-flyout__submenu-link">nepal</a>
                    </li>
                    <li class="nav-flyout__submenu-item">
                        <a href="" class="nav-flyout__submenu-link">nepal</a>
                    </li>
                    <li class="nav-flyout__submenu-item">
                        <a href="" class="nav-flyout__submenu-link">nepal</a>
                    </li>
                    <li class="nav-flyout__submenu-item">
                        <a href="" class="nav-flyout__submenu-link">nepal</a>
                    </li>
                    <li class="nav-flyout__submenu-item">
                        <a href="" class="nav-flyout__submenu-link">nepal</a>
                    </li>
                    <li class="nav-flyout__submenu-item">
                        <a href="" class="nav-flyout__submenu-link">nepal</a>
                    </li>
                    <li class="nav-flyout__submenu-item">
                        <a href="" class="nav-flyout__submenu-link">nepal</a>
                    </li>
                </ul>
            </div>
            <div class="nav-flyout__menu-item">
                <a href="" class="nav-flyout__section-title">खेलकुद</a>
                <ul class="liststyle--none nav-flyout__submenu">
                    <li class="nav-flyout__submenu-item">
                        <a href="" class="nav-flyout__submenu-link">nepal</a>
                    </li>
                    <li class="nav-flyout__submenu-item">
                        <a href="" class="nav-flyout__submenu-link">nepal</a>
                    </li>
                    <li class="nav-flyout__submenu-item">
                        <a href="" class="nav-flyout__submenu-link">nepal</a>
                    </li>
                    <li class="nav-flyout__submenu-item">
                        <a href="" class="nav-flyout__submenu-link">nepal</a>
                    </li>
                </ul>
            </div>
            <div class="nav-flyout__menu-item">
                <a href="" class="nav-flyout__section-title">पत्रपत्रिका</a>
                <ul class="liststyle--none nav-flyout__submenu">
                    <li class="nav-flyout__submenu-item">
                        <a href="" class="nav-flyout__submenu-link">nepal</a>
                    </li>
                    <li class="nav-flyout__submenu-item">
                        <a href="" class="nav-flyout__submenu-link">nepal</a>
                    </li>
                    <li class="nav-flyout__submenu-item">
                        <a href="" class="nav-flyout__submenu-link">nepal</a>
                    </li>
                    <li class="nav-flyout__submenu-item">
                        <a href="" class="nav-flyout__submenu-link">nepal</a>
                    </li>
                </ul>
            </div>
            <div class="nav-flyout__menu-item">
                <a href="" class="nav-flyout__section-title">मनोरञ्जन</a>
                <ul class="liststyle--none nav-flyout__submenu">
                    <li class="nav-flyout__submenu-item">
                        <a href="" class="nav-flyout__submenu-link">nepal</a>
                    </li>
                    <li class="nav-flyout__submenu-item">
                        <a href="" class="nav-flyout__submenu-link">nepal</a>
                    </li>
                    <li class="nav-flyout__submenu-item">
                        <a href="" class="nav-flyout__submenu-link">nepal</a>
                    </li>
                    <li class="nav-flyout__submenu-item">
                        <a href="" class="nav-flyout__submenu-link">nepal</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="nav-flyout-footer">
            <div class="nav-flyout-footer__social">

            </div>
        </div>
    </div>
    <div class="bottom-header d-none d-md-block">
        <div class="container">
            <nav class="menu-subnav">
                <span class="subnav--title">Hot topic</span>
                <ul class="liststyle--none">
                    <li><a href="">नेपाली चलचित्र</a></li>
                    <li><a href="">नेपाल प्रहरी</a></li>
                    <li><a href="">अपराध</a></li>
                    <li><a href="">केपी शर्मा ओली</a></li>
                    <li><a href="">प्रियंका कार्की</a></li>
                </ul>
            </nav>
        </div>
    </div>

   
<div class="sidebar-container" :class="{ 'active': isActive }">
    <div class="overlay" @click.prevent="hamopen"></div>
    <div>
 <!-- <form action="">
        <input type="text" placeholder="Search...">
    </form> -->
    <ul class="main-list">
        <li class="main-list-item"><a href=""><span>न्युज रूम</span></a>
            <!-- <ul class="submain-list">
                <li><a href="">one</a></li>
                <li><a href="">one</a></li>
                <li><a href="">one</a></li>
                <li><a href="">one</a></li>
                <li><a href="">one</a></li>
            </ul> -->
        </li>
        <li class="main-list-item"><a href=""><span>दृष्टिकोण</span></a></li>
        <li class="main-list-item"><a href=""><span>मल्टिमिडिया</span></a></li>
        <li class="main-list-item"><a href=""><span>अर्थ</span></a></li>
        <li class="main-list-item"><a href=""><span>सप्तरंग</span></a></li>
        <li class="main-list-item"><a href=""><span>लाइफस्टाइल</span></a></li>
        <li class="main-list-item"><a href=""><span>साहित्य</span></a></li>
        <li class="main-list-item"><a href=""><span>विदेश</span></a></li>
        <li class="main-list-item"><a href=""><span>खेलकुद</span></a></li>
        <li class="main-list-item"><a href=""><span>डायस्पोरा</span></a></li>
        <li class="main-list-item"><a href=""><span>सप्तरंग</span></a></li>
       
    </ul>
    <ul class="login-container">
        <li><a href="">नेपाली चलचित्र</a></li>
        <li><a href="">नेपाल प्रहरी</a></li>
        <li><a href="">अपराध</a></li>
        <li><a href="">केपी शर्मा ओली</a></li>
        <li><a href="">प्रियंका कार्की</a></li>
    </ul>

    </div>
   
</div>

    
</header>

</template>

<script>

export default {
    name:"nav",
    data(){
        return{
            isActive:false
        }
    },
    methods:{
        hamopen(){
            this.isActive = !this.isActive;
        }
    }
};
</script>

<style scoped lang="scss">


</style>
