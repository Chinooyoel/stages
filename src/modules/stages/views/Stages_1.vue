<template>
  <div @click="setFocus">
    <header class="header">
      <h1>Etapa {{stage.current}} de {{stage.total}}</h1>
    </header>
    <main class="main">
      {{ getFormattedTimer }}
      <button class="btn btn-primary" @click="next">Continuar</button>
      <input type="text" v-model="input" ref="input" class="hidden-input"/>
    </main>
    <footer class="footer"></footer>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";
export default {
  data() {
    return {
      input: "",
    };
  },
  methods: {
    ...mapMutations("stages", ["showIsLoading", "hideIsLoading", "setStage", "changeOperation"]),
    ...mapActions("stages", ["startTimer", "stopTimer"]),
    async next() {
      this.stopTimer();
      // Consulta a api
      this.showIsLoading();
      await this.timeout(3000);
      this.hideIsLoading();
      this.changeOperation({ start: true });

      this.setStage("2");
      this.$router.push({ name: "stage_2" });
    },
    timeout(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    },
    setFocus() {
      this.$refs.input.focus();
    },
  },
  computed: {
    ...mapGetters("stages", ["getFormattedTimer"]),
    ...mapState("stages", ["stage"]),
  },
  mounted() {
    const callback = () => {
      this.$router.push({name: "stage_2"})
    };
    this.startTimer({ durationInSeconds: 10, callback });
    this.setFocus();
  },
};
</script>

<style>
.hidden-input {
  width: 1px;
  height: 1px;
  opacity: 0;
  display: inline;
  padding: 0;
  border: 0;
  position: absolute;
  z-index: -100;
}
</style>