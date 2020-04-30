<template>
  <div>
    {{ isLoggedIn ? 'Hello user' : 'Please log in' }}
    <button v-if="!isLoggedIn" @click="logIn()">
      Log in
    </button>
  </div>
</template>

<script>
export default {
  setup () {
    return {
      isLoggedIn: false
    }
  }
}
</script>