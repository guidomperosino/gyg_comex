<template>
  <!-- Portfolio Grid-->
  <section class="page-section bg-light" id="portfolio">
    <div class="container" id="asesoramiento">
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
          class="col-lg-3 col-sm-6 mb-4 portfolio-item"
          v-for="(portfolio, key) in $t('portfolioItems')"
          :key="key"
        >
          <div class="portfolio-caption">
            <div class="portfolio-caption-heading">{{ portfolio.title }}</div>
          </div>
          <div class="portfolio-image">
            <img
              class="img-fluid"
              :src="portfolio.imgSrc"
              :alt="portfolio.imgAlt"
            />
            <div class="portfolio-hover p-1">
              <div class="portfolio-hover-content text-muted text-center">
                {{ portfolio.body }}
              </div>
            </div>
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
<style scoped>
.portfolio-item {
  display: flex;
  flex-direction: column;
}

.portfolio-image {
  margin-top: auto;
}

.portfolio-image img {
  display: block;
  width: 100%;
  height: auto;
}

.portfolio-hover {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.5s ease;
  background-color: rgba(228, 197, 187, 1);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.portfolio-image:hover .portfolio-hover {
  opacity: 1;
}

.portfolio-hover-content {
  color: white;
  font-size: 1.25rem;
}
</style>
