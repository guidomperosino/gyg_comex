<template>
  <header class="masthead">
    <div class="container">
      <h1 class="masthead-heading text-uppercase">{{ $t("heroH1") }}</h1>
      <h2 class="masthead-subheading">{{ $t("heroH2") }}</h2>

      <a
        class="btn btn-primary btn-xl text-uppercase js-scroll-trigger"
        :href="$t('contactoHero.link')"
        >{{ $t("contactoHero.button") }}</a
      >
    </div>
  </header>
</template>

<script></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
