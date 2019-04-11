<template lang="pug">
div
  section#home
    div.js-carousel.slick-initialized.slick-slider.slick-dotted(data-infinite='true' data-fade='true' data-speed='5000' data-pagi-classes='u-carousel-indicators-v1 g-absolute-centered--x g-bottom-30')
      div.slick-list.draggable
        div.slick-track(style='opacity: 1; width: 2904px;')
          BgOverlay          
            div.u-bg-overlay__inner.g-flex-centered.g-height-100vh.g-min-height-600.g-py-40
              div.container
                h2.h2.text-uppercase.g-line-height-1_2.g-letter-spacing-1.g-font-size-40.g-font-size-65--md.g-color-white.g-mb-40
                  | Noah's 
                  strong.g-font-weight-700er Arc
                div.g-mb-45
                  div.d-inline-flex.text-uppercase.g-font-weight-600.g-font-size-11.g-mr-10.g-mb-10.g-mb-0--md
                    span.u-label.u-ns-bg-v7-right.g-bg-black.g-px-20.g-py-14 Needing Sponsorship
                    span.u-label.g-color-gray-dark-v1.g-font-weight-700.g-bg-primary.g-px-20.g-py-14 {{childrenCount}} 5 Children
                div
                  router-link.btn.btn-xxl.text-uppercase.u-btn-primary.g-font-weight-700.g-font-size-11.g-color-gray-dark-v1.g-color-gray-dark-v1--hover.rounded-0.g-py-10.g-py-20--md.g-px-15.g-px-25--md.g-mr-10(to='/sponsor')
                    FAIcon(icon="heart")
                    |  Sponsor a Child
                  a.btn.btn-xxl.text-uppercase.u-btn-primary.g-font-weight-700.g-font-size-11.g-color-gray-dark-v1.g-color-gray-dark-v1--hover.rounded-0.g-py-10.g-py-20--md.g-px-15.g-px-25--md(href='#' tabindex='0') Learn more
                  section.u-bg-overlay.g-bg-black-opacity-0_7--after.g-bg-img-hero.g-py-50
    .u-bg-overlay__inner
      .container.g-max-width-780.text-center.g-mb-60
        .text-center.u-heading-v8-1.g-mb-35
          h2.h3.text-uppercase.u-heading-v8__title.g-font-weight-700.g-font-size-26.g-color-white.mb-0
            | Learn
            strong.g-bg-gray-dark-v1.g-color-primary More
        p.mb-0
          | Scipit justo, eu dignissim tellus pretium et. Nam volutpat placerat libero sit amet elementum. Curabitur et neque et mauris maximus efficitur.
      .container
        section.js-carousel.g-pt-60.g-pt-0--md.slick-initialized.slick-slider(data-infinite='true' data-arrows-classes='u-arrow-v1 g-pos-abs g-absolute-centered--x--md g-top-0 g-width-40 g-height-40 g-color-white g-color-black--hover g-bg-black g-bg-primary--hover g-transition-0_2 g-transition--ease-in' data-arrow-left-classes='fa fa-chevron-left g-left-0 g-left-50x--md g-ml-35--md' data-arrow-right-classes='fa fa-chevron-right g-right-0 g-right-50x--md g-ml-85--md')
          .js-prev.u-arrow-v1.g-pos-abs.g-absolute-centered--x--md.g-top-0.g-width-40.g-height-40.g-color-white.g-color-black--hover.g-bg-black.g-bg-primary--hover.g-transition-0_2.g-transition--ease-in.fa.fa-chevron-left.g-left-0.g-left-50x--md.g-ml-35--md.slick-arrow(style='')
          .slick-list.draggable
            .slick-track(style='opacity: 1; width: 5550px; transform: translate3d(-1110px, 0px, 0px);')
              .js-slide.slick-slide.slick-cloned(data-slick-index='-1' aria-hidden='true' tabindex='-1' style='width: 1110px;')
                .row
                  .col-md-6
                    .embed-responsive.embed-responsive-16by9.g-mb-0--md.g-mb-30
                      iframe(width='100%' src='//www.youtube.com/embed/ykaL-dafIhI' frameborder='0' allowfullscreen='')
                  .col-md-6.g-color-white.g-pt-80--md
                    h3.text-uppercase.g-font-weight-700.g-font-size-18.g-color-white.g-mb-5 Catherine Cameron
                    h4.text-uppercase.g-font-weight-700.g-font-size-10.g-color-primary.g-mb-16 Molestie ullamcorper nisl eget
                    p.g-mb-0
                      | Integer accumsan maximus leo, et consectetur metus vestibulum in. Vestibulum viverra justo odio. Donec eu nulla leo. Vivamus risus lacus, viverra eu maximus non, tincidunt sodales massa. Duis vulputate purus a libero luctus, sed dictum ante interdum. Nam vel leo ultricies, pretium magna at, consequat augue. Quisque bibendum vel enim quis pulvinar. Proin ac quam erat.
              .js-slide.slick-slide.slick-current.slick-active(data-slick-index='0' aria-hidden='false' tabindex='0' style='width: 1110px; height: auto;')
                .row
                  .col-md-6
                    .embed-responsive.embed-responsive-16by9.g-mb-0--md.g-mb-30
                      iframe(src='//www.youtube.com/embed/ykaL-dafIhI' width='530' height='300' frameborder='0' webkitallowfullscreen='' mozallowfullscreen='' allowfullscreen='')
                  .col-md-6.g-color-white.g-pt-80--md
                    h3.text-uppercase.g-font-weight-700.g-font-size-18.g-color-white.g-mb-5 Catherine Cameron
                    h4.text-uppercase.g-font-weight-700.g-font-size-10.g-color-primary.g-mb-16 Molestie ullamcorper nisl eget
                    p.g-mb-0
                      | Integer accumsan maximus leo, et consectetur metus vestibulum in. Vestibulum viverra justo odio. Donec eu nulla leo. Vivamus risus lacus, viverra eu maximus non, tincidunt sodales massa. Duis vulputate purus a libero luctus, sed dictum ante interdum. Nam vel leo ultricies, pretium magna at, consequat augue. Quisque bibendum vel enim quis pulvinar. Proin ac quam erat.
              .js-slide.slick-slide(data-slick-index='1' aria-hidden='true' tabindex='-1' style='width: 1110px; height: auto;')
                .row
                  .col-md-6
                    .embed-responsive.embed-responsive-16by9.g-mb-0--md.g-mb-30
                      iframe(width='100%' src='//www.youtube.com/embed/Squv4KI751w' frameborder='0' allowfullscreen='')
                  .col-md-6.g-color-white.g-pt-80--md
                    h3.text-uppercase.g-font-weight-700.g-font-size-18.g-color-white.g-mb-5 Catherine Cameron
                    h4.text-uppercase.g-font-weight-700.g-font-size-10.g-color-primary.g-mb-16 Molestie ullamcorper nisl eget
                    p.g-mb-0
                      | Integer accumsan maximus leo, et consectetur metus vestibulum in. Vestibulum viverra justo odio. Donec eu nulla leo. Vivamus risus lacus, viverra eu maximus non, tincidunt sodales massa. Duis vulputate purus a libero luctus, sed dictum ante interdum. Nam vel leo ultricies, pretium magna at, consequat augue. Quisque bibendum vel enim quis pulvinar. Proin ac quam erat.
              .js-slide.slick-slide.slick-cloned(data-slick-index='2' aria-hidden='true' tabindex='-1' style='width: 1110px;')
                .row
                  .col-md-6
                    .embed-responsive.embed-responsive-16by9.g-mb-0--md.g-mb-30
                      iframe(src='//player.vimeo.com/video/6202666' width='530' height='300' frameborder='0' webkitallowfullscreen='' mozallowfullscreen='' allowfullscreen='')
                  .col-md-6.g-color-white.g-pt-80--md
                    h3.text-uppercase.g-font-weight-700.g-font-size-18.g-color-white.g-mb-5 Catherine Cameron
                    h4.text-uppercase.g-font-weight-700.g-font-size-10.g-color-primary.g-mb-16 Molestie ullamcorper nisl eget
                    p.g-mb-0
                      | Integer accumsan maximus leo, et consectetur metus vestibulum in. Vestibulum viverra justo odio. Donec eu nulla leo. Vivamus risus lacus, viverra eu maximus non, tincidunt sodales massa. Duis vulputate purus a libero luctus, sed dictum ante interdum. Nam vel leo ultricies, pretium magna at, consequat augue. Quisque bibendum vel enim quis pulvinar. Proin ac quam erat.
              .js-slide.slick-slide.slick-cloned(data-slick-index='3' aria-hidden='true' tabindex='-1' style='width: 1110px;')
                .row
                  .col-md-6
                    .embed-responsive.embed-responsive-16by9.g-mb-0--md.g-mb-30
                      iframe(width='100%' src='//www.youtube.com/embed/Squv4KI751w' frameborder='0' allowfullscreen='')
                  .col-md-6.g-color-white.g-pt-80--md
                    h3.text-uppercase.g-font-weight-700.g-font-size-18.g-color-white.g-mb-5 Catherine Cameron
                    h4.text-uppercase.g-font-weight-700.g-font-size-10.g-color-primary.g-mb-16 Molestie ullamcorper nisl eget
                    p.g-mb-0
                      | Integer accumsan maximus leo, et consectetur metus vestibulum in. Vestibulum viverra justo odio. Donec eu nulla leo. Vivamus risus lacus, viverra eu maximus non, tincidunt sodales massa. Duis vulputate purus a libero luctus, sed dictum ante interdum. Nam vel leo ultricies, pretium magna at, consequat augue. Quisque bibendum vel enim quis pulvinar. Proin ac quam erat.
          .js-next.u-arrow-v1.g-pos-abs.g-absolute-centered--x--md.g-top-0.g-width-40.g-height-40.g-color-white.g-color-black--hover.g-bg-black.g-bg-primary--hover.g-transition-0_2.g-transition--ease-in.fa.fa-chevron-right.g-right-0.g-right-50x--md.g-ml-85--md.slick-arrow(style='')        
  section.g-py-50
    .container.g-max-width-780.text-center.g-mb-60
      .text-center.u-heading-v8-1.g-mb-35
        h2.h3.text-uppercase.u-heading-v8__title.g-font-weight-700.g-font-size-26.mb-0
          | How you
          strong.g-bg-gray-dark-v1.g-color-primary can help
      p.mb-0
        | There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable.
    .container
      .row
        .col-lg-6
          article.row.align-items-stretch.text-center.g-color-gray-dark-v5.g-bg-black.mx-0
            .col-sm-6.u-ns-bg-v1-bottom.u-ns-bg-v1-right--md.g-bg-black.g-px-30.g-py-45
              h3.text-uppercase.g-font-size-20.g-color-white.g-mb-25
                | Became a
                strong.d-block.g-font-weight-700.g-color-primary Volunteer
              p.g-mb-25
                | Praesent pulvinar gravida efficitur. Aenean bibendum purus eu nisi pulvinar venenatis vitae non velit.
              a.btn.btn-md.text-uppercase.u-btn-primary.g-font-weight-700.g-font-size-11.g-color-gray-dark-v1.g-color-gray-dark-v1--hover.rounded-0.g-py-10.g-px-25(href='#') Join Us
            .col-sm-6.px-0.u-bg-overlay.g-bg-black-opacity-0_2--after.g-bg-img-hero.g-min-height-300(data-bg-img-src='assets/img-temp/800x842/img1.jpg' style='background-image: url("assets/img-temp/800x842/img1.jpg");')
        .col-lg-6
          article.row.align-items-stretch.text-center.g-color-gray-dark-v5.g-bg-black.mx-0
            .col-sm-6.px-0.u-bg-overlay.g-bg-black-opacity-0_2--after.g-bg-img-hero.g-min-height-300(data-bg-img-src='assets/img-temp/800x842/img2.jpg' style='background-image: url("assets/img-temp/800x842/img2.jpg");')
            .col-sm-6.u-ns-bg-v1-top.u-ns-bg-v1-left--md.g-bg-black.g-px-30.g-py-45
              h3.text-uppercase.g-font-size-20.g-color-white.g-mb-25
                | Make a
                strong.d-block.g-font-weight-700.g-color-primary Dontation
              p.g-mb-25
                | Praesent pulvinar gravida efficitur. Aenean bibendum purus eu nisi pulvinar venenatis vitae non velit.
              a.btn.btn-md.text-uppercase.u-btn-primary.g-font-weight-700.g-font-size-11.g-color-gray-dark-v1.g-color-gray-dark-v1--hover.rounded-0.g-py-10.g-px-25(href='#') Join Us
  
</template>

<script>
import axios from "axios";
import BgOverlay from "@components/BgOverlay";

export default {
  components: {
    BgOverlay
  },
  data() {
    return {
      childrenCount: null
    };
  },
  created() {
    axios
      .get(process.env.VUE_APP_API + "/children/count?isSponsored=false")
      .then(res => {
        this.childrenCount = res.data;
      });
  }
};
</script>
