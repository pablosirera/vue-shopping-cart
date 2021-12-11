<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

const BaseHeaderProps = Vue.extend({
  props: {
    titleTag: {
      type: String,
      default: 'h1',
    },
    titleText: {
      type: String,
      required: true,
    },
    iconName: {
      type: String,
      default: 'cart',
      validator: value => ['cart', 'close'].includes(value),
    },
    showIcon: {
      type: Boolean,
      default: true,
    },
  },
})

@Component
export default class BaseHeader extends BaseHeaderProps {
  cartIconClick(): void {
    this.$emit('icon-click')
  }
}
</script>

<template>
  <header class="base-header">
    <component :is="titleTag" class="header-title">{{ titleText }}</component>
    <button v-if="showIcon" @click="cartIconClick">
      <img :src="require(`@/assets/icons/${iconName}.svg`)" />
    </button>
  </header>
</template>

<style lang="scss" scoped>
.base-header {
  position: relative;

  button {
    position: absolute;
    top: 0;
    right: 20px;
    background-color: transparent;
    border-width: 0;
    cursor: pointer;
  }
}
.header-title {
  text-align: center;
}
</style>
