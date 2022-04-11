<template>
  <header class="header">
    <img src="@/assets/logo-lakaut-blanco.svg" class="logo" />
    <h1 class="font-lakaut-titulares display-2 pe-4">PASO 4 DE 4</h1>
  </header>
  <main class="main">
    <div>
      <h1>Operación finalizada con éxito</h1>
      <h3>Guía: {{ operation.guideNumber }}</h3>
      <h3>CUIT: {{ operation.clientCuit }}</h3>
      <h3>Cantidad de despachos a verificar: {{ operation.nodes }}</h3>
      <h3>
        Ingresada en terminal {{ operation.terminal }}: {{ operation.datetime }}
      </h3>
      <h3>Número de operación: {{ operation.ticketNumber }}</h3>
      <h4>
        El presente ticket no implica conformidad ni recepción de su guía,
      </h4>
      <h4>la misma esta sujeta a revisión por un receptor de Lakaut S.A.</h4>
      <h1 class="font-lakaut-titulares">RETIRE SU TICKET</h1>
      <h3>Gracias</h3>
    </div>
    <div class="pos-bottom">
      <h4 class="text-black">
        Si el ticket no fue impreso, puede tomar una fotografía
      </h4>
    </div>
  </main>
  <footer class="footer">
    <button class="btn-stage btn-stage-left" @click="back">
      <i class="bi bi-check-circle-fill text-success pe-2"></i>
      FINALIZAR
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
      this.$router.push({ name: "stage_1" });
    },
  },
  computed: {
    ...mapState("stages", ["operation"]),
  },
};
</script>
<style scoped>
.pos-bottom {
  align-self: flex-end;
  position: absolute;
}
</style>
