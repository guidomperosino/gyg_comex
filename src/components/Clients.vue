<template>
  <div class="page-section py-5" id="clients">
    <div class="container">
      <div class="text-center">
        <h2 class="section-heading text-uppercase">
          {{ $t("clientsTitle") }}
        </h2>
        <h3 class="section-subheading text-muted">
          {{ $t("clientsBajada") }}
        </h3>
      </div>
      <div class="row justify-content-center align-items-center">
        <div
          class="col-lg-2 col-md-3 col-sm-4 col-6 my-3"
          v-for="(client, key) in $t('clients')"
          :key="key"
        >
          <a :href="client.link" target="_blank"
            ><img
              class="img-fluid d-block mx-auto"
              :src="client.logo"
              :alt="client.caption"
          /></a>
        </div>
      </div>
    </div>
  </div>
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
