<template>
  <header class="header">
    <img src="@/assets/logo-lakaut-blanco.svg" class="logo" />
    <h1 class="font-lakaut-titulares display-2 pe-4">PASO 2 DE 4</h1>
  </header>
  <main class="main">
    <div class="timer">
      <h1 class="font-lakaut-titulares">
        <i class="fa fa-clock text-warning pe-2"></i>{{ getFormattedTimer }}
      </h1>
    </div>
    <div>
      <h1 class="mb-30">Código de barras válido</h1>
      <h2 class="mb-30">Hola {{ operation.clientName }}</h2>
      <h2 class="font-lakaut-titulares mb-30">
        INGRESE LA DOCUMENTACION EN EL BUZÓN
      </h2>
      <div class="animate-move-up-down icon-big text-light-blue">
        <i class="fa fa-angle-double-down"></i>
      </div>
    </div>
  </main>
  <footer class="footer">
    <button class="btn-stage btn-stage-left" @click="back">
      <i class="fa-solid fa-circle-xmark text-red pe-2"></i>CANCELAR
    </button>
    <button class="btn-stage btn-stage-right" @click="next">
      <i class="fa-solid fa-circle-arrow-down text-green pe-2"></i>CONTINUAR
    </button>
  </footer>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";
import { closeMailbox } from '../services';
export default {
  mounted() {
    const callback = () => {
      this.$router.push({ name: "stage_4" });
    };
    this.startTimer({ durationInSeconds: 30, callback });
  },
  methods: {
    ...mapActions("stages", ["startTimer", "stopTimer"]),
    ...mapMutations("stages", [
      "showIsLoading",
      "hideIsLoading"
    ]),
    next() {
      this.stopTimer();
      this.$router.push({ name: "stage_4" });
    },
    async back() {
      this.stopTimer();
      this.showIsLoading()
      await closeMailbox()
      this.hideIsLoading()
      this.$router.push({ name: "stage_1" });
    },
  },
  computed: {
    ...mapState("stages", ["operation"]),
    ...mapGetters("stages", ["getFormattedTimer"]),
  },
};
</script>

<style scoped>
.timer {
  align-self: flex-start;
  position: absolute;
  right: 0px;
  padding: 20px;
}
</style>