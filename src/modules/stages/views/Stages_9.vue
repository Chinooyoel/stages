<template>
  <header class="header">
    <img src="@/assets/logo-lakaut-blanco.svg" class="logo" />
  </header>
  <main class="main">
    <div>
      <h1 class="mb-20">
        <i class="fa-solid fa-circle-xmark text-red pe-2"></i>TERMINAL INHABILITADO
      </h1>
      <h2 class="mb-30" v-for="item in operation.info" :key="item.message">{{item.msg}}</h2>
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
import { mapActions, mapState } from "vuex";
export default {
  mounted() {
    const callback = () => {
      this.$router.push({ name: "stage_1" });
    };
    this.startTimer({ durationInSeconds: 15, callback });
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
