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
export default {
  data() {
    return {
      input: "",
    };
  },
  methods: {
    ...mapActions("stages", ["startTimer"]),
    ...mapMutations("stages", ["changeNumberGuide"]),
    setFocus() {
      this.$refs.input.focus();
    },
    next() {
      this.changeNumberGuide(this.input)
      this.$router.push({ name: "stage_3" });
    },
    back() {
      this.$router.push({ name: "stage_1" });
    },
  },
  watch: {
    input() {
      this.next();
    },
  },
  mounted() {
    this.setFocus();
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