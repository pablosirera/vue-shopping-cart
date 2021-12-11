import { getModule, Module, Mutation, VuexModule } from 'vuex-module-decorators'
import store from '@/store'
import { ProductModel } from '@/models/ProductModel'

@Module({
  namespaced: true,
  dynamic: true,
  store,
  name: 'products',
})
class ProductsStore extends VuexModule {
  productsCart: ProductModel[] = []

  get TotalCart(): string {
    const total = this.productsCart.reduce((prev, curr) => {
      const inCart = curr.inCart || 0
      prev = (prev || 0) + curr.price * inCart
      return prev
    }, 0)
    return (Math.round(total * 100) / 100).toFixed(2)
  }

  @Mutation
  setProductCart(productParam: ProductModel) {
    const allProducts: ProductModel[] = [...this.productsCart, productParam]
    const cleanProducts: ProductModel[] = [
      ...new Map(allProducts.map(p => [p.id, p])).values(),
    ]
    const indexToUpdate: number = cleanProducts.findIndex(
      p => p.id === productParam.id
    )

    cleanProducts[indexToUpdate].inCart = productParam.inCart
      ? productParam.inCart + 1
      : 1

    this.productsCart = [...cleanProducts]
  }

  @Mutation
  decreaseProductCart(product: ProductModel) {
    const indexToUpdate: number = this.productsCart.findIndex(
      p => p.id === product.id
    )

    const productsCopy = [...this.productsCart]
    productsCopy[indexToUpdate].inCart = product.inCart ? product.inCart - 1 : 0

    if (productsCopy[indexToUpdate].inCart === 0) {
      productsCopy.splice(indexToUpdate, 1)
      this.productsCart = [...productsCopy]
      return
    }

    this.productsCart = [...productsCopy]
  }
}

export default getModule(ProductsStore)
