<template>
  <!-- Portfolio Grid-->
  <section class="page-section" id="portfolio">
    <div class="container">
      <div class="text-center">
        <h2 class="section-heading text-uppercase">
          {{ $t("portfolioTitle") }}
        </h2>
        <h3 class="section-subheading text-muted">
          {{ $t("portfolioBajada") }}
        </h3>
      </div>
      <div class="row justify-content-center">
        <div
          class="col-lg-4 col-sm-6 mb-4"
          v-for="(portfolio, key) in $t('portfolioItems')"
          :key="key"
        >
          <div class="portfolio-item">
            <div class="portfolio-caption">
              <div class="portfolio-caption-heading">{{ portfolio.title }}</div>
            </div>
            <a
              class="portfolio-link"
              data-toggle="modal"
              :href="portfolio.modalLink"
            >
              <div class="portfolio-hover">
                <div class="portfolio-hover-content p-1">
                  <div class="portfolio-caption-subheading text-muted">
                    {{ portfolio.body }}
                  </div>
                </div>
              </div>
              <img
                class="img-fluid"
                :src="portfolio.imgSrc"
                :alt="portfolio.imgAlt"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    PortfolioJSON: [{}],
  }),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
