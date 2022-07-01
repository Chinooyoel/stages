<template>
  <header class="header"></header>
  <main class="main">state 4
    {{getFormattedTimer}}
    {{operation.clientName}}
    {{palabra}}
    <button v-on:click='addtiempo'>
        agregar mas tiempo
    </button>
  </main>
  <footer class="footer"></footer>
</template>



<script>

import { mapState, mapActions, mapGetters } from 'vuex';
export default {
  data(){
    return{
      palabra: null
    }
  },
   computed: {
  ...mapGetters("stages", ["getFormattedTimer"]),
   ...mapState('stages', ['operation']),
 },
   methods: {
    ...mapActions("stages", ["startTimer", "stopTimer"]),
    addtiempo(){
        let segundosActuales = this.getFormattedTimer.split(":")[1]
        console.log(segundosActuales)
        this.stopTimer()
        this.startTimer({ durationInSeconds: (Number(segundosActuales) + 10), function(){
          this.$router.push({name: "stage_3"})
        } });
    }
  },
   mounted() {
    const callback = () => {
      //consultar api para confirmar
      //cerrar buzon
      this.$router.push({name: "stage_3"})
    };
    this.startTimer({ durationInSeconds: 30, callback });
  },
  watch: {
      getFormattedTimer( value, oldValue ){
        let variable;
        if(value === "00:20"){
          this.addtiempo()
          this.palabra = "Agregamos mas tiempo"

        }
      }
  }

};
</script>

<style>
</style>