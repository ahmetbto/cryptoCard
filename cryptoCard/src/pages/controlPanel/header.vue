<template>
  <div class="header">
    <div class="siteyi-onizle-alani">
      <i class="fas fa-wifi"></i>
      <a target="_blank" href="/">Siteyi Önizle</a>
    </div>

    <div class="profil-section">
      <div class="profile">
        <img
          src="data:image/png;base64,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"
          class="user"
        />
        <div class="profile-name">
          <p>{{ username }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    username() {
      return localStorage.getItem("token");
    },
  },
};
</script>

<style scoped>
.profil-section {
  padding: 10px;
  height: 80px;
}
.profile-name {
  display: flex;
  flex-direction: column;
}
.profile-name p {
}
.siteyi-onizle-alani {
  padding-top: 10px;
  display: flex;
  flex-direction: row;
}
.siteyi-onizle-alani i {
  padding-top: 10px;
  margin-right: 9px;
}
.siteyi-onizle-alani a {
  padding-top: 6px;
  color: gray;
}
.container-fluid {
  width: 100%;
  height: 100px;
  padding: 20px;
  font-family: "Nunito", sans-serif;
  border-bottom: 1px solid rgba(26, 22, 22, 0.2);
  margin: 0 !important;
  font-size: 14px;
  color: #66686e;
  background-color: rgba(237, 243, 237, 0.8);

  margin-left: 0px !important;
  width: calc(100% + 45px) !important;
}

.user {
  border-radius: 50%;
  width: 50px;
  object-fit: cover;
  height: 50px;
  border: 1px solid rgb(48, 35, 35);
}
.header {
  display: flex;
  width: 100%;
  background-color: rgba(237, 243, 237, 0.5);
  flex-direction: row;
  justify-content: space-between;
  padding: 30px;
}
.profile {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.profile img {
  margin-right: 10px;
}
.profile p {
  margin-top: 10px;
}
</style>
