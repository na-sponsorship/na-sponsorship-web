<template lang="pug">
  div
    article.row.m2(style="min-height: 400px;")
      div.col-sm-6.g-bg-img-hero(:style="getBGPicture(child.picture)")
      div.col-sm-6.u-ns-bg-v1-top.u-ns-bg-v1-left--md.g-bg-black.g-px-30.g-py-20.shadow.curved(style="min-height: 367px", :class="{'bg-male': child.gender === 'male', 'bg-female': child.gender === 'female'}")
        h3.g-font-size-20.g-mb-0.g-font-weight-900(style="color: #e6d47f") {{child['First Name'] | uppercase}}
        h6 {{getAge(child['Date Of Birth'])}} {{getAge(child['Date of Birth']) | pluralize('year')}} old
        p.g-mb-35.g-color-white.pt2
          span.u-dropcap.g-mr-10.g-mb-5 {{child.story[0]}}
          | {{child.story.substring(1, child.story.length)}}
        Button.corner.right.shadow(size="md" color="yellow" :rounded="50" :border="0" inset @click="sponsor(child)") Sponsor

    b-modal(:ref="child.id" :title="'Sponsor ' + child['First Name']")
      b-card(no-body)
        b-tabs(card)
          b-tab(title="Monthly Support" active)
            b-form
              b-form-group(label="Credit Card" description="cc info")
                b-form-input(type="text" placeholder="Enter CC")
          b-tab(title="One-time Payment")
            p for single paymnet
</template> 

<script>
import { isNull, isUndefined } from "lodash";
import moment from "moment";
import dayjs from 'dayjs';
import Button from "@components/Button";

export default {
  components: { Button },
  props: {
    child: {
      type: Object
    }
  },
  methods: {
    sponsor(child) {
      this.$refs[child.id].show();
    },
    getAge(age) {
      return dayjs().diff(age, "years");
    },
    getBGPicture(picture) {
      return isNull(picture)
        ? ""
        : `background-image:url("${picture.url}"); border-right: 8px solid white;`;
    }
  }
};
</script>

<style lang="scss">
.curved {
  border-radius: 0px 30px 30px 30px;
}
.corner {
  position: absolute;
  bottom: 12px;
  right: 12px;
}
.shadow {
  box-shadow: 6px 9px 11px 0px rgba(0, 0, 0, 0.2) !important;
}
.bg-male {
  background-color: #50bde7 !important;

  &:before {
    border-right-color: #50bde7 !important;
  }
}
.bg-female {
  background-color: #de3680 !important;

  &:before {
    border-right-color: #de3680 !important;
  }
}
</style>

