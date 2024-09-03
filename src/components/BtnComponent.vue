<template>
  <div class="btn-wrapper">
    <button :class="[customClass, 'btn']" @click="activateEmit">
      <slot name="svg" />
      <span :class="customClass">
        <slot name="text" />
      </span>
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps({
  customClass: {
    type: String,
    default: null
  }
})
const emit = defineEmits(['sendForm'])

function activateEmit() {
  emit('sendForm')
}
</script>

<style lang="scss" scoped>
.btn {
  border: 2px solid #01a7fd;
  border-radius: 100px;
  padding: 10px 20px;
  box-sizing: border-box;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  span {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 14px;
    line-height: 171%;
    text-align: center;
    color: #01a7fd;
  }
}
</style>
