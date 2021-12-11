<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import BaseHeader from './BaseHeader.vue'
import CartList from './CartList.vue'

const SidebarProps = Vue.extend({
  components: {
    BaseHeader,
    CartList,
  },
  props: {
    isWebMode: {
      type: Boolean,
      default: false,
    },
  },
})

@Component
export default class Sidebar extends SidebarProps {
  get sidebarClass(): string {
    return this.isWebMode ? 'sidebar-web' : ''
  }

  closeSidebar(): void {
    this.$emit('close')
  }
}
</script>

<template>
  <div class="sidebar" :class="sidebarClass">
    <BaseHeader
      title-text="Cart"
      title-tag="h3"
      icon-name="close"
      :show-icon="!isWebMode"
      @icon-click="closeSidebar"
    />
    <CartList />
  </div>
</template>

<style lang="scss" scoped>
.sidebar {
  height: 100%;
  width: 250px;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  background-color: white;
  overflow-x: hidden;
  padding-top: 1.75rem;
  transition: 0.5s;
  border: 1px solid black;

  &-web {
    min-width: 250px;
    max-width: 250px;
    position: relative;
    height: 100vh;
    position: sticky;
    padding: 0;
  }

  header {
    position: relative;
    h3 {
      margin: 0;
      text-align: center;
    }
    button {
      position: absolute;
      top: 0;
      right: 20px;
    }
  }
}
</style>
