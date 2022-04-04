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
export default {
  methods: {
    next() {
      this.$router.push({ name: "stage_5" });
    },
    back() {
      this.$router.push({ name: "stage_3" });
    },
  },
};
</script>
