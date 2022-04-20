<template>
  <header class="header">
    <img src="@/assets/logo-lakaut-blanco.svg" class="logo" />
  </header>
  <main class="main">
    <div>
      <h1 class="mb-20">
        <i class="fa-solid fa-circle-xmark text-red pe-2"></i>Operación fallida
      </h1>
      <h3 class="mb-20 fs-21">Número de guía: {{ operation.guideNumber }}</h3>
      <h3 class="mb-20 fs-21">Emitido: {{ operation.datetime }}</h3>
      <h3 class="mb-20 fs-21">
        Número de operación: {{ operation.ticketNumber }}
      </h3>
      <h2 class="font-lakaut-titulares mb-15">RETIRE SU TICKET</h2>
      <h3 class="mb-30">Gracias</h3>
      <div class="animate-move-up-down icon-big text-light-blue">
        <i class="fa fa-angle-double-down"></i>
      </div>
    </div>
    <div class="pos-bottom">
      <h4 class="text-black fs-20">
        Si el ticket no fue impreso, puede tomar una fotografía de la pantalla.
      </h4>
    </div>
  </main>
  <footer class="footer">
    <button class="btn-stage btn-stage-left" @click="back">
      <i class="fa-solid fa-circle-xmark text-red pe-2"></i>
      VOLVER A COMENZAR
    </button>
  </footer>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  mounter() {
    const callback = () => {
      this.$router.push({ name: "stage_1" });
    };
    this.startTimer({ durationInSeconds: 50, callback });
  },
  methods: {
    ...mapActions("stages", ["startTimer", "stopTimer"]),
    back() {
      this.stopTimer();
      this.$router.push({ name: "stage_1" });
    },
  },
  computed: {
    ...mapState("stages", ["operation"]),
  },
};
</script>
