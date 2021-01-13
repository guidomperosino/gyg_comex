<template>
  <a class="whats-app" :href="$t('whatsapp.link')" target="_blank">
    <i class="fab fa-whatsapp my-float"></i>
  </a>
</template>

<script>
export default {
  data: () => ({
    SolutionsJSON: [{}],
  }),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* Whatsapp Button Style*/
.whats-app {
  position: fixed;
  width: 50px;
  height: 50px;
  bottom: 40px;
  background-color: #25d366;
  color: #fff;
  border-radius: 50px;
  text-align: center;
  font-size: 30px;
  box-shadow: 3px 4px 3px #999;
  right: 15px;
  z-index: 100;
}

.my-float {
  margin-top: 10px;
}
</style>
