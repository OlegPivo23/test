<template>
  <div class="add-children">
    <div class="form__btn-wrapper">
      <div class="add-children__header">
        <TitleComponent>Дети (макс. 5)</TitleComponent>
        <BtnComponent @click="addChild">
          <template #svg>
            <img src="../assets/icons/btn-plus.svg" alt="добавить ребенка" />
          </template>
          <template #text> Добавить ребенка </template>
        </BtnComponent>
      </div>
      <div class="input-groups">
        <div v-for="(child, index) in userStore.children" :key="index" class="form__input-group">
          <div class="form__input-container">
            <input
              :ref="(el) => (inputRefs[index] = { name: el })"
              :id="'name-' + index"
              v-model="child.name"
              type="text"
              class="form__input"
              @focus="activateLabel('name-' + index)"
              @blur="deactivateLabel('name-' + index)"
            />
            <label :for="'name-' + index" class="form__label">Имя</label>
          </div>
          <div class="form__input-container">
            <input
              :ref="(el) => (inputRefs[index].age = el)"
              :id="'age-' + index"
              v-model="child.age"
              type="text"
              class="form__input"
              @focus="activateLabel('age-' + index)"
              @blur="deactivateLabel('age-' + index)"
            />
            <label :for="'age-' + index" class="form__label">Возраст</label>
          </div>
          <button @click="removeChild(index)" class="add-children__btn">Удалить</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useStore } from '@/stores/useStore'
import BtnComponent from './BtnComponent.vue'
import TitleComponent from './TitleComponent.vue'

const userStore = useStore()
const inputRefs = reactive<{ name: HTMLInputElement | null; age: HTMLInputElement | null }[]>([])

function addChild() {
  if (userStore.children.length >= 5) {
    alert('Максимальное количество детей - 5')
    return
  }
  userStore.addChild({ name: '', age: '' })
  clearFields()
}

function removeChild(index: number) {
  userStore.removeChild(index)
}

function activateLabel(id: string) {
  const label = document.querySelector(`label[for="${id}"]`)
  if (label) {
    label.classList.add('active')
  }
}

function deactivateLabel(id: string) {
  const input = document.getElementById(id) as HTMLInputElement | null
  const label = document.querySelector(`label[for="${id}"]`)
  if (input && label && input.value === '') {
    label.classList.remove('active')
  }
}

function clearFields() {
  inputRefs.forEach((input) => {
    if (input.name) input.name.value = ''
    if (input.age) input.age.value = ''
  })
  const labels = document.querySelectorAll('.form__label')
  labels.forEach((label) => {
    label.classList.remove('active')
  })
}
</script>

<style lang="scss" scoped>
.add-children {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.form__btn-wrapper {
}
.add-children__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.input-groups {
  display: flex;
  flex-direction: column;
}
.form__input-group {
  display: grid;
  grid-template-columns: 1fr 1fr auto;
  gap: 2px;
  position: relative;
  width: 100%;
}
.form__input-container {
  position: relative;
}
.form__input {
  border: 1px solid #f1f1f1;
  border-radius: 4px;
  height: 56px;
  background: #fff;
  padding: 16px;
  box-sizing: border-box;
  width: 100%;
}
.form__label {
  position: absolute;
  top: 16px;
  left: 16px;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 13px;
  color: rgba(17, 17, 17, 0.48);
  transition: all 0.2s ease-out;
  pointer-events: none;
}
.form__label.active {
  top: 8px;
  left: 16px;
  font-size: 11px;
  color: #01a7fd;
}
.add-children__btn {
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  line-height: 171%;
  color: #01a7fd;
  background-color: white;
  border: none;
  cursor: pointer;
}
</style>
