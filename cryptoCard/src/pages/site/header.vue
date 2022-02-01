<template>
  <div>
    <div class="q-pa">
      <div class="bg text-white q-pa-md">
        <div class="container">
          <q-toolbar>
            <a href="/"> <img class="logo" src="../../../public/logo.png" /></a>
            <a href="/" class="logo-title">Crypto Card</a>

            <q-toolbar-title></q-toolbar-title>
            <q-btn flat style="color: #f5eedc" label="How It Works" />
            <q-btn flat style="color: #f5eedc" label="Guide" />
            <q-btn
              class="active"
              flat
              style="color: #f5eedc"
              @click="login"
              label="Log In"
            />
          </q-toolbar>
        </div>
      </div>
    </div>
    <div class="line"></div>
  </div>
</template>

<script>
export default {
  methods: {
    login() {
      this.$router.push("/login");
    },
  },
};
</script>

<style lang="css" scoped>
.active {
  color: #4f091d !important;
  background-color: #f5eedc;
}
.bg {
  background-color: #dd4a48;
}
.line {
  background-color: #4f091d;
  height: 4px;
  width: 100%;
}
.logo {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  padding: 5px;
  border: 1px dotted rgb(248, 245, 245);
}
.logo-title {
  font-size: 32px;
  font-weight: 600;
  margin: 10px;
  text-decoration: none !important;
  color: #f5eedc;
}
</style>
