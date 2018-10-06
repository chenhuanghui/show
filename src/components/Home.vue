<template>
  <div class="hello">
    <h1 id="test">hahaahahaha</h1>
    <div>
      <img style="height: 150px; transform: rotate(-90deg); position: absolute; top: 300px; left: -120px" src="img/pattern_line.jpg" />
      <img style="height: 150px; transform: rotate(90deg); position: absolute; top: 800px; right: -120px" src="img/pattern_line.jpg" />
      <img style="height: 350px; position: absolute; top: 1400px;-webkit-transform: scaleX(-1);transform: scaleX(-1);" src="img/pattern_lotus.jpg" />
      <img style="height: 150px; transform: rotate(90deg); position: absolute; top: 1800px; right: -120px" src="img/pattern_line.jpg" />
      <img style="height: 150px; transform: rotate(-90deg); position: absolute; top: 2300px; left: -120px" src="img/pattern_line.jpg" />
      <img style="height: 350px; position: absolute; top: 2500px;right: 0px;" src="img/pattern_lotus.jpg" />
      <img style="height: 350px; position: absolute; top: 3300px;-webkit-transform: scaleX(-1);transform: scaleX(-1);" src="img/pattern_lotus.jpg" />
      <img style="height: 350px; position: absolute; top: 3700px;right: 0px;" src="img/pattern_lotus.jpg" />
      <img style="height: 150px; transform: rotate(-90deg); position: absolute; top: 4300px; left: -120px" src="img/pattern_line.jpg" />
    </div>
    <div class="is-mobile"></div>
    <!-- LOADER -->
    <div id="loader-wrapper">
        <div class="cssload-container">
            <div class="cssload-whirlpool"></div>
        </div>
    </div>
    <!-- LOADER -->
    <!-- HEADER -->
    <div class="header-style header-style2">
      <div>
        <img style="height: 100%; position: absolute; top: 0; right: 0" src="../assets/img/pattern_line.jpg" />
      </div>
      <div class="hamburger-icon3">
          <span></span>
          <span></span>
          <span></span>
      </div>
      <div class="header-content">

        <div class="row">
          <div class="col-xs-6 col-sm-2">
            <a class="logo" href="index.html"> <img src="../assets/img/logo.png" alt="#" /> </a>
          </div>
        </div>

        <div class="section"> <p> Mô tả </p> </div>

        <div class="category">
          <span class="small-1">DANH MỤC</span>
          <ul>
            <li class="active">Tất Cả</li>
            <li>Hoa Đất Việt</li>
          </ul>
        </div>

        <div class="mob-icon"></div>
      </div>
    </div>
    <!-- HEADER -->
    
    <!-- OVERLAY-MENU -->
    <div class="overlay-wrapper height-min">
        <div class="overlay-animation"></div>
        <div class="flex">
            <div class="flex-in">
                <div class="overlay-menu">
                    <div class="container">
                        <div class="row">
                            <div class="btn-close"><span></span><span></span></div>
                            <div class="col-lg-2 col-lg-offset-5">
                                <ul>
                                    <li class="dropdown-plus">
                                        <a href="index.html">HOME</a>
                                        <span></span>
                                        <ul>
                                            <li><a href="index.html">Home #1</a></li>
                                            <li><a href="index2.html">Home #2</a></li>
                                            <li><a href="index3.html">Home #3</a></li>
                                            <li><a href="index4.html">Home #4</a></li>
                                            <li><a href="index5.html">Home #5</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="about.html">ABOUT</a>
                                    </li>
                                    <li>
                                        <a href="detail.html">SHOWS</a>
                                    </li>
                                    <li class="dropdown-plus">
                                        <a href="blog.html">BLOG</a>
                                        <span></span>
                                        <ul>
                                            <li><a href="blog.html">Blog</a></li>
                                            <li><a href="blogdetail.html">Blog detail</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="contact.html">CONTACT</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- end OVERLAY-MENU -->

     <!-- content -->
    <div id="content-wrapper">

        <div class="skrollr-item square-xs" data-0="top: 215px; left: 180px; -ms-transform: rotate(30deg); -webkit-transform: rotate(30deg); transform: rotate(30deg);" data-400="top: 250px; left: 250px; -ms-transform: rotate(60deg); -webkit-transform: rotate(60deg); transform: rotate(60deg);"></div>
        <div class="skrollr-item triangle-md" data-0="top: 715px; left: 870px; -ms-transform: rotate(20deg); -webkit-transform: rotate(20deg); transform: rotate(20deg);" data-400="top: 730px; left: 770px; -ms-transform: rotate(-20deg); -webkit-transform: rotate(-20deg); transform: rotate(-20deg);"></div>
        <div class="skrollr-item square-md" data-0="top: 460px; right: 355px; -ms-transform: rotate(0deg); -webkit-transform: rotate(0deg); transform: rotate(0deg);" data-400="top: 520px; right: 280px; -ms-transform: rotate(0deg); -webkit-transform: rotate(0deg); transform: rotate(0deg);-ms-transform: rotate(30deg); -webkit-transform: rotate(30deg); transform: rotate(30deg);"></div>
        <div class="skrollr-item circle-sm" data-0="top: 675px; left: 400px;" data-600="top: 500px; left: 600px;"></div>
        <div class="skrollr-item circle-lg" data-0="top: 690px; right: 635px;" data-700="top: 780px; right: 670px;"></div>
        <div class="skrollr-item square-xs" data-0="top: 750px; right: 190px; -ms-transform: rotate(0deg); -webkit-transform: rotate(0deg); transform: rotate(0deg);" data-700="top: 900; right: 250px; -ms-transform: rotate(-30deg); -webkit-transform: rotate(-30deg); transform: rotate(-30deg);"></div>
        <div class="skrollr-item triangle-sm" data-0="top: 1435px; left: 440px; -ms-transform: rotate(0deg); -webkit-transform: rotate(0deg); transform: rotate(0deg);" data-1200="top: 1300px; left: 340px; -ms-transform: rotate(-30deg); -webkit-transform: rotate(-30deg); transform: rotate(-30deg);"></div>
        <div class="skrollr-item circle-md" data-0="top: 1370px; left: 625px;" data-1200="top: 1200px; left: 725px;"></div>
        <div class="skrollr-item square-lg" data-0="top: 1360px; right: 325px; -ms-transform: rotate(0deg); -webkit-transform: rotate(0deg); transform: rotate(0deg);" data-1200="top: 1160px; right: 225px; -ms-transform: rotate(-120deg); -webkit-transform: rotate(-120deg); transform: rotate(-120deg);"></div>
        <div class="skrollr-item triangle-sm" data-0="top: 1740px; left: 850px; -ms-transform: rotate(0deg); -webkit-transform: rotate(0deg); transform: rotate(0deg);" data-1400="top: 1980px; left: 1050px; -ms-transform: rotate(30deg); -webkit-transform: rotate(30deg); transform: rotate(30deg);"></div>
        <div class="skrollr-item circle-sm" data-0="top: 1665px; left: 290px;" data-1500="top: 1465px; left: 250px;"></div>
        <div class="skrollr-item square-xs" data-0="top: 1840px; left: 410px; -ms-transform: rotate(0deg); -webkit-transform: rotate(0deg); transform: rotate(0deg);" data-1500="top: 1570px; left: 610px; -ms-transform: rotate(140deg); -webkit-transform: rotate(140deg); transform: rotate(140deg);"></div>
        <div class="skrollr-item square-sm" data-0="top: 2040px; left: 630px; -ms-transform: rotate(0deg); -webkit-transform: rotate(0deg); transform: rotate(0deg);" data-1200="top: 1970px; left: 430px; -ms-transform: rotate(-180deg); -webkit-transform: rotate(-180deg); transform: rotate(-180deg);"></div>
        <div class="skrollr-item circle-lg" data-0="top: 1640px; right: 165px;" data-1200="top: 1540px; right: 265px;"></div>
        <div class="skrollr-item triangle-md" data-0="top: 2490px; left: 520px; -ms-transform: rotate(30deg); -webkit-transform: rotate(30deg); transform: rotate(30deg);" data-1300="top: 2560px; left: 660px; -ms-transform: rotate(-30deg); -webkit-transform: rotate(-30deg); transform: rotate(-30deg);"></div>
        <div class="skrollr-item triangle-md" data-0="top: 2990px; right: 520px; -ms-transform: rotate(30deg); -webkit-transform: rotate(30deg); transform: rotate(30deg);" data-1600="top: 3060px; right: 660px; -ms-transform: rotate(30deg); -webkit-transform: rotate(30deg); transform: rotate(30deg);"></div>
        <div class="skrollr-item triangle-md" data-0="top: 3200px; right: 520px; -ms-transform: rotate(30deg); -webkit-transform: rotate(30deg); transform: rotate(30deg);" data-1800="top: 3800px; right: 400px; -ms-transform: rotate(-30deg); -webkit-transform: rotate(-30deg); transform: rotate(-30deg);"></div>
        <div class="skrollr-item triangle-md" data-0="top: 3600px; right: 520px; -ms-transform: rotate(30deg); -webkit-transform: rotate(30deg); transform: rotate(30deg);" data-1900="top: 4300px; left: 200px; -ms-transform: rotate(30deg); -webkit-transform: rotate(30deg); transform: rotate(30deg);"></div>

        <div class="empty-space h150-sm h75-xs"></div>
        <div class="container-fluid-style1">
          <div class="align-wrapper">
            <div class="img-block-wrapper">
                <div class="empty-space h55-xs h110-lg"></div>
                <div class="img-block">
                    <a class="not-link">
                    <img src="../assets/img/hero_banner.png"  srcset="../assets/img/hero_banner@2x.png 2x" alt="">
                    </a>
                    <div class="description-wrapper">
                        <div class="description">
                           <a class="biggest-1 mouseover-1">Galina Show</a>
                           <div class="empty-space h5-xs"></div>
                           <p class="small-s">Đến với cuộc hành trình đặc biệt này, bạn sẽ được ngắm nhìn, lắng nghe, thưởng thức và đắm chìm trong những không gian đậm đà bản sắc đất Việt.</p>
                        </div>
                        <div class="col-md-12">
                            <a class="btn-style3" href="#">ĐẶT VÉ NGAY</a>
                        </div>
                    </div>
                </div>
            </div>
          </div>
            <div class="align-wrapper">
                <div class="img-block-wrapper">
                    <div class="empty-space h55-xs h110-lg"></div>
                    <div class="img-block">
                        <a href="#"><img src="../assets/img/Pic01.png" alt=""></a>
                        <div class="description-wrapper">
                            <div class="description">
                               <a class="biggest-1 mouseover-1">Lời ru Âu Lạc</a>
                               <div class="empty-space h5-xs"></div>
                               <p class="small-s">Múa dân tộc Kinh</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="img-block-wrapper">
                    <div class="empty-space h55-xs h110-sm h220-lg"></div>
                    <div class="img-block">
                        <a href="#"><img src="../assets/img/Pic02.png" alt=""></a>
                        <div class="description-wrapper">
                            <div class="description">
                               <a class="biggest-1 mouseover-1">Hoa núi</a>
                               <div class="empty-space h5-xs"></div>
                               <p class="small-2">Múa dân tộc Thái</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="img-block-wrapper text-bottom">
                    <div class="empty-space h55-xs h110-lg"></div>
                    <div class="img-block">
                        <a href="#"><img src="../assets/img/Pic03.png" alt=""></a>
                        <div class="description-wrapper">
                            <div class="description">
                               <a class="biggest-1 mouseover-1">Men tình</a>
                               <div class="empty-space h5-xs"></div>
                               <p class="small-2">Múa dân tộc H’mong</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="img-block-wrapper">
                    <div class="empty-space h55-xs h110-sm h220-lg"></div>
                    <div class="img-block">
                        <a href="#"><img src="../assets/img/Pic04.png" alt=""></a>
                        <div class="description-wrapper">
                            <div class="description">
                               <a class="biggest-1 mouseover-1">Thời trang các dân tộc Việt Nam</a>
                               <div class="empty-space h5-xs"></div>
                               <p class="small-2">Trình diễn trang phục dân tộc</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="img-block-wrapper">
                    <div class="empty-space h55-xs h110-lg"></div>
                    <div class="img-block">
                        <a href="#"><img src="../assets/img/Pic05.png" alt=""></a>
                        <div class="description-wrapper">
                            <div class="description">
                               <a class="biggest-1 mouseover-1">Nét trù</a>
                               <div class="empty-space h5-xs"></div>
                               <p class="small-2">Ca cảnh</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="img-block-wrapper">
                    <div class="empty-space h55-xs h110-sm h220-lg"></div>
                    <div class="img-block">
                        <a href="#"><img src="../assets/img/Pic06.png" alt=""></a>
                        <div class="description-wrapper">
                            <div class="description">
                               <a class="biggest-1 mouseover-1">Đào liễu</a>
                               <div class="empty-space h5-xs"></div>
                               <p class="small-2"> Làn điệu chèo</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="img-block-wrapper">
                    <div class="empty-space h55-xs h110-lg"></div>
                    <div class="img-block">
                        <a href="#"><img src="../assets/img/Pic07.png" alt=""></a>
                        <div class="description-wrapper">
                            <div class="description">
                               <a class="biggest-1 mouseover-1">Nhịp thở Hương Giang</a>
                               <div class="empty-space h5-xs"></div>
                               <p class="small-2">Di sản Huế - Hầu văn</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="img-block-wrapper text-bottom">
                    <div class="empty-space h55-xs h110-sm h220-lg"></div>
                    <div class="img-block">
                        <a href="#"><img src="../assets/img/Pic08.png" alt=""></a>
                        <div class="description-wrapper">
                            <div class="description">
                               <a class="biggest-1 mouseover-1">Thời trang áo dài</a>
                               <div class="empty-space h5-xs"></div>
                               <p class="small-2">Áo dài miền Trung (lấy ý tưởng từ biển)</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="img-block-wrapper">
                    <div class="empty-space h55-xs h110-lg"></div>
                    <div class="img-block">
                        <a href="#"><img src="../assets/img/Pic09.png" alt=""></a>
                        <div class="description-wrapper">
                            <div class="description">
                               <a class="biggest-1 mouseover-1">Múa Chăm</a>
                               <div class="empty-space h5-xs"></div>
                               <p class="small-2">Lấy ý tưởng từ Tháp Bà – Nha Trang</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="img-block-wrapper">
                    <div class="empty-space h55-xs h110-sm h220-lg"></div>
                    <div class="img-block">
                        <a href="#"><img src="../assets/img/Pic10.png" alt=""></a>
                        <div class="description-wrapper">
                            <div class="description">
                               <a class="biggest-1 mouseover-1">Truyền lửa</a>
                               <div class="empty-space h5-xs"></div>
                               <p class="small-2">Múa Tây Nguyên</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="img-block-wrapper text-bottom">
                    <div class="empty-space h55-xs h110-lg"></div>
                    <div class="img-block">
                        <a href="#"><img src="../assets/img/Pic11.png" alt=""></a>
                        <div class="description-wrapper">
                            <div class="description">
                               <a class="biggest-1 mouseover-1">Hạt vàng</a>
                               <div class="empty-space h5-xs"></div>
                               <p class="small-2">Về miền Cửu long sông nước</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="img-block-wrapper text-bottom">
                    <div class="empty-space h55-xs h110-sm h220-lg"></div>
                    <div class="img-block">
                        <a href="#"><img src="../assets/img/Pic12.png" alt=""></a>
                        <div class="description-wrapper">
                            <div class="description">
                               <a class="biggest-1 mouseover-1">Hoa Sen</a>
                               <div class="empty-space h5-xs"></div>
                               <p class="small-2">Trình diễn thời trang</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="empty-space h55-xs h95-sm"></div>

        <!-- footer -->
        <footer class="footer-style footer-style2">
            <div class="container">
                <div class="row">
                    <div class="col-md-3 col-sm-4 col-xs-12 text-left">
                        <a class="logo" href="index.html">
                            <img src="../assets/img/logo.png" alt="#" />
                        </a>
                        <div class="empty-space h15-xs h0-md"></div>
                    </div>
                    <div class="col-md-5 col-sm-8 col-xs-12">
                    
                    </div>
                    <div class="col-md-4 col-sm-12 text-right">
                        <form class="subscribe-form">
                            <div class="input-wrapper">
                                <div class="input-style">
                                    <input id="input" name="email" type="text">
                                    <label for="input">E-mail</label>
                                </div>
                                <button class="btn-style1" type="submit"><span>ĐĂNG KÝ</span></button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="empty-space h40-xs fl"></div>
                <div class="row">
                    <div class="col-xs-12">
                        <div class="follow">
                            <a class="social" href="https://www.facebook.com/" target="_blank">
                                <i class="fa fa-facebook" aria-hidden="true"></i>
                            </a>
                            <a class="social" href="https://www.instagram.com/" target="_blank">
                                <i class="fa fa-instagram" aria-hidden="true"></i>
                            </a>
                            <a class="social" href="https://www.pinterest.com/" target="_blank">
                                <i class="fa fa-pinterest-p" aria-hidden="true"></i>
                            </a>
                            <a class="social" href="https://www.twitter.com/" target="_blank">
                                <i class="fa fa-twitter" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="empty-space h35-xs fl"></div>
                <div class="row">
                    <div class="col-xs-12">
                        <div class="copyright normal-s">
                            &copy; 2018 All rights reserved. Galina Show by <a href="http://haidanggroup.com" target="blank">Hai Dang Group</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <!-- footer -->
                <!-- Swiper -->
        <div class="swiper-under-footer">
            <div class="swiper-container" data-speed="1000" data-breakpoints="1" data-slides-per-view="9" data-xs-slides="3" data-sm-slides="5" data-md-slides="7" data-lg-slides="9">
                <div class="swiper-wrapper">
                    <div class="swiper-slide"><a href="#"><img src="../assets/img/im01.png" alt="#"></a></div>
                    <div class="swiper-slide"><a href="#"><img src="../assets/img/im02.png" alt="#"></a></div>
                    <div class="swiper-slide"><a href="#"><img src="../assets/img/im03.png" alt="#"></a></div>
                    <div class="swiper-slide"><a href="#"><img src="../assets/img/im04.png" alt="#"></a></div>
                    <div class="swiper-slide"><a href="#"><img src="../assets/img/im05.png" alt="#"></a></div>
                    <div class="swiper-slide"><a href="#"><img src="../assets/img/im06.png" alt="#"></a></div>
                    <div class="swiper-slide"><a href="#"><img src="../assets/img/im07.png" alt="#"></a></div>
                    <div class="swiper-slide"><a href="#"><img src="../assets/img/im08.png" alt="#"></a></div>
                    <div class="swiper-slide"><a href="#"><img src="../assets/img/im09.png" alt="#"></a></div>
                    <div class="swiper-slide"><a href="#"><img src="../assets/img/im01.png" alt="#"></a></div>
                    <div class="swiper-slide"><a href="#"><img src="../assets/img/im02.png" alt="#"></a></div>
                    <div class="swiper-slide"><a href="#"><img src="../assets/img/im03.png" alt="#"></a></div>
                    <div class="swiper-slide"><a href="#"><img src="../assets/img/im04.png" alt="#"></a></div>
                    <div class="swiper-slide"><a href="#"><img src="../assets/img/im05.png" alt="#"></a></div>
                </div>
            </div>
        </div>
    </div>
    <!-- content -->

    <!-- SUBSCRIBE -->
    <div class="submit text-popup overlay">
        <div class="animation-wrapper full-size"></div>
        <div class="content-wrapper full-size">
            <div class="cell-view page-height">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 col-md-offset-3 text-center">
                            <div class="h2 white"><b class="text-popup-title">submit</b></div>
                            <div class="empty-space h15-xs"></div>
                            <div class="white text-popup-message">
                                The following fields should be filled:- Name - Email - Your Message
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <a class="button-close"></a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello '
    }
  }
}
</script>