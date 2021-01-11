<template>
  <section class="page-section" id="soluciones">
    <div class="container">
      <div class="text-center">
        <h2 class="section-heading text-uppercase">
          {{ $t("solutionsTitle") }}
        </h2>
        <h3 class="section-subheading text-muted">
          {{ $t("solutionsBajada") }}
        </h3>
      </div>
      <div class="row text-center">
        <div
          class="col-md-4 pb-5"
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
            class="btn btn-primary btn-xl text-uppercase js-scroll-trigger"
            :href="$t('contactoSolution.link')"
            >{{ $t("contactoSolution.button") }}</a
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    SolutionsJSON: [{}],
  }),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
