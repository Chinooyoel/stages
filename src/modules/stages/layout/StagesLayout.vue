<template>
  <router-view></router-view>
  <Spinner v-if="isLoading" />
  <ModalGeneral v-if="false" />
</template>

<script>
import { mapState } from "vuex";
import Spinner from "../components/Spinner.vue";
import ModalGeneral from "../components/ModalGeneral.vue";
export default {
  components: {
    Spinner,
    ModalGeneral,
  },
  computed: {
    ...mapState("stages", ["isLoading"]),
  },
};
</script>
<style>
@font-face {
  src: url(@/assets/Montserrat-ExtraBold.ttf);
  font-family: font-lakaut-titulares;
}
.font-lakaut-titulares{
  font-family: font-lakaut-titulares;
  font-weight: 800;
}
body{
  font-family: "sans-serif";
}
h1{
  font-size: 47px
}
.header,
.footer {
  height: 17vh;
  background: #9040fc;
  background: linear-gradient(90deg, #9040fc 0%, #180096 100%);
  box-shadow: 1px 1px 15px black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
}
.main {
  /* 100 - header - footer */
  height: calc(100vh - 17vh - 17vh);
  color: #2A3AD0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
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
.btn-stage {
  font-size: 1.5rem;
  font-family: font-lakaut-titulares;
  font-weight: 800;
  width: 28%;
  height: 60%;
  color: #2A3AD0;
  border: none;
}
.btn-stage-left {
  border-radius: 0px 10px 10px 0px
}
.btn-stage-right {
  border-radius: 10px 0px 0px 10px
}
.logo {
  height: 100%;
  padding: 1px;
}
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
.text-success {
  color: #5cb85c;
}
</style>