<script lang="ts">
import Vue from 'vue'
import Products from '@/store/modules/products'
import { Component } from 'vue-property-decorator'
import { ProductModel } from '@/models/ProductModel'
import CartListItem from './CartListItem.vue'

const CartListProps = Vue.extend({
  components: {
    CartListItem,
  },
})

@Component
export default class CartList extends CartListProps {
  get products(): ProductModel[] {
    return Products.productsCart
  }

  get totalCart(): string {
    return Products.TotalCart
  }

  get hasProducts(): boolean {
    return this.products.length > 0
  }

  increaseProduct(product: ProductModel): void {
    Products.setProductCart(product)
  }
  decreaseProduct(product: ProductModel): void {
    Products.decreaseProductCart(product)
  }
}
</script>

<template>
  <section class="cart-list">
    <div class="cart-list-container" v-if="hasProducts">
      <div v-for="product in products" :key="`${product.id}${product.inCart}`">
        <CartListItem
          :product="product"
          @increase="increaseProduct"
          @decrease="decreaseProduct"
        />
      </div>
      <p class="total-cart">{{ totalCart }}$</p>
    </div>
    <p v-else class="empty-text">There aren't items in the cart</p>
  </section>
</template>

<style lang="scss" scoped>
.cart-list {
  padding: 10px;

  .total-cart {
    text-align: right;
    font-size: 20px;
    font-weight: bold;
  }
}
</style>
