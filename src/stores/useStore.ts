import { defineStore } from 'pinia'
import { reactive } from 'vue'

interface UserInfo {
  name: String
  age: string
}

interface Child {
  name: string
  age: string
}

export const useStore = defineStore('store', () => {
  const userInfo = reactive<UserInfo>({
    name: '',
    age: ''
  })

  // const childInfo = reactive<Child>({
  //   name: '',
  //   age: ''
  // })

  // const children = reactive<Child[]>([])

  // function saveUserInfo(info: UserInfo) {
  //   userInfo.name = info.name
  //   userInfo.age = info.age
  // }

  // function saveChildrenInfo(info: Child) {
  //   childInfo.name = info.name
  //   childInfo.age = info.age
  // }

  // function addChild(child: Child) {
  //   children.push(child)
  // }

  // function removeChild(index: number) {
  //   children.splice(index, 1)
  // }

  // function clearUserInfo() {
  //   userInfo.name = ''
  //   userInfo.age = ''
  // }

  // function clearChildren() {
  //   children.splice(0, children.length)
  // }
  // function clearChildrenInfo() {
  //   children.splice(0, children.length)
  // }

  return {
    userInfo,
    // children,
    // saveUserInfo,
    // addChild,
    // removeChild,
    // clearUserInfo,
    // clearChildren,
    // clearChildrenInfo,
    // saveChildrenInfo
  }
})
