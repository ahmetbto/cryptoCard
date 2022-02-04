<template>
  <div>
    <div class="home">
      <div class="header">
        <p>Control Panel Anasayfa</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    username() {
      return this.$store.state.username;
    },
  },
};
</script>

<style scoped>
.home {
  /* background-color: #eff2f7; */
  padding-left: 30px !important;
}
.header {
  padding: 15px;
  height: 50px;
}
</style>
