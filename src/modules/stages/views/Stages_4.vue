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
      <i class="fa-solid fa-circle-xmark text-red pe-2"></i>
      NO, NECESITO MÁS TIEMPO
    </button>
    <button class="btn-stage btn-stage-right" @click="next">
      <i class="fa-solid fa-circle-check text-green pe-2"></i>
      SI, CERRAR BUZÓN
    </button>
  </footer>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
import { closeMailbox, confirmGuide, printTicket } from "../services";
export default {
  mounter() {
    const callback = async () => {
      this.showIsLoading()
      await closeMailbox()
      this.hideIsLoading()
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
      const response = await confirmGuide(
        this.operation.guideNumber,
        this.operation.clientName,
        this.operation.clientCuit,
        this.operation.nodes
      );
      this.hideIsLoading();
      if (response.status && response.status === 200) {
        if (response.data.status === "passed") {
          this.changeOperation({
            datetime: response.data.datetime,
            ticketNumber: response.data.ticket,
            terminal: response.data.terminal,
            info: response.data.info,
          });
          printTicket(
            this.operation.guideNumber,
            this.operation.clientName,
            this.operation.clientCuit,
            this.operation.nodes,
            this.operation.datetime,
            this.operation.ticketNumber,
            this.operation.terminal,
            this.operation.info
          );
          this.$router.push({ name: "stage_5" });
        }
      }else{
          this.$router.push({ name: "stage_6" });
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
