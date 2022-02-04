<template>
  <div class="loginPage">
    <div class="container">
      <div class="login-box">
        <div class="header">
          <p>Control Panel Log In</p>
        </div>
        <div class="content">
          <q-input class="text" v-model="userInfo.username" label="username" />
          <q-input class="text" v-model="userInfo.password" label="password" />
        </div>
        <div class="footer">
          <p class="failMessage" v-if="failMessage">
            {{ failMessageText }}
          </p>
          <q-btn
            @click="login"
            class="btn"
            unelevated
            color="primary"
            label="Log In"
          />

          <div>
            <a class="link" href="/#/register">Register</a>
            <a class="link" href="/">Home Page</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      failMessageText: "",
      failMessage: false,
      userList: [],
      userInfo: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      this.failMessage = false;
      if (this.userInfo.username == "" || this.userInfo.password == "") {
        this.failMessage = true;
        this.failMessageText = "Please fill in the relevant fields"; // Text kutuları boş
      } else {
        //Get User List
        axios
          .get("https://cards-a348d-default-rtdb.firebaseio.com/users.json")
          .then((response) => {
            this.userList = response.data;
            this.userList = Object.values(this.userList);

            const founData = this.userList.find((item, index) => {
              if (item.username === this.userInfo.username) {
                return true;
              }
            });
            if (founData) {
              this.$store.commit("usernameMutations", founData.username);

              localStorage.setItem("token", founData.username); // Kayıt Bulundu. Token dolduruldu

              this.$router.push("/controlPanel/home");
            } else {
              this.failMessage = true;
              this.failMessageText = "No Records Found";
              console.log("Kayıt Bulunamadı");
            }
          });
      }
    },
  },
};
</script>

<style scoped>
.footer div {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
}
.failMessage {
  width: 100%;
  text-align: center;
  background-color: rgb(221, 45, 22);
  color: white;
  padding: 7px;
}
.link {
  color: white;
  display: block;
  text-align: center;
  margin-top: 15px;
  text-decoration: none;
}
.btn {
  width: 100%;
  margin-top: 15px;
}
.text {
  background-color: rgba(226, 215, 215, 0.2);
  color: white !important;
  padding-left: 10px;
}
.header p {
  color: white;
  font-size: 22px;
  font-weight: 600;
  display: block;
  text-align: center;
  margin-top: 10px;
}
.loginPage {
  position: absolute;
  width: 100%;
  height: 100vh;
  background-image: url("https://wallpapercave.com/wp/wp2704824.jpg");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
.login-box {
  background-color: rgba(167, 160, 160, 0.6);
  width: 350px;
  border-radius: 15px;
  margin-top: 150px;
  margin-left: auto;
  margin-right: auto;
  padding: 15px;
}
</style>
