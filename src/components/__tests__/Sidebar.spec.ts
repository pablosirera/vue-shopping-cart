import { shallowMount } from '@vue/test-utils'
import Sidebar from '@/components/Sidebar.vue'

describe('Sidebar.vue', () => {
  it('should be render', () => {
    const wrapper = shallowMount(Sidebar)
    expect(wrapper.element).toBeDefined()
  })

  it('should have sidebar-web class when is web mode', () => {
    const wrapper = shallowMount(Sidebar, {
      propsData: {
        isWebMode: true,
      },
    })

    const sidebar = wrapper.find('.sidebar')
    expect(sidebar.classes()).toContain('sidebar-web')
  })
})
