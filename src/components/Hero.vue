<template>
  <header class="masthead">
    <div class="container">
      <div class="masthead-subheading">{{ $t("welcomeMsg") }}</div>
      <div class="masthead-heading text-uppercase">It's Nice To Meet You</div>
      <a
        class="btn btn-primary btn-xl text-uppercase js-scroll-trigger"
        href="#services"
        >Tell Me More</a
      >
    </div>
  </header>
</template>

<script>
export default {
  data: () => ({
    navbarJSON: [{}],
  }),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
