<template>
  <footer class="footer">
    <div class="top-footer">
      <div class="container">
        <div class="footer-logo-social">
          <div class="footer-logo">
            <nuxt-link to="/" class="logoname">
              <img
                src="https://www.panchasilmedia.com/_nuxt/img/logoo.becd54a.png"
                alt
              />
            </nuxt-link>
          </div>
          <div class="footer-social-icons">
            <div class="footer-social-icons-text"></div>
            <div class="link-follow">
              <a class="twitter fab fa-twitter" title="Twitter" href></a>
              <a class="instagram fab fa-instagram" title="instagram" href></a>
              <a
                class="googleplus fab fa-google-plus-g"
                title="Google"
                href
              ></a>
              <a class="facebook fab fa-facebook-f" title="Facebook" href></a>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-3">
            <div class="left-title footer-title">Help</div>
            <ul class="contact-details liststyle--none">
              <li>
                <strong>Location:</strong>
                <a href>Maharajganj 3, Kathmandu</a>
              </li>
              <li>
                <strong>Call us:</strong>
                <a href="#">977-1-4432099</a>
              </li>
              <li>
                <strong>Email:</strong>
                <a href="#">panchasilnews@gmail.com</a>
              </li>
              <li>
                <strong>Email:</strong>
                <a href="#"> panchasilmedia@gmail.com</a>
              </li>
            </ul>
          </div>
          <div class="col-md-3">
            <div class="left-title footer-title">Who are we?</div>
            <p>
              Panchasilmedia.com is a Nepali language news portal operated by
              Panchasil Media Pvt Ltd Since 2020AD. This portal focus on
              national political, social and economic issues, posts breaking
              news, investigative reports as well as content related to
              education, science and technology, cultural activities, lifestyle,
              health, sports, entertainment international news and literature.
            </p>
          </div>

          <div class="col-md-3">
            <div class="left-title footer-title">Team</div>
            <ul class="liststyle--none footer-our-team">
              <li>
                <h5>Managing Director/Editor</h5>
                <span class="font-weight-bold">Hrig Devkota</span>
                <p>9851150181</p>
              </li>
              <li>
                <h5>Department of information and Boardcasting</h5>
                <span class="font-weight-bold">Regd Number</span>
                <p></p>
              </li>
            </ul>
          </div>
          <div class="col-md-3">
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fpanchasilmedia&tabs=events&width=307&height=130&small_header=false&adapt_container_width=true&hide_cover=true&show_facepile=true&appId=1035163146859672"
              width="100%"
              height="100%"
              style="border: none; overflow: hidden"
              frameborder="0"
              allowtransparency="true"
              allow="encrypted-media"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom-footer">
      <span>
        Copyright © 2018 All Rights Reserved. Developed by
        <a href>Info</a>
      </span>
    </div>
  </footer>
</template>

<script>
export default {
  head: {
    link: [
      {
        rel: "stylesheet",
        href:
          "https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css",
      },
    ],
  },
};
</script>

<style scoped lang="scss">
.footer {
  .top-footer {
    background-color: #22282e;
    color: #fff;
    // color: #898d90;
    // background: #f5deb4;
    padding-bottom: 2rem;
  }
  .footer-logo-social {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.2em 0;
    border-bottom: 1px solid white;
    margin-bottom: 2rem;
  }
  .footer-social-icons {
    display: flex;
    align-items: center;
    &-text {
      margin-right: 10px;
    }
  }
  .logoname {
    font-size: 2rem;
    font-weight: bold;
    color: white;
    //font-family: 'Noto Sans', sans-serif;
    letter-spacing: 2px;
    line-height: 3rem;
    width: 100px;
    display: block;
    border-radius: 50%;
    overflow: hidden;
  }
  .contact h4 {
    color: white;
    font-size: 14px;
  }
  .link-follow a {
    font-size: 1.4rem;
    margin: 0 20px 5px 0;
    display: inline-block;
    color: white;
    transition: color 0.1s linear;
    &.twitter:hover {
      color: #55acee;
    }
    &.instagram:hover {
      color: #e4405f;
    }
    &.googleplus:hover {
      color: #dd4b39;
    }
    &.facebook:hover {
      color: #3b5999;
    }
  }
  .footer-title {
    font-size: 1rem;
    font-weight: bold;
    text-transform: capitalize;
    letter-spacing: 1px;
    margin-bottom: 1.4rem;
    color: white;
    @media screen and (max-width: 1092px) {
      margin-top: 1.4rem;
      margin-bottom: 5px;
    }
  }
  .contact-details {
    li {
      font-size: 15px;
      line-height: 32px;
      color: #fff;
    }
  }
  ul {
    line-height: 24px;
    li {
      font-size: 15px;
    }
    a {
      color: white;
      transition: color 0.1s linear;
      font-size: 14px;
      &:hover {
        color: white;
      }
    }
  }
  p,
  b {
    // color: #898d90;
  }
  .bottom-footer {
    // background: darken(#f5deb4, 5%);
    // background: darken(#f5deb4, 5%);
    background-color: #22282e;
    text-align: center;
    font-size: 12px;
    padding: 1% 0;
    color: white;
    a {
      color: #1688ca;
    }
  }
  .footer-our-team {
    h5 {
      color: white;
    }
  }
}
</style>
