export class ProductModel {
  id: string
  imageUrl: string
  stock: number
  name: string
  price: number
  description: string
  favorite: boolean
  inCart?: number

  constructor(data: ProductModel) {
    this.id = data.id
    this.imageUrl = data.imageUrl
    this.stock = data.stock
    this.name = data.name
    this.price = data.price
    this.description = data.description
    this.favorite = data.favorite
  }
}
