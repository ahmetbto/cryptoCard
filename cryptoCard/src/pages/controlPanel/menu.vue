<template>
  <div class="menu-alani">
    <div class="logo-section">
      <img
        class="logo"
        src="http://www.ozelsemakoleji.com.tr/ControlPanel/assets/img/brand/logo-dark.png"
      />
    </div>
    <ul>
      <!-- Başlangıç -->
      <li>
        <a class="link" href="#/controlPanel/home">
          <div class=""><i class="fas fa-home"></i>Starts</div>
          <div class="">
            <i class="fas fa-angle-right"></i></div
        ></a>
      </li>
      <!-- Cards -->
      <li @click="yazilar_altmenu_goster">
        <a>
          <div class=""><i class="fas fa-file-alt"></i>Cards</div>

          <div class=""><i class="fas fa-angle-right"></i></div
        ></a>
      </li>

      <!-- Cards Alt Menü -->
      <ul v-if="yazilarAltmenu" class="yazilar-altmenu">
        <li>
          <a href="/#/controlPanel/addCard">
            <i class="fas fa-angle-right"></i>
            <p>Add Carde</p></a
          >
        </li>
        <li>
          <a href="/#/controlPanel/cardList">
            <i class="fas fa-angle-right"></i>
            <p>Card List</p></a
          >
        </li>
      </ul>

      <!-- Sayfalar -->
      <li>
        <a>
          <div class=""><i class="fas fa-list-alt"></i>Pages</div>

          <div class="">
            <i class="fas fa-angle-right"></i></div
        ></a>
      </li>
      <li>
        <!-- Slider -->
        <a>
          <div class=""><i class="far fa-map"></i>Slider</div>

          <div class="">
            <i class="fas fa-angle-right"></i></div
        ></a>
      </li>

      <!-- Yorumlar -->
      <li>
        <a>
          <div class=""><i class="fas fa-comment"></i>Comments</div>

          <div class="">
            <i class="fas fa-angle-right"></i></div
        ></a>
      </li>

      <!-- Videolar -->
      <li>
        <a>
          <div class=""><i class="fas fa-video"></i>Videos</div>

          <div class="">
            <i class="fas fa-angle-right"></i></div
        ></a>
      </li>

      <!-- Kullanıcılar -->
      <li>
        <a href="/#/controlPanel/users">
          <div class=""><i class="fas fa-user"></i>Users</div>

          <div class="">
            <i class="fas fa-angle-right"></i></div
        ></a>
      </li>

      <!-- Çıkış -->
      <li>
        <a @click="exit">
          <div class=""><i class="fas fa-sign-out-alt"></i>Exit</div>

          <div class="">
            <i class="fas fa-angle-right"></i></div
        ></a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      yazilarAltmenu: false,
    };
  },
  methods: {
    exit() {
      localStorage.clear();
      this.$router.push("/login");
    },
    yazilar_altmenu_goster() {
      this.yazilarAltmenu = !this.yazilarAltmenu;
    },
  },
};
</script>

<style scoped>
.yazilar-altmenu li {
  margin-top: -4px;
  border: none;
  box-shadow: none;
  line-height: 30px !important;
}
.yazilar-altmenu li:hover {
  background-color: #0bb9e0 !important;
}
.yazilar-altmenu li a {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-left: 20px;
  color: gray;
  border-bottom: none !important;
  box-shadow: none;
}
.yazilar-altmenu li a i {
  margin-top: 20px;
}
.yazilar-altmenu li a p {
  margin-right: auto;
}
.link {
  width: 100%;
}
.logo-section {
  border-right: 1px solid rgba(26, 22, 22, 0.1);
  padding: 35px;
  margin-left: 2px;
  height: 105px;
  margin-bottom: -5px;
}
.logo {
  width: 150px;
  object-fit: cover;
}
.menu-alani {
  margin-top: -5px;
  width: calc(100%+30px);
  margin-left: -30px;
}
.menu-alani ul {
  padding: 0;
  box-shadow: 0px 0px 1px #888888;
}
.menu-alani ul li a {
  color: gray;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  list-style: none;
  margin-top: 5px;
  border-bottom: 1px solid rgba(224, 224, 224, 0.6);
  transition: all 0.2s;
  line-height: 50px;
  padding-left: 45px;
}
.menu-alani ul li {
  transition: 0.2s;
}
.menu-alani ul li:hover {
  background-color: #00c3ed;
  cursor: pointer;
  color: white;
  padding-left: 5px;
}
.menu-alani ul li i {
  margin-right: 10px;
  color: rgb(44, 37, 36);
  font-size: 15px;
}
.menu-alani ul li div:nth-child(2) i {
  margin-right: 20px;
  color: rgb(27, 14, 12);
  font-size: 15px;
}
.menu-alani ul li:hover a {
  color: white;
}
.menu-alani ul li:hover i {
  color: white;
}
.menu-alani ul li div a {
  width: 100%;
  height: 50px;
}

.menu-alani ul li {
  color: gray;
  font-size: 14px;

  width: 100%;
  height: 50px;
}

.menu-alani ul li a:hover {
  color: white;
  text-decoration: none;
}
</style>
