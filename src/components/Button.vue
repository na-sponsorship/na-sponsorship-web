<template lang="pug">
    button.btn(:class="[_size, _color, _bevel, _inset, _skew, _hover, _hoverAlt, _border, _block, _rounded]" @click="handleClick")
        i.fa.fa-home
        slot(v-if="!skew")
        span.u-btn-skew__inner(v-if="skew"): slot
</template>

<script>
export default {
  computed: {
    _size() {
      return `btn-${this.size}`;
    },
    _bevel() {
      return `${this.bevel ? "u-btn-3d" : ""}`;
    },
    _inset() {
      let roundedClass = this.rounded ? " u-btn-inset--rounded" : "";

      return `${this.inset ? "u-btn-inset" + roundedClass : ""}`;
    },
    _skew() {
      return `${this.skew ? "u-btn-skew" : ""}`;
    },
    _color() {
      return `u-btn-${this.outline ? "outline-" : ""}${this.color}`;
    },
    _hover() {
      return `${this.hover ? "u-btn-hover-v1-" + this.hover : ""}`;
    },
    _hoverAlt() {
      return `${this.hoverAlt ? "u-btn-hover-v2-" + this.hoverAlt : ""}`;
    },
    _border() {
      return `g-brd-${this.border}`;
    },
    _block() {
      return `${this.block ? "btn-block" : ""}`;
    },
    _rounded() {
      return `${
        this.rounded === 0 ? "rounded-0" : "g-rounded-" + this.rounded
      }`;
    }
  },
  props: {
    color: String,
    size: String,
    outline: Boolean,
    bevel: Boolean,
    inset: Boolean,
    hover: {
      type: String,
      default: ""
    },
    hoverAlt: {
      type: String,
      default: ""
    },
    border: Number,
    rounded: Number,
    block: Boolean,
    skew: Boolean
  },
  methods: {
    handleClick() {
      this.$emit("click");
    }
  }
};
</script>
