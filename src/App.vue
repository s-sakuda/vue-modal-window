<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <button @click="open()">モーダルを表示する</button>
    <Modal v-if="isOpen" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Modal,
  },
  computed: {
    isOpen() {
      return this.$store.state.modal.isOpen
    },
  },
  methods: {
    open() {
      const payload = {
        isOpen: true,
        message: '変更しますがよろしいですか？',
      }
      this.$store
        .dispatch('actionModalOpen', payload)
        .then(() => {
          // 「OK」ボタンが押された時の処理をここに書く
        })
        .catch(() => {
          // 「キャンセル」ボタンが押された時の処理をここに書く
        })
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
