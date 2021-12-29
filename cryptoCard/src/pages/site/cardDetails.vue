<template>
  <div>
    <div class="q-pa">
      <!--top section -->
      <div class="bg">
        <div class="header">
          <p>
            Welcome back! It looks like you were making some place cards
            earlier. Would you like to go edit those cards?
          </p>
        </div>
        <div class="container">
          <div class="row">
            <p class="choose">Edit your card</p>

            <br />

            <div class="edit-box">
              <div class="edit-header"></div>
              <div class="img">
                <!-- <img src="../../../public/cards/4.png" /> -->
              </div>
              <div class="edit-footer"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.edit-box {
  width: 100%;
  background-color: #dfd7d7;
  padding: 2px;
}
.edit-header {
  width: 100%;
  height: 80px;
  background-color: #f3f3f3;
}
.choose {
  text-align: center;
  display: block;
  width: 100%;
  font-size: 25px;
  padding: 20px;
}
.header {
  background-color: #ffdd57;
  height: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 15px;
}
.header p {
  font-size: 25px;
}
</style>
