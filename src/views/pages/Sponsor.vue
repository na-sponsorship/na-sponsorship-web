<template lang="pug">
div
  section
    div.js-carousel.slick-initialized.slick-slider.slick-dotted(data-infinite='true' data-fade='true' data-speed='5000' data-pagi-classes='u-carousel-indicators-v1 g-absolute-centered--x g-bottom-30')
      div.slick-list.draggable
        div.slick-track(style='opacity: 1; width: 2904px;')
          BgOverlay
            div.g-height-50vh
  section.g-py-50.g-bg-gray-light-v5
    .container.g-max-width-780.text-center.g-mb-60
      .text-center.u-heading-v8-1.g-mb-35
        h2.h3.text-uppercase.u-heading-v8__title.g-font-weight-700.g-font-size-26.mb-0
          | How you
          strong.g-bg-gray-dark-v1.g-color-primary can help
      p.mb-0
        | There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable.
    div.container
        div.row.mb2(v-for="group in groupedChildren")
          div.col(v-for="child in group")
            ChildCard(:child="child")
        div.row.mt3.mb3
          div.col
            nav.text-center
              ul.list-inline
                li.list-inline-item
                  a.u-pagination-v1__item.u-pagination-v1-1.u-pagination-v1__item--disabled.g-pa-12-21
                    span Previous
                li.list-inline-item: a.u-pagination-v1__item.u-pagination-v1-1.u-pagination-v1-1--active.g-pa-12-19 1
                li.list-inline-item: a.u-pagination-v1__item.u-pagination-v1-1.g-pa-12-19 2
                li.list-inline-item: a.u-pagination-v1__item.u-pagination-v1-1.g-pa-12-19 3
                li.list-inline-item
                  a.u-pagination-v1__item.u-pagination-v1-1.g-pa-12-21
                    span Next

</template>

<script>
import axios from "axios";

import BgOverlay from "@components/BgOverlay";
import ChildCard from "@components/ChildCard";
import { chunk } from "lodash";

export default {
  components: {
    BgOverlay,
    ChildCard
  },
  data() {
    return {
      children: []
    };
  },
  computed: {
    groupedChildren() {
      return chunk(this.children, 2);
    }
  },
  created() {
    axios
      .get(process.env.VUE_APP_API + "/children")
      .then(children => {
        this.children = children.data;
      });
  }
};
</script>
