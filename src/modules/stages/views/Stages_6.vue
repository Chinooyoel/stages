<template>
  <header class="header">
    <img src="@/assets/logo-lakaut-blanco.svg" class="logo" />
  </header>
  <main class="main">
    <div>
      <h1 class="font-lakaut-titulares mb-20"><i class="fa-solid fa-circle-xmark text-red pe-2"></i>HA OCURRIDO UN ERROR INESPERADO</h1>
      <h3 class="mb-20">Por favor intente nuevamente realizar la operación</h3>
      <h3>Gracias</h3>
    </div>
  </main>
  <footer class="footer">
    <button class="btn-stage btn-stage-left" @click="back">
      <i class="fa-solid fa-circle-xmark text-red pe-2"></i>
      CANCELAR
    </button>
  </footer>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  mounter() {
    const callback = () => {
      this.$router.push({ name: "stage_1" });
    };
    this.startTimer({ durationInSeconds: 30, callback });
  },
  methods: {
    ...mapActions("stages", ["startTimer", "stopTimer"]),
    back() {
      this.stopTimer();
      this.$router.push({ name: "stage_1" });
    },
  },
};
</script>
