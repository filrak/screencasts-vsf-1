<template>
  <div>
    <div v-if="!isLoggedIn">
      You need to be logged in to see this content
    </div>
    <div v-else >Super secret content</div>
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