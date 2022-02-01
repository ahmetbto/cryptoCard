<template>
  <div class="loginPage">
    <div class="container">
      <div class="login-box">
        <div class="header">
          <p>Control Panel Register</p>
        </div>
        <div class="content">
          <q-input
            type="email"
            class="text"
            v-model="userInfo.username"
            label="username"
          />

          <q-input
            class="text"
            v-model="userInfo.password"
            label="password"
            :rules="passwordRules"
          />
        </div>
        <div class="footer">
          <p class="succesMessage" v-if="succesMessage">
            Registration Successful
          </p>
          <p class="failMessage" v-if="failMessage">
            Please Fill in The Fields
          </p>
          <q-btn
            @click="register"
            class="btn"
            unelevated
            color="primary"
            label="Register"
          />
          <div>
            <a class="link" href="/#/login">Log In</a>
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
      regEmail: "",
      succesMessage: false,
      failMessage: false,

      userInfo: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    register() {
      this.succesMessage = false;
      this.failMessage = false;

      if (this.userInfo.username == "" || this.userInfo.password == "") {
        this.failMessage = true;
      } else {
        axios
          .post(
            "https://cards-a348d-default-rtdb.firebaseio.com/users.json",
            this.userInfo
          )
          .then((response) => {
            this.succesMessage = true;
          });
      }
    },
  },
};
</script>

<style scoped>
.succesMessage {
  width: 100%;
  text-align: center;
  background-color: green;
  color: white;
  padding: 7px;
}

.failMessage {
  width: 100%;
  text-align: center;
  background-color: rgb(221, 45, 22);
  color: white;
  padding: 7px;
}
.footer div {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
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
