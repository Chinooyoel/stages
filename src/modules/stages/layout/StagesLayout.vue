<template>
  <router-view></router-view>
  <Spinner v-if="isLoading" />
  <ModalGeneral v-if="false"/>
</template>

<script>
import { mapState } from "vuex";
import Spinner from "../components/Spinner.vue";
import ModalGeneral from "../components/ModalGeneral.vue";
export default {
  components: {
    Spinner,
    ModalGeneral
  },
  computed: {
    ...mapState("stages", ["isLoading"]),
  },
};
</script>
<style>
.header,
.footer {
  height: 18vh;
  background: #558a2a;
}
.main {
  /* 100 - header - footer */
  height: calc(100vh - 18vh - 18vh);
}
.bg-blocked {
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgb(0, 0, 0, 0.8);
  z-index: 100;
}
</style>