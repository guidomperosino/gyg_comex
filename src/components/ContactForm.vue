<template>
  <section class="page-section" id="contact">
    <div class="container">
      <div class="text-center">
        <h2 class="section-heading text-uppercase">
          {{ $t("contactFormItems.contactTitle") }}
        </h2>
        <h3 class="section-subheading text-muted">
          {{ $t("contactFormItems.contactBajada") }}
        </h3>
      </div>
      <form id="contactForm" name="sentMessage" novalidate="novalidate">
        <div class="row align-items-stretch mb-5">
          <div class="col-md-6">
            <div class="form-group">
              <input
                class="form-control"
                id="name"
                type="text"
                placeholder="Nombre *"
                required="required"
                data-validation-required-message="Por favor, ingrese su nombre."
              />
              <p class="help-block text-danger"></p>
            </div>
            <div class="form-group">
              <input
                class="form-control"
                id="email"
                type="email"
                placeholder="Email *"
                required="required"
                data-validation-required-message="Por favor, ingrese su email."
              />
              <p class="help-block text-danger"></p>
            </div>
            <div class="form-group mb-md-0">
              <input
                class="form-control"
                id="phone"
                type="tel"
                placeholder="Teléfono *"
                required="required"
                data-validation-required-message="Por favor, ingrese su teléfono."
              />
              <p class="help-block text-danger"></p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group form-group-textarea mb-md-0">
              <textarea
                class="form-control"
                id="message"
                placeholder="Su Mensaje *"
                required="required"
                data-validation-required-message="Por favor, ingrese su mensaje."
              ></textarea>
              <p class="help-block text-danger"></p>
            </div>
          </div>
        </div>
        <div class="text-center">
          <div id="success"></div>
          <button
            class="btn btn-primary btn-xl text-uppercase"
            id="sendMessageButton"
            type="submit"
          >
            {{ $t("contactFormItems.contactButton") }}
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
