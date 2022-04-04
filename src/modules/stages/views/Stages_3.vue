<template>
  <header class="header">
    <img src="@/assets/logo-lakaut-blanco.svg" class="logo" />
    <h1 class="font-lakaut-titulares display-2 pe-4">PASO 2 DE 4</h1>
  </header>
  <main class="main">
    <div class="timer">
      <h1 class="font-lakaut-titulares"><i class="bi bi-stopwatch text-warning"></i>  00:11</h1>
    </div>
    <div>
      <h1>Código de barras válido</h1>
      <h2>Hola CANTEROS DAMIAN</h2>
      <h1 class="font-lakaut-titulares">
        INGRESE LA DOCUMENTACION EN EL BUZÓN
      </h1>
    </div>
  </main>
  <footer class="footer">
    <button class="btn-stage btn-stage-left" @click="back">
      <i class="bi bi-x-circle-fill text-danger pe-2"></i>CANCELAR
    </button>
    <button class="btn-stage btn-stage-right" @click="next">
      <i class="bi bi-arrow-down-circle-fill text-success pe-2"></i>CONTINUAR
    </button>
  </footer>
</template>

<script>
export default {
  methods: {
    next() {
      this.$router.push({ name: "stage_4" });
    },
    back() {
      this.$router.push({ name: "stage_1" });
    },
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