<template>
  <header class="header">
    <img src="@/assets/logo-lakaut-blanco.svg" class="logo" />
    <h1 class="font-lakaut-titulares display-2 pe-4">PASO 3 DE 4</h1>
  </header>
  <main class="main">
    <div>
      <h1 class="font-lakaut-titulares">¿La documentación fue ingresada?</h1>
    </div>
  </main>
  <footer class="footer">
    <button class="btn-stage btn-stage-left" @click="back">
      <i class="bi bi-x-circle-fill text-danger pe-2"></i>
      NO, NECESITO MÁS TIEMPO
    </button>
    <button class="btn-stage btn-stage-right" @click="next">
      <i class="bi bi-check-circle-fill text-success pe-2"></i>
      SI, CERRAR BUZÓN
    </button>
  </footer>
</template>

<script>
import axios from "axios";
import { mapActions, mapMutations, mapState } from "vuex";
export default {
  mounter() {
    const callback = () => {
      this.$router.push({ name: "stage_1" });
    };
    this.startTimer({ durationInSeconds: 240, callback });
  },
  methods: {
    ...mapMutations("stages", [
      "showIsLoading",
      "hideIsLoading",
      "changeOperation",
    ]),
    ...mapActions("stages", ["startTimer", "stopTimer"]),
    async next() {
      this.showIsLoading();
      var formData = new FormData();
      formData.append("guide", this.operation.guideNumber);
      formData.append("client", this.operation.clientName);
      formData.append("cuit", this.operation.clientCuit);
      formData.append("nodes", this.operation.nodes);
      const response = await axios.post(
        "http://localhost:8000/client/lakautConfirmGuide/",
        formData
      );
      this.hideIsLoading();
      if (response.status === 200) {
        if (response.data.status === "passed") {
          this.changeOperation({
            datetime: response.data.datetime,
            ticketNumber: response.data.ticket,
            terminal: response.data.terminal,
          });
          this.$router.push({ name: "stage_5" });
        }
      }
    },
    back() {
      this.$router.push({ name: "stage_3" });
    },
  },
  computed: {
    ...mapState("stages", ["operation"]),
  },
};
</script>
