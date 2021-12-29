<template>
  <div>
    <div class="line"></div>
    <div class="q-pa">
      <div class="bg text-white q-pa-md">
        <div class="container">
          <q-toolbar>
            <img class="logo" src="../../../public/logo.png" />
            <p class="logo-title">Crypto Card</p>

            <q-toolbar-title></q-toolbar-title>
            <q-btn flat style="color: #f5eedc" label="How It Works" />
            <q-btn flat style="color: #f5eedc" label="Contact" />
          </q-toolbar>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="css" scoped>
.bg {
  background-color: #dd4a48;
  width: 100%;
}
.line {
  background-color: #4f091d;
  height: 24px;
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
}
</style>
