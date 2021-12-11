import { shallowMount } from '@vue/test-utils'
import ProductsList from '@/components/ProductsList.vue'
import ProductsListItem from '@/components/ProductsListItem.vue'

describe('ProductsList.vue', () => {
  it('should be render', () => {
    const wrapper = shallowMount(ProductsList)
    expect(wrapper.element).toBeDefined()
  })

  it('should render two ProductsListItem component', () => {
    const wrapper = shallowMount(ProductsList, {
      propsData: {
        products: [
          {
            id: '1',
            imageUrl: '',
            stock: 2,
            name: 'name1',
            price: 10,
            description: '',
            favorite: false,
          },
          {
            id: '2',
            imageUrl: '',
            stock: 2,
            name: 'name1',
            price: 10,
            description: '',
            favorite: false,
          },
        ],
      },
    })
    const productItems = wrapper.findAllComponents(ProductsListItem)
    expect(productItems).toHaveLength(2)
  })
})
