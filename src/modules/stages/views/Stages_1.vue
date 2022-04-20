<template>
  <main @click="next">
    <video muted autoplay loop>
      <source src="@/assets/videopresentacion.mp4" />
    </video>
    <div class="text-welcome">
      <h1 class="font-lakaut-titulares text-white">
        TOQUE PARA INICIAR
      </h1>
    </div>
  </main>
</template>

<script>
import { mapMutations } from "vuex";
import { checkHardwareStatus } from "../services/index"

export default {
  mounted(){
    // restart operation
    this.changeOperation({         
      start: false,
      guideNumber: null,
      clientName: null,
      clientCuit: null,
      ticketNumber: null,
      terminal: null,
      nodes: null,
      datetime: null,
      info: null
    });
  },
  methods: {
    ...mapMutations("stages", [
      "showIsLoading",
      "hideIsLoading",
      "changeOperation",
    ]),
    async next() {
      this.showIsLoading();
      const response = await checkHardwareStatus()
      this.hideIsLoading();
      this.changeOperation({ start: true });
      if (response.status && response.status === 200) {
        if (response.data.status === "passed") {
          this.$router.push({ name: "stage_2" });
        }else if (response.data.status === "blocked"){
          this.changeOperation({ info: response.data.info });
          this.$router.push({ name: "stage_9" });
        }
      }else{
          this.$router.push({ name: "stage_6" });
      }
    },
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