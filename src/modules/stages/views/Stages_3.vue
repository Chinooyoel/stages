<template>
  <header class="header"></header>
  <main class="main">
    <input type="text" v-model="name">
    <button v-on:click='next'>
        Ingresar
    </button>
        <button v-on:click='back'>
        Ingresar
    </button>
  </main>
  <footer class="footer"></footer>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
    data() {
      return {
          name: ''
      }
    },
    methods: {
      ...mapMutations("stages", ["showIsLoading", "hideIsLoading"]),
      async next(){
        //abrir buzon

      this.showIsLoading();
      await this.timeout(3000);
      this.hideIsLoading();
        // consultar api
          this.changeOperation({clientName: this.name})

        this.$router.push({name: "stage_4"})

      },
    timeout(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    },
      back(){
        this.$router.push({name: "stage_2"})
      },
    ...mapMutations("stages", ["changeOperation"]),
    }

};
</script>

<style>
</style>