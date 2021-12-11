import { mount, shallowMount } from '@vue/test-utils'
import BaseButton from '@/components/BaseButton.vue'
import ProductsListItem from '@/components/ProductsListItem.vue'

describe('ProductsListItem.vue', () => {
  it('should be render', () => {
    const wrapper = shallowMount(ProductsListItem, {
      propsData: {
        product: {
          id: '1',
          imageUrl: '',
          stock: 2,
          name: 'name1',
          price: 10,
          description: '',
          favorite: false,
        },
      },
    })
    expect(wrapper.element).toBeDefined()
  })

  it('should emit add event when click on button', () => {
    const wrapper = mount(ProductsListItem, {
      propsData: {
        product: {
          id: '1',
          imageUrl: '',
          stock: 2,
          name: 'name1',
          price: 10,
          description: '',
          favorite: false,
        },
      },
    })

    const button = wrapper.findComponent(BaseButton)
    button.trigger('click')
    expect(wrapper.emitted().add).toBeTruthy()
  })
})
