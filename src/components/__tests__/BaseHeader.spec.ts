import { shallowMount } from '@vue/test-utils'
import BaseHeader from '@/components/BaseHeader.vue'

describe('BaseHeader.vue', () => {
  it('should be render', () => {
    const wrapper = shallowMount(BaseHeader, {
      propsData: {
        titleText: 'Products',
      },
    })
    expect(wrapper.element).toBeDefined()
  })

  it('should render a h3 element', () => {
    const wrapper = shallowMount(BaseHeader, {
      propsData: {
        titleText: 'Products',
        titleTag: 'h3',
      },
    })
    const title = wrapper.find('h3')
    expect(title.exists()).toBe(true)
  })

  it('should not render a button when have not icon', () => {
    const wrapper = shallowMount(BaseHeader, {
      propsData: {
        titleText: 'Products',
        showIcon: false,
      },
    })
    const button = wrapper.find('button')
    expect(button.exists()).toBe(false)
  })

  it('should emit event when do click on button', () => {
    const wrapper = shallowMount(BaseHeader, {
      propsData: {
        titleText: 'Products',
      },
    })

    const button = wrapper.find('button')
    button.trigger('click')
    expect(wrapper.emitted()['icon-click']).toBeTruthy()
  })
})
