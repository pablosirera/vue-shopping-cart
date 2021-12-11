<script lang="ts">
import { ProductModel } from '@/models/ProductModel'
import Vue, { PropType } from 'vue'
import { Component } from 'vue-property-decorator'
import BaseButton from './BaseButton.vue'

const CartListItemProps = Vue.extend({
  components: {
    BaseButton,
  },
  props: {
    product: {
      type: Object as PropType<ProductModel>,
      required: true,
    },
  },
})

@Component
export default class CartListItem extends CartListItemProps {
  decrease(): void {
    this.$emit('decrease', this.product)
  }
  increase(): void {
    this.$emit('increase', this.product)
  }
}
</script>

<template>
  <div class="cart-item">
    <div class="img-wrapper">
      <img :src="product.imageUrl" :alt="product.description" />
    </div>
    <div class="cart-item-info">
      <div>
        <p>{{ product.name }}</p>
        <div class="info-actions">
          <BaseButton size="small" @click="decrease">-</BaseButton>
          <span>{{ product.inCart }}</span>
          <BaseButton size="small" @click="increase">+</BaseButton>
        </div>
      </div>
      <p>{{ product.price }}$</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cart-item {
  margin-bottom: 1.25rem;
  display: flex;
  align-items: center;
  .img-wrapper {
    width: 6.25rem;
    height: 3.75rem;
    margin-right: 0.625rem;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
  &-info {
    display: flex;
    align-items: center;
    .info-actions {
      display: flex;
      span {
        margin: 0 5px;
      }
    }
  }
}
</style>
