import { mount, shallowMount } from '@vue/test-utils'
import CartList from '@/components/CartList.vue'
import CartListItem from '@/components/CartListItem.vue'

jest.mock('@/store/modules/products', () => {
  return {
    productsCart: [
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
  }
})

describe('CartList.vue', () => {
  it('should be render', () => {
    const wrapper = shallowMount(CartList)
    expect(wrapper.element).toBeDefined()
  })

  it('should render two CartListItem component', () => {
    const wrapper = mount(CartList)
    const cartItems = wrapper.findAllComponents(CartListItem)
    expect(cartItems).toHaveLength(2)
  })
})
