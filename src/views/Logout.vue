<template>
  <div class="logout">
    Logout....
  </div>
</template>

<script>

export default {
  name: 'Logout',
  async mounted () {
    this.$store.dispatch('updateAuthState', null)
    await this.$_sleep(1000)
    this.$router.push({ name: 'Login' })
  }
}
</script>
