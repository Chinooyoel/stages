<template>
  <header class="header">
    <h1>Etapa {{stage.current}} de {{stage.total}}</h1>
  </header>
  <main class="main">2</main>
  <footer class="footer"></footer>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
  methods: {
    ...mapActions("stages", ["startTimer"]),
  },
  mounted(){
    const callback = () => {
      this.$router.push({name: "stage_1"})
    }
    this.startTimer({durationInSeconds: 10, callback})
  },
  computed: {
    ...mapState("stages", ["stage"])
  }
};
</script>

<style>
</style>