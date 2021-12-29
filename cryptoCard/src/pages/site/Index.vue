<template>
  <div>
    <div class="q-pa">
      <!--top section -->
      <div class="bg text-white q-pa-md">
        <div class="container">
          <div class="row">
            <div class="col-md-6 float-left">
              <span class="title2">
                Get your place cards in 5 minutes. Make your wedding stand out
                with our gorgeous placve cards..</span
              >
              <p class="title3">
                You'll receive a PDF containing place cards ready for your
                printer.
              </p>
              <a class="btn" href="/#/cards">Choose Your Card</a>
            </div>
            <div class="col-md-6 float-left">
              <img class="img1" src="../../../public/img1.png" />
            </div>
          </div>
          <div class="bos"></div>
        </div>
      </div>

      <!--info section -->
      <div class="info-section">
        <div class="container">
          <div class="info-box">
            <span>Use beautiful wedding place cards</span>
            <p>We have have numerous templates to choose from</p>
            <a href="/#/cards">Choose a template</a>
          </div>
        </div>
      </div>

      <!--info2 section -->
      <div class="bg text-white q-pa-md">
        <div class="container">
          <div class="row">
            <div class="col-md-6 float-left">
              <img class="img2" src="../../../public/logo.png" />
            </div>
            <div class="col-md-6 float-left">
              <span class="title2">
                These cases are perfectly simple and easy to distinguish.These
                cases are perfectly simple and easy to distinguish.
              </span>
              <p class="title3">
                On the other hand, we denounce with righteous indignation and
                dislike men who are so beguiled and demoralized by the charms of
                pleasure of the moment, so blinded by desire, that they cannot
                foresee the pain and trouble that are bound to ensue; and equal
                blame belongs to those who fail in their duty through weakness
                of will, which is the same as saying through shrinking from toil
                and pain. These cases are perfectly simple and easy to
                distinguish. In a free hour, when our power of choice is
                untrammelled and when nothing prevents our being able to do what
                we like best, every pleasure is to be welcomed and every pain
                avoided. But in certain circumstances and owing to the claims of
                duty or the obligations
              </p>
            </div>
          </div>
          <div class="bos"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="css" scoped>
.container {
  display: flex;
  justify-content: center;
}
.info-section {
  background-color: #97bfb4;
  height: auto;
  width: 100%;
  padding: 20px;
}
.info-box {
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-items: center;
}
.info-box span {
  font-size: 32px;
  font-weight: 700;
}
.info-box p {
  font-size: 22px;
  font-weight: 500;
  display: block;
  margin-top: 20px;
  text-align: center;
}
.info-box a {
  font-size: 18px;
  border-radius: 10px;
  font-weight: 700;
  text-align: center;
  width: 180px;
  text-decoration: none;
  padding: 15px;
  color: white;
  background-color: rgba(8, 57, 114, 0.481);
  margin-left: auto;
  margin-right: auto;
}
.info-box a:hover {
  background-color: rgba(8, 57, 114, 0.581);
}
.title2 {
  display: block;
  margin-top: 50px;
  margin-bottom: 20px;
  color: black;
  font-size: 22px;
  font-weight: 700;
  margin-left: 30px;
}
.title3 {
  display: block;
  margin-top: 10px;
  margin-bottom: 20px;
  color: black;
  font-size: 18px;
  font-weight: 400;
  margin-left: 30px;
}
.btn {
  display: inline-block;
  font-size: 18px;
  border-radius: 10px;
  font-weight: 700;
  text-align: center;
  width: 180px;
  text-decoration: none;
  padding: 15px;
  color: white;
  background-color: rgba(8, 57, 114, 0.481);
  margin-top: 30px;
  margin-left: 30px;
}
.bos {
  height: 80px;
}
.img1 {
  margin: 50px;
  margin-left: 150px;
}
.img2 {
  margin: 50px;
  margin-left: 150px;
  border-radius: 50%;
}
</style>
