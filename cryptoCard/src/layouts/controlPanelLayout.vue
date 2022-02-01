<template>
  <div class="layout">
    <div class="row">
      <div class="col-xl-2 col-lg-2 col-md-2 col-sm-3 col-12 float-left box">
        <controlMenu></controlMenu>
      </div>

      <div class="col-xl-10 col-lg-10 col-md-10 col-sm-9 col-12 float-left box">
        <controlHeader></controlHeader>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import controlHeader from "../pages/controlPanel/header.vue";
import controlMenu from "../pages/controlPanel/menu.vue";
export default {
  components: {
    controlHeader,
    controlMenu,
  },
};
</script>

<style scoped></style>
