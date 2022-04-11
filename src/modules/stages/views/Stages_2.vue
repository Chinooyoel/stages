<template>
  <div @click="setFocus">
    <header class="header">
      <img src="@/assets/logo-lakaut-blanco.svg" class="logo" />
      <h1 class="font-lakaut-titulares display-2 pe-4">PASO 1 DE 4</h1>
    </header>
    <main class="main">
      <div>
        <input type="text" v-model="input" ref="input" class="hidden-input" />
        <h1>Bienvenid@ a Lakaut</h1>
        <h1 class="font-lakaut-titulares">ESCANEE SU CÓDIGO DE BARRAS</h1>
        <img src="@/assets/barcode-icon.svg" alt="" class="img-barcode" />
      </div>
    </main>
    <footer class="footer">
      <button class="btn-stage btn-stage-left" @click="back">
        <i class="bi bi-x-circle-fill text-danger pe-2"></i>CANCELAR
      </button>
    </footer>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";
import axios from "axios";
export default {
  data() {
    return {
      input: "",
    };
  },
  mounted() {
    this.setFocus();
    const callback = () => {
      this.$router.push({ name: "stage_1" });
    };
    this.startTimer({ durationInSeconds: 120, callback });
  },
  methods: {
    ...mapActions("stages", ["startTimer", "stopTimer"]),
    ...mapMutations("stages", [
      "showIsLoading",
      "hideIsLoading",
      "changeOperation",
    ]),
    setFocus() {
      this.$refs.input.focus();
    },
    async next() {
      this.stopTimer();
      this.showIsLoading();
      var formData = new FormData();
      formData.append("guide", this.input);
      const response = await axios.post(
        "http://localhost:8000/client/lakautValidateGuide/",
        formData
      );
      this.hideIsLoading();
      if (response.status === 200) {
        if (response.data.status === "passed") {
          this.changeOperation({
            guideNumber: response.data.guide,
            clientName: response.data.client,
            clientCuit: response.data.cuit,
            nodes: response.data.nodes,
          });
          this.$router.push({ name: "stage_3" });
        }
      }
    },
    back() {
      this.stopTimer();
      this.$router.push({ name: "stage_1" });
    },
  },
  watch: {
    input() {
      this.next();
    },
  },
  computed: {
    ...mapState("stages", ["stage"]),
  },
};
</script>

<style>
.img-barcode {
  width: 14vw;
}
</style>