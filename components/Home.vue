<!-- Please remove this file from your project -->
<template>
  <div class="container">
    <div class="background-image"></div>

    <div class="content">
      <button
        v-if="visible"
        :class="[
          'play-button animate__animated animate__delay-1s animate__slow',
          { animate__fadeout: !visible },
        ]"
        @click="playAudio"
      >
        <i class="fas fa-play"></i>
      </button>
      <template v-else>
        <h1
          class="animate__animated animate__fadeIn animate__delay-1s animate__slow"
        >
          My Apology
        </h1>
        <p
          v-if="text1"
          class="animate__animated animate__fadeIn animate__delay-2s animate__slow"
        >
          Words will never fully express how sorry I am, but I truly hope that
          it is a good start
        </p>
        <p
          v-if="text2"
          class="animate__animated animate__fadeIn animate__delay-2s animate__slow"
        >
          I regret nothing more in life than what I have done to you.
        </p>
        <p
          v-if="text3"
          class="animate__animated animate__fadeIn animate__delay-2s animate__slow"
        >
          I can’t bear to see you unhappy because of my actions. When our
          relationship began, I promised to myself that I would make you happy.
          I failed. I failed both of us.
        </p>
        <p
          v-if="text4"
          class="animate__animated animate__fadeIn animate__delay-2s animate__slow"
        >
          I hope that you can find it in your heart to forgive me.
        </p>
        <p
          v-if="text4"
          class="animate__animated animate__fadeIn animate__delay-2s animate__slow"
        >
          Love you ❤️ Thu Hiền
        </p>
      </template>
    </div>

    <audio ref="audio" controls autoplay loop style="display: none">
      <source src="/music.mp3" />
    </audio>
  </div>
</template>

<script>
// import "font-awesome/css/font-awesome.min.css";
export default {
  data() {
    return {
      text1: false,
      text2: false,
      text3: false,
      text4: false,
      audio: null,
      visible: true,
    };
  },
  async mounted() {
    this.$refs.audio.play();
    await this.sleep(3000);
    this.text1 = true;
    await this.sleep(3000);
    // document.querySelector('[data-testid="play-mute-btn"]').click();
    this.text2 = true;
    await this.sleep(5000);
    this.text3 = true;
    await this.sleep(10000);
    this.text4 = true;
  },
  methods: {
    sleep(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    },
    playAudio() {
      this.visible = false;
      this.$refs.audio.play();
    },
  },
};
</script>
<style>
.background-image {
  background-image: url("~assets/images/background.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100vw;
  filter: blur(5px) brightness(0.5);
  z-index: -1;
}
.content {
  font-family: cursive;
  color: #fff;
  position: absolute;
  top: 30%;
  transform: translateY(-50%);
  left: 0;
  height: 50vh;
  width: 100vw;
}
h1 {
  text-align: center;
  font-size: 3rem;
}
p {
  text-align: center;
  margin: auto;
  padding: 0 45px;
  font-size: 1.4rem;
}
p + p {
  margin-top: 20px;
}

.audio-player {
  display: flex;
  align-items: center;
  font-family: Arial, sans-serif;
}

.play-button {
  background-color: rgb(255 255 255 / 52%);
  border: none;
  border-radius: 22%;
  padding: 48px 100px;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
}

.play-button:hover {
  cursor: pointer;
  opacity: 0.9;
}

.play-button i {
  font-size: 24px;
}
</style>
