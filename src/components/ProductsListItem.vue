<script lang="ts">
import { ProductModel } from '@/models/ProductModel'
import Vue, { PropType } from 'vue'
import { Component } from 'vue-property-decorator'
import BaseButton from './BaseButton.vue'

const ProductsListItemProps = Vue.extend({
  props: {
    product: {
      type: Object as PropType<ProductModel>,
      required: true,
    },
  },
})
@Component({
  components: {
    BaseButton,
  },
})
export default class ProductsListItem extends ProductsListItemProps {
  emitAddEvent(): void {
    this.$emit('add', this.product)
  }
}
</script>

<template>
  <div class="product-item">
    <div class="product-item-header">
      <img :src="product.imageUrl" :alt="product.description" lazy />
    </div>
    <div class="product-item-info">
      <p class="important-info">
        <span class="name">{{ product.name }}</span>
        <span class="price">{{ product.price }}$</span>
      </p>
      <p class="description">{{ product.description }}</p>
      <div class="info-footer">
        <span class="stock">{{ product.stock }} left</span>
        <BaseButton icon-name="plus" text="add" @click="emitAddEvent" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/_mixins.scss';
.product-item {
  border: 1px solid black;
  margin: 1.25rem;
  max-width: 260px;
  &-header {
    height: 7rem;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
  &-info {
    padding: 0.625rem;
    p {
      margin: 0;
    }
    .important-info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 5px;
      .name {
        font-weight: bold;
        font-size: 1.25rem;
        @include ellipsis;
        padding-right: 5px;
      }
    }
    .description {
      margin-bottom: 20px;
      @include ellipsis;
    }
    .info-footer {
      display: flex;
      justify-content: space-between;
      .stock {
        font-size: 1.125rem;
      }
    }
  }
}
</style>
