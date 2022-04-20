<template>
  <header class="header">
    <img src="@/assets/logo-lakaut-blanco.svg" class="logo" />
    <h1 class="font-lakaut-titulares display-2 pe-4">PASO 4 DE 4</h1>
  </header>
  <main class="main">
    <div>
      <h1 class="mb-15 fs-40">
        <i class="fa fa-check-circle fa-lg text-green pe-2"></i>Operación
        finalizada con éxito
      </h1>
      <h3 class="mb-15">La operación de ingreso fue exitosa, {{ operation.clientName }}.</h3>
      <h3 class="mb-15"></h3>
      <h3 class="mb-15">Guía: {{ operation.guideNumber }}</h3>
      <h3 class="mb-11 fs-21">CUIT: {{ operation.clientCuit }}</h3>
      <h3 class="mb-11 fs-21">
        Cantidad de despachos a verificar: {{ operation.nodes }}
      </h3>
      <h3 class="mb-11 fs-21">
        Ingresada en terminal {{ operation.terminal }}: {{ operation.datetime }}
      </h3>
      <h3 class="mb-11">Número de operación: {{ operation.ticketNumber }}</h3>
      <h3 class="fs-21 fs-16">
        El presente ticket no implica conformidad ni recepción de su guía,
        <br />
        la misma esta sujeta a revisión por un receptor de Lakaut S.A.
      </h3>
      <h2 class="mb-11 font-lakaut-titulares">RETIRE SU TICKET</h2>
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
      <i class="fa-solid fa-circle-check text-green pe-2"></i>
      FINALIZAR
    </button>
  </footer>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  mounted() {
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
<style scoped>
.fs-40 {
  font-size: 40px;
}
</style>
