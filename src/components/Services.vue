<template>
  
  <section class="page-section bg-light" id="servicios">
    <div class="container">
      <div class="text-center">
        <h2 class="section-heading text-uppercase">
          {{ $t("servicesTitle") }}
        </h2>
        <h3 class="section-subheading text-muted mx-5">
          {{ $t("servicesBajada") }}
        </h3>
      </div>
      <div
        class="row text-left justify-content-center align-items-center mb-5"
        v-for="(service, key) in $t('servicesItems')"
        :key="key"
      >
        <div class="col-md-6 order-2">
            <a
            class="portfolio-link"
            :href="service.idLink"
            >
              
              <img
              class="img-fluid"
              :src="service.imgSrc"
              :alt="service.imgAlt"
              />
            </a>
                   
        </div>
        <span :id="service.id"></span>
        <div class="col-md-6" :class="{'order-3': key % 2 === 0,'order-1': key % 2 !== 0}">
          <h4 class="my-3">{{service.title}}</h4>
          <p class="text-muted">
            <ul>
              <li v-for="(listItem,key) in service.bodyList" :key="key">{{listItem}}</li>
            </ul>
            </p>
          <div class="d-flex justify-content-center">
          <a
            class="btn btn-primary btn-xl text-uppercase js-scroll-trigger"
            :href="service.link"
            >{{service.buttonText}}</a
          >
        </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    ServicesJSON: [{}],
  }),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
