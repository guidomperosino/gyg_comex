<template>
  <section class="page-section" id="soluciones">
    <div class="container">
      <div class="text-center">
        <h2 class="section-heading text-uppercase">
          {{ $t("solutionsTitle") }}
        </h2>
        <h3 class="section-subheading text-muted mx-5">
          {{ $t("solutionsBajada") }}
        </h3>
      </div>
      <div class="row text-center">
        <div
          class="col-md-3 pb-5 solutionContainer"
          v-for="(solution, key) in $t('solutionsItems')"
          :key="key"
        >
          <span class="fa-stack fa-4x">
            <i class="fas fa-circle fa-stack-2x text-primary"></i>
            <i class="fas fa-stack-1x fa-inverse" :class="solution.icon"></i>
          </span>
          <h4 class="my-3">{{ solution.title }}</h4>
          <p class="text-muted">{{ solution.body }}</p>
          <a
            class="btn btn-primary btn-xl text-uppercase js-scroll-trigger solutions-button"
            :href="solution.buttonLink"
            >{{ $t("contactoSolution.button") }}</a
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script></script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.solutionContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.solutionContainer a {
  margin-top: auto;
}
.solutions-button {
  padding: 1.25rem 1.25rem;
  font-size: 1rem;
}
</style>
