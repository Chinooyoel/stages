<template>
  <main @click="next">
    <video muted autoplay loop>
      <source src="@/assets/videopresentacion.mp4" />
    </video>
    <div class="text-welcome">
      <h1 class="font-lakaut-titulares text-white">
        TOQUE LA PANTALLA PARA INICIAR
      </h1>
    </div>
  </main>
</template>

<script>
import { mapMutations } from "vuex";
import axios from "axios";
export default {
  methods: {
    ...mapMutations("stages", ["showIsLoading", "hideIsLoading"]),
    async next() {
      this.showIsLoading();
      const response = await axios.get("http://localhost:8000/client/checkHardwareStatus");
      this.hideIsLoading();
      if (response.status === 200) {
        if (response.data.status === "passed") {
          this.$router.push({ name: "stage_2" });
        }
      }
    }
  },
};
</script>

<style scoped>
main {
  height: 100vh;
}
video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.text-welcome {
  bottom: 5px;
  position: absolute;
  text-align: center;
  width: 100%;
}
.text-welcome h1 {
  padding: 10px;
  background: rgb(86, 39, 245, 0.9);
  border-radius: 10px;
  display: inline-block;
}
</style>