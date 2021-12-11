<script lang="ts">
import { ProductModel } from '@/models/ProductModel'
import Vue, { PropType } from 'vue'
import { Component } from 'vue-property-decorator'
import ProductsListItem from '@/components/ProductsListItem.vue'
import Products from '@/store/modules/products'

const ProductsListProps = Vue.extend({
  props: {
    products: {
      type: Array as PropType<Array<ProductModel>>,
      default: () => [],
    },
  },
})
@Component({
  name: 'ProductsList',
  components: {
    ProductsListItem,
  },
})
export default class ProductsList extends ProductsListProps {
  addProduct(product: ProductModel): void {
    Products.setProductCart(product)
  }
}
</script>

<template>
  <section class="products-list">
    <ProductsListItem
      v-for="product in products"
      :key="product.id"
      :product="product"
      @add="addProduct"
    />
  </section>
</template>

<style lang="scss" scoped>
.products-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
