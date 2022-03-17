<template>
  <div class="bg-blocked pt-2 d-flex justify-content-center align-items-center">
    <div class="bg-white modalGeneral rounded">
      <div class="bg-danger text-white text-center rounded-top">
        <i class="bi bi-wifi-off icon"></i>
      </div>
      <div class="text-center p-4">
        <p><strong>asdasdas</strong></p>
        <p>asdas</p>
        <p class="text-secondary">- Error  -</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    modal: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
p {
  font-size: 1.8rem;
  margin-bottom: 5px;
}
.modalGeneral {
  margin-top: -10%;
  width: 40%;

}
.icon {
  font-size: 17rem;
  line-height: 1;
}
</style>