<script setup lang="ts">
import { ref } from 'vue'
import AddChildrenComponent from '@/components/AddChildrenComponent.vue'
import BtnComponent from '@/components/BtnComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import FormComponent from '@/components/FormComponent.vue'
import HeaderComponent from '@/components/HeaderComponent.vue'
import TitleComponent from '@/components/TitleComponent.vue'
import { useStore } from '@/stores/useStore'

const store = useStore()
const formComponent = ref<InstanceType<typeof FormComponent> | null>(null)

interface Child {
  name: string
  age: string
}
const children = ref<Child[]>([])

function addChild() {
  if (children.value.length < 5) {
    children.value.push({ name: '', age: '' })
  }
}

function saveUserInfo(){
  FormComponent.localUserInfo.name = store.userInfo.name
  FormComponent.localUserInfo.age = store.userInfo.age
}

function removeChild(index: number) {
  children.value.splice(index, 1)
}


// function saveData() {
  
//   if (formComponent.value) {
//     store.saveUserInfo(formComponent.value.localUserInfo)
//     formComponent.value.clearForm()
//   }

//   store.clearChildren()
//   children.value.forEach(child => {
//     store.addChild(child)
//   })

//   // Очистка полей ввода детей после сохранения
//   children.value = []
// }
</script>

<template>
  <div class="page">
    <HeaderComponent />
    <div class="content">
      <TitleComponent>Персональные данные</TitleComponent>
      <FormComponent ref="formComponent" />
      <AddChildrenComponent
        :children="children"
        @add-child="addChild"
        @remove-child="removeChild"
      />
      <BtnComponent custom-class="custom-class" @click="saveData">
        <template #text>Сохранить</template>
      </BtnComponent>
    </div>
    <FooterComponent />
  </div>
</template>

<style>
.page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 616px;
  width: 100%;
  margin: 0 auto;
}

HeaderComponent,
FooterComponent {
  flex-shrink: 0;
}
.custom-class {
  background: #01a7fd !important;
  color: white !important;
}
</style>
