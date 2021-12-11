<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ProductsList from './components/ProductsList.vue'
import BaseHeader from './components/BaseHeader.vue'
import Sidebar from './components/Sidebar.vue'

@Component({
  components: {
    ProductsList,
    BaseHeader,
    Sidebar,
  },
})
export default class App extends Vue {
  products = null
  showSidebar = false
  isWebMode = false

  created(): void {
    this.loadData()
    this.eventHandler()
    window.addEventListener('resize', this.eventHandler)
  }

  get mainSectionClasses(): { [k: string]: boolean } {
    return {
      'web-mode': this.isWebMode,
    }
  }

  async loadData(): Promise<void> {
    const result = await fetch(
      'http://localhost:3000/grocery?_page=1&_limit=20'
    )
    this.products = await result.json()
  }

  openSidebar(): void {
    this.showSidebar = true
  }
  closeSidebar(): void {
    this.showSidebar = false
  }

  eventHandler(): void {
    if (window.matchMedia('(min-width: 900px)').matches) {
      this.isWebMode = true
      this.openSidebar()
    } else {
      this.isWebMode = false
      this.closeSidebar()
    }
  }
}
</script>

<template>
  <main id="app" :class="mainSectionClasses">
    <section class="main-content">
      <BaseHeader
        title-text="Product List"
        :show-icon="!isWebMode"
        @icon-click="openSidebar"
      />
      <ProductsList :products="products" />
    </section>
    <Sidebar
      v-if="showSidebar"
      :is-web-mode="isWebMode"
      @close="closeSidebar"
    />
  </main>
</template>

<style lang="scss" scoped>
.web-mode {
  display: flex;
}
.main-content {
  margin-top: 1.875rem;
}
</style>
