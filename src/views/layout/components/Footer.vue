<template lang="pug">
footer.g-color-gray-dark-v5.g-bg-gray-dark-v1
    #subscription.container
      .w-100.g-height-4
      .g-color-gray-dark-v1.g-bg-primary.g-pa-40.g-mt-minus-60.g-mb-70
        h2.text-uppercase.g-font-weight-700.g-font-size-22.g-color-gray-dark-v1.g-mb-10 Newsletters subscribe
        p.g-mb-20
          | Runc ullamcorper, justo a iaculis elementum, enim orci viverra eros, fringilla porttitor lorem.
        .row
          .col-md-4.col-lg-5
            .form-group.g-mb-20.g-mb-0--lg
              label.text-uppercase.g-font-weight-700.g-font-size-11.g-color-gray-dark-v1.g-mb-15(for='inputGroup1_1') Name
              input#inputGroup1_1.form-control.h-100.g-font-size-default.g-brd-white.g-rounded-1.g-pa-10-16(type='text' placeholder='Your name')
          .col-md-4.col-lg-5
            .form-group.g-mb-50.g-mb-0--md
              label.text-uppercase.g-font-weight-700.g-font-size-11.g-color-gray-dark-v1.g-mb-15(for='inputGroup1_2') Email
              input#inputGroup1_2.form-control.h-100.g-font-size-default.g-brd-white.g-rounded-1.g-pa-10-16(type='email' placeholder='Your email')
          .col-md-3.col-lg-2.text-left
            label.g-hidden-sm-down.text-uppercase.d-block.g-font-weight-700.g-font-size-12.g-color-gray-dark-v1.g-mb-15 &nbsp;
            button.btn.u-btn-black.btn-lg.text-uppercase.g-line-height-1.g-font-weight-700.g-font-size-11.rounded-0.g-px-35.g-py-15.mb-0(type='submit' role='button') Subscribe
    .g-pb-30
      .container
        .row
          .col-md-12.col-lg-4.g-mb-25.g-mb-0--lg
            h2.text-uppercase.g-font-weight-700.g-font-size-default.g-color-white.g-mb-15 Text widget
            p.g-mb-20
              img.img-fluid(src='assets/img-temp/800x344/img1.jpg' alt='Image description')
            p.mb-0
              | Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae est lorem. Aenean imperdiet nisi a dolor condimentum, id ullamcorper lacus vestibulum. Praesent pulvinar gravida. Aenean lobortis ante ac porttitor eleifend.
          .col-md-6.col-lg-4
            h2.text-uppercase.g-font-weight-700.g-font-size-default.g-color-white.g-mb-15 Useful Links
            .row
              .col-sm-6
                ul.list-unstyled.g-mb-30.g-mb-0--md
                  li.g-pos-rel.g-pl-10.g-mb-8
                    i.fa.fa-circle.g-absolute-centered--y.g-left-0.g-font-size-5.g-color-primary
                    a.g-color-gray-dark-v5.g-color-primary--hover(href='#') Proin vitae est lorem
                  li.g-pos-rel.g-pl-10.g-mb-8
                    i.fa.fa-circle.g-absolute-centered--y.g-left-0.g-font-size-5.g-color-primary
                    a.g-color-gray-dark-v5.g-color-primary--hover(href='#') Aenean imperdiet nisi
                  li.g-pos-rel.g-pl-10.g-mb-8
                    i.fa.fa-circle.g-absolute-centered--y.g-left-0.g-font-size-5.g-color-primary
                    a.g-color-gray-dark-v5.g-color-primary--hover(href='#') Praesent pulvinar gravida
                  li.g-pos-rel.g-pl-10.g-mb-8
                    i.fa.fa-circle.g-absolute-centered--y.g-left-0.g-font-size-5.g-color-primary
                    a.g-color-gray-dark-v5.g-color-primary--hover(href='#') Integer commodo est
              .col-sm-6
                ul.list-unstyled.g-mb-30.g-mb-0--md
                  li.g-pos-rel.g-pl-10.g-mb-8
                    i.fa.fa-circle.g-absolute-centered--y.g-left-0.g-font-size-5.g-color-primary
                    a.g-color-gray-dark-v5.g-color-primary--hover(href='#') Proin vitae est lorem
                  li.g-pos-rel.g-pl-10.g-mb-8
                    i.fa.fa-circle.g-absolute-centered--y.g-left-0.g-font-size-5.g-color-primary
                    a.g-color-gray-dark-v5.g-color-primary--hover(href='#') Aenean imperdiet nisi
                  li.g-pos-rel.g-pl-10.g-mb-8
                    i.fa.fa-circle.g-absolute-centered--y.g-left-0.g-font-size-5.g-color-primary
                    a.g-color-gray-dark-v5.g-color-primary--hover(href='#') Praesent pulvinar gravida
          .col-md-6.col-lg-4
            h2.text-uppercase.g-font-weight-700.g-font-size-default.g-color-white.g-mb-15 Have a questions?
            form
              .form-group.g-mb-10
                input#inputGroup2_1.form-control.h-100.g-font-size-13.g-color-gray-dark-v5.g-placeholder-inherit.g-bg-black.g-bg-black--focus.g-brd-around.g-theme-brd-color-dark-light-v1.g-rounded-1.g-pa-10-16(type='text' placeholder='Your name')
              .form-group.g-mb-10
                input#inputGroup2_2.form-control.h-100.g-font-size-13.g-color-gray-dark-v5.g-placeholder-inherit.g-bg-black.g-bg-black--focus.g-brd-around.g-theme-brd-color-dark-light-v1.g-rounded-1.g-pa-10-16(type='email' placeholder='Your email')
              .form-group.g-mb-40
                textarea#inputGroup2_3.form-control.g-resize-none.g-font-size-13.g-color-gray-dark-v5.g-placeholder-inherit.g-bg-black.g-bg-black--focus.g-brd-around.g-theme-brd-color-dark-light-v1.g-rounded-1.g-pa-10-16(rows='5' placeholder='Message')
              button.btn.btn-md.u-btn-primary.text-uppercase.g-font-weight-700.g-font-size-12.g-color-gray-dark-v1.rounded-0.mb-0(type='submit' role='button') Submit
    .g-brd-top.g-brd-gray-dark-v2.g-py-40
      .container
        .row
          .col-md-6.d-flex.align-items-center.g-mb-15.g-mb-0--md
            p.w-100.mb-0
              | &copy; 2019 All right reserved. 
              a.g-font-weight-700.g-color-primary.g-color-primary--hover(href='/') Noah's Arc Uganda
          .col-md-6
            ul.list-inline.float-md-right.mb-0
              li.list-inline-item.g-mr-10
                a.u-icon-v3.g-width-35.g-height-35.g-font-size-16.g-color-white.g-color-gray-dark-v2--hover.g-bg-gray-dark-v2.g-bg-primary--hover.g-transition-0_2.g-transition--ease-in.pt1.m1(v-for="link in socialLinks" :href="link.to"): FAIcon(:icon="['fab', link.icon]") 
</template>

<script>
export default {
  data() {
    return {
      socialLinks: [
        { icon: "facebook-f", to: "http://www.facebook.com" },
        { icon: "twitter", to: "http://www.twitter.com" },
        { icon: "youtube", to: "http://www.youtube.com" }
      ]
    };
  }
};
</script>
