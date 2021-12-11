<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

const BaseButtonProps = Vue.extend({
  props: {
    iconName: {
      type: String,
      default: 'plus',
      validator: value => ['plus', 'minus'].includes(value),
    },
    text: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: 'medium',
      validator: value => ['small', 'medium'].includes(value),
    },
  },
})
@Component
export default class BaseButton extends BaseButtonProps {
  get hasIcon(): boolean {
    return !!this.iconName
  }

  get iconPath(): void {
    return require(`@/assets/icons/${this.iconName}.svg`)
  }
}
</script>

<template>
  <button class="base-button" :class="size" @click="$emit('click')">
    <slot>
      <img v-if="hasIcon" :src="iconPath" class="base-button-icon" /> {{ text }}
    </slot>
  </button>
</template>

<style lang="scss" scoped>
.base-button {
  border: 1px solid gainsboro;
  border-radius: 5px;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    opacity: 0.75;
  }

  &-icon {
    width: 12px;
    margin-right: 5px;
  }

  &.medium {
    min-width: 5rem;
  }
  &.small {
    width: 1.375rem;
  }
}
</style>
