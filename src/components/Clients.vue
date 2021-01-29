<template>
  <div class="py-5" id="clients">
    <div class="container">
      <div class="row justify-content-center align-items-center">
        <div
          class="col-md-3 col-sm-6 my-3"
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
