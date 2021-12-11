import { shallowMount } from '@vue/test-utils'
import BaseButton from '@/components/BaseButton.vue'

describe('BaseButton.vue', () => {
  it('should be render', () => {
    const wrapper = shallowMount(BaseButton)
    expect(wrapper.element).toBeDefined()
  })

  it('should render an image', () => {
    const wrapper = shallowMount(BaseButton, {
      propsData: {
        iconName: 'plus',
      },
    })

    const image = wrapper.find('img')
    expect(image.exists()).toBe(true)
  })
})
