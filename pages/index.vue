<template>
<!--  <div class="container">-->
<!--    <div>-->
<!--      <Logo />-->
<!--      <h1 class="title">panchashil-fe</h1>-->
<!--      <div class="links">-->
<!--        <a-->
<!--          href="https://nuxtjs.org/"-->
<!--          target="_blank"-->
<!--          rel="noopener noreferrer"-->
<!--          class="button&#45;&#45;green"-->
<!--        >Documentation</a>-->
<!--        <a-->
<!--          href="https://github.com/nuxt/nuxt.js"-->
<!--          target="_blank"-->
<!--          rel="noopener noreferrer"-->
<!--          class="button&#45;&#45;grey"-->
<!--        >GitHub</a>-->

<!--        <b-button variant="success">Hello World</b-button>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
  <div class="container-fluid">
    <div class="row d-flex justify-content-between align-items-center">
      <div class="col-lg-3 rd-logo">
       <a href=""><img src="https://www.jhilko.com/wp-content/themes/Jhilko/img/jhilko-logo.svg" alt="jhilko logo"  class="img-fluid lazy"></a>
        <span class="date hide-mb">
					<div id="time">
						<!-- PRINTING NEPALI DATE AND TIME -->
						<span class="time_date">बिहीबार, साउन २२, २०७७ / Thursday, August 6, 2020</span>
					</div>
				</span>
        <!-- <span class="date hide-mb">15 April 2019, Saturday / १३ वैशाख २०७७, शनिबार</span> -->
      </div>
      <div class="col-lg-8">
        <section class="widget"><a href="https://www.jhilko.com/epaper/"><img width="1000" height="147" src="https://www.jhilko.com/wp-content/uploads/2020/07/samayabadda.gif" class="image wp-image-3897  attachment-full size-full lazy" alt="" style="max-width: 100%; height: auto;" /></a></section>			</div>
    </div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Breaking</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
        </ul>
        <span class="navbar-text">
      Navbar text with an inline element
    </span>
      </div>
    </nav>
    <hr>

    <div class="container-fluid">
    <div class="row">
      <div class="col-sm-3">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">कोरोना अप्डेट</h5>
            <a href="#" class="btn btn-primary">कोभिड-१९ समाचार</a>
          </div>
        </div>
      </div>
      <div class="col-sm-3">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
      <div class="col-sm-3">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
      <div class="col-sm-3">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
  </div>
<hr>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <h1>News</h1>
        </div>
        <div class="col-md-9">
          <div class="md-3">
        <div class="row">
          <div class="col-md-4">
            <div class="cat-post">
              <a href="https://www.jhilko.com/news/5784/">
                <img src="https://www.jhilko.com/wp-content/uploads/2020/08/hadtal-400x225.jpg" alt="खानामा किरा भेटिएपछि आईसोलेसनका संक्रमित भोक हडतालमा" height="100px">
              </a>
              <div class="cat-info">
                <a href="https://www.jhilko.com/news/5784/"><h3>खानामा किरा भेटिएपछि आईसोलेसनका संक्रमित भोक हडतालमा</h3></a>
              </div>
            </div>
          </div>
      </div>

    </div>
    </div>
      </div>
    </div>



  </div>
<!--  <div class="row">-->
<!--    <div class="col-sm-4">-->
<!--      <img src="https://www.jhilko.com/wp-content/themes/Jhilko/img/jhilko-logo.svg" width="300px"  class="img-fluid lazy">-->

<!--    </div>-->
<!--    <div class="col-sm-6">-->
<!--      <img src="https://www.jhilko.com/wp-content/themes/Jhilko/img/jhilko-logo.svg" width="300px" height="50px" class="img-fluid lazy">-->

<!--    </div>-->
<!--  </div>-->




</template>

<script>
export default {};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
