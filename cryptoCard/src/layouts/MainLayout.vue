<template>
  <q-layout view="lHh Lpr lFf">
    <HEADER></HEADER>
    <q-page-container>
      <router-view />
    </q-page-container>
    <FOOTER class="footer"></FOOTER>
  </q-layout>
</template>

<script>
import HEADER from "../pages/site/header.vue";
import FOOTER from "../pages/site/footer.vue";

export default {
  name: "MainLayout",

  components: {
    HEADER,
    FOOTER,
  },
};
</script>

<style lang="css" scoped></style>
