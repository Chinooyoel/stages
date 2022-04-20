<template>
  <header class="header">
    <img src="@/assets/logo-lakaut-blanco.svg" class="logo" />
  </header>
  <main class="main">
    <div>
      <h1 class="mb-20">
        <i class="fa-solid fa-circle-xmark text-red pe-2"></i>Operación fallida
      </h1>
      <h2 class="mb-30">{{operation.info}}</h2>
      <h3 class="mb-30 font-lakaut-titulares message" style="font-size: 26px;">Atención al cliente</h3>
      <hr class="hr mb-30" style="height:1px;border-width:0;color:gray;background-color:gray; width: 35%;display:inline-block">
      <h3 class="mb-30 number fs-21">0800-122-PSAD (7723) | 0810-122-7723 Desde el interior del país</h3>
      <h3 class="mb-30 wppMessage font-lakaut-titulares fs-21">Comunicate con nosotros a través de whatsapp:</h3>
      <div class="wppNumber" style="display: flex; justify-content: center;">
          <img src="@/assets/whatsapp_logo.png" style="width:2%; margin-top: 6px;">
          <h3 class="fs-21" style="margin-top: 8px; margin-left: 5px;">+54 9 11 5567-8020</h3>
          <img src="@/assets/whatsapp_logo.png" style="width:2%; margin-left: 30px; margin-top: 6px;">
          <h3 class="fs-21" style="margin-top: 8px; margin-left: 5px;">+54 9 11 3467-2124</h3>
      </div>
    </div>
  </main>
  <footer class="footer">
    <button class="btn-stage btn-stage-left" @click="back">
      <i class="fa-solid fa-circle-xmark text-red pe-2"></i>
      VOLVER A COMENZAR
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
    this.startTimer({ durationInSeconds: 25, callback });
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
