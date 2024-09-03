<script setup lang="ts">
import AddChildrenComponent from '@/components/AddChildrenComponent.vue'
import BtnComponent from '@/components/BtnComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import FormComponent from '@/components/FormComponent.vue'
import HeaderComponent from '@/components/HeaderComponent.vue'
import TitleComponent from '@/components/TitleComponent.vue'
import { useStore } from '@/stores/useStore'

const userStore = useStore()
</script>

<template>
  <div class="page">
    <HeaderComponent />
    <div class="content">
      <TitleComponent>Персональные данные</TitleComponent>
      <h2>{{ userStore.userInfo.name }}, {{ userStore.userInfo.age }} лет</h2>
      <div class="content__children">
        <TitleComponent>Дети</TitleComponent>
        <div class="content__children-wrapper">
          <div v-for="(child, index) in userStore.children" :key="index" class="child-item">
            <p>{{ child.name }}, {{ child.age }} лет</p>
          </div>
        </div>
      </div>
    </div>
    <FooterComponent />
  </div>
</template>

<style lang="scss" scoped>
.page {
}
.content {
}
.content__children {
}
.content__children-wrapper {
  border-radius: 5px;
  padding: 10px 20px;
  box-sizing: border-box;
  span {
    font-family: var(--font-family);
    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
    color: #000;
  }
}
</style>
