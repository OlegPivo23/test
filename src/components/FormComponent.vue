<template>
  <div class="form-wrapper">
    <form action="#" class="form" @submit.prevent @keypress.enter.prevent>
      <div class="form__input-group">
        <input
          type="text"
          v-model="localUserInfo.name"
          class="form__input"
          id="name"
          @focus="activateLabel('name')"
          @blur="deactivateLabel('name')"
        />
        <label for="name" class="form__label">Имя</label>
      </div>
      <div class="form__input-group">
        <input
          type="text"
          v-model="localUserInfo.age"
          class="form__input"
          id="age"
          @focus="activateLabel('age')"
          @blur="deactivateLabel('age')"
        />
        <label for="age" class="form__label">Возраст</label>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

interface UserInfo {
  name: string
  age: string
}

const localUserInfo = reactive<UserInfo>({
  name: '',
  age: ''
})

// function activateLabel(id: string) {
//   const label = document.querySelector(`label[for="${id}"]`)
//   if (label) {
//     label.classList.add('active')
//   }
// }

// function deactivateLabel(id: string) {
//   const input = document.getElementById(id) as HTMLInputElement | null
//   const label = document.querySelector(`label[for="${id}"]`)
//   if (input && label && input.value === '') {
//     label.classList.remove('active')
//   }
// }

function clearForm() {
  localUserInfo.name = ''
  localUserInfo.age = ''
}


defineExpose({ localUserInfo, clearForm })
</script>

<style lang="scss" scoped>
.form-wrapper {
}
.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.form__input-group {
  display: flex;
  flex-direction: column;
  gap: 2px;
  position: relative;
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
.form__input {
  border: 1px solid #f1f1f1;
  border-radius: 4px;
  width: 616px;
  height: 56px;
  background: #fff;
  padding: 16px;
  box-sizing: border-box;
}

.form__btn-wrapper {
  display: flex;
  justify-content: flex-end;
}
</style>

<style lang="scss" scoped>
.form-wrapper {
}
.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.form__input-group {
  display: flex;
  flex-direction: column;
  gap: 2px;
  position: relative;
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
.form__input {
  border: 1px solid #f1f1f1;
  border-radius: 4px;
  width: 616px;
  height: 56px;
  background: #fff;
  padding: 16px;
  box-sizing: border-box;
}

.form__btn-wrapper {
  display: flex;
  justify-content: flex-end;
}
</style>
