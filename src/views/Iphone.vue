<template>
  <div>
    <NavBar />
    <div id="iphone">
      <div class="container">
        <button @click="handleSlide" class="slider">SLIDE UP AND DOWN</button>
        <div class="container-phone">
          <div class="container-phone-screen">
            <!----------------------------------------
                              SCREEN
            ----------------------------------------->

            <div class="screen">
              <div :class="{ screenOn: screenOn }" class="screen-bg">
                <div :class="{ slideOn: slideOn }" class="screen-container">
                  <div class="screen-container-bloc">
                    <p class="screen-container-bloc-para">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Itaque in accusamus, cumque ut nesciunt earum vel!
                    </p>
                  </div>
                  <div class="screen-container-bloc">
                    <p class="screen-container-bloc-para">SPORT AUTOMOBILE</p>
                  </div>
                  <div class="screen-container-bloc">
                    <p class="screen-container-bloc-para"></p>
                  </div>
                  <div class="screen-container-bloc">
                    <p class="screen-container-bloc-para">
                      <img
                        class="screen-container-bloc-para-img"
                        src=""
                        alt=""
                      />
                    </p>
                  </div>
                  <div class="screen-container-bloc">
                    <p class="screen-container-bloc-para"></p>
                  </div>
                  <div class="screen-container-bloc">
                    <p class="screen-container-bloc-para"></p>
                  </div>
                  <div class="screen-container-bloc">
                    <p class="screen-container-bloc-para"></p>
                  </div>
                  <div class="screen-container-bloc">
                    <p class="screen-container-bloc-para"></p>
                  </div>
                  <div class="screen-container-bloc">
                    <p class="screen-container-bloc-para"></p>
                  </div>
                </div>
              </div>

              <!---------------------------------------->
            </div>
          </div>
          <!------------------------------------------
                         HOME BUTTON  
          -------------------------------------------->
          <div @click="turnOnPhone" class="container-phone-button"></div>
          <!------------------------------------------>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
export default {
  name: "Iphone",
  components: { NavBar },
  data() {
    return {
      screenOn: false,
      slideOn: false,
    };
  },
  methods: {
    turnOnPhone() {
      this.screenOn = !this.screenOn;
      if (this.screenOn === false) this.slideOn = false;
    },
    handleSlide() {
      if (this.screenOn === false) this.slideOn = false;
      else this.slideOn = !this.slideOn;
    },
  },
};
</script>

<style scoped>
#iphone {
  min-height: 100vh;
  padding-top: 100px;
  background: #ff6262;
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#ff6262),
    to(#ff7535)
  );
  background: linear-gradient(90deg, #ff6262 0%, #ff7535 100%);
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.slider {
  display: block;
  margin: 0 auto;
  height: 100px;
  font-size: 2rem;
  color: #fff;
  background: rgba(255, 255, 255, 0.3);
  text-align: center;
  width: 50%;
}

.container {
  margin: 100px auto;
  width: 500px;
  height: 500px;
}

.container-phone {
  background: #fcfbfb;
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#fcfbfb),
    to(#d5d5d5)
  );
  background: linear-gradient(90deg, #fcfbfb 0%, #d5d5d5 100%);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin: 0 auto;
  width: 230px;
  height: 450px;
  border-radius: 20px 20px;
  -webkit-box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.6);
  box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.6);
}

.container-phone-screen {
  margin: 45px auto 0 auto;
  background: #242424;
  width: 215px;
  height: 340px;
}

.container-phone-button {
  -ms-flex-item-align: center;
  -ms-grid-row-align: center;
  align-self: center;
  margin: auto 0;
  background: #fcfbfb;
  background: radial-gradient(
    circle,
    rgba(252, 251, 251, 0.7) 49%,
    rgba(70, 70, 70, 0.7) 100%
  );
  -webkit-box-shadow: 1px -1px 1px rgba(0, 0, 0, 0.5);
  box-shadow: 1px -1px 1px rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  width: 40px;
  height: 40px;
}

.container-phone-button:hover {
  cursor: pointer;
  -webkit-box-shadow: 1px -1px 1px rgba(0, 0, 0, 0.1);
  box-shadow: 1px -1px 1px rgba(0, 0, 0, 0.1);
}

.screen {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.screen-bg {
  background: url("https://images.wallpaperscraft.com/image/couple_mountains_travel_125490_240x400.jpg");
  width: 100%;
  height: 100%;
  opacity: 0;
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

.screen-container {
  overflow-y: scroll;
  scrollbar-width: thin;
  height: 100%;
  -webkit-transform: translateY(340px);
  transform: translateY(340px);
  -webkit-transition: 0.7s cubic-bezier(0.47, 0.86, 0.85, 0.76);
  transition: 0.7s cubic-bezier(0.47, 0.86, 0.85, 0.76);
}

.screen-container-bloc {
  margin: 0.3rem auto;
  width: 92%;
  height: calc(100% / 5 - 10px);
  background: rgba(255, 255, 255, 0.5);
  border-radius: 2px;
  -webkit-box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  -webkit-transition: 0.3s;
  transition: 0.3s;
}

.screen-container-bloc:hover {
  background: rgba(255, 255, 255, 0.8);
  -webkit-transform: scale(1.03);
  transform: scale(1.03);
}

.screen-container-bloc-para {
  margin: 0;
  padding: 0.2rem;
  font-size: 0.5rem;
  color: #000;
}

.screen-container-bloc-img {
  width: 50%;
  height: auto;
}

.screen-container-bloc:nth-child(2) {
  background: url("https://images.wallpaperscraft.com/image/drift_nissan_sport_cars_smoke_81217_320x240.jpg");
  background-repeat: no-repeat;
  background-size: 100%;
  background-position-y: -50px;
  color: red;
  font-weight: bold;
}

/*--------------------------------------
          class for transition  
  ---------------------------------------*/
.slideOn {
  -webkit-transform: translateY(0);
  transform: translateY(0);
}

.screenOn {
  opacity: 1;
  -webkit-transition: 0.8s;
  transition: 0.8s;
}
</style>