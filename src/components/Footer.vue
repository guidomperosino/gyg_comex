<template>
  <footer class="footer py-4 px-5">
    <div class="container">
      <div class="row align-items-center mb-3">
        <div class="col-lg-4 my-5" id="logo_pie">
          <img class="footer-brand" :src="$t('footerItems.logo')" />
        </div>
        <div id="menu" class="col-lg-4 aside">
          <ul>
            <li v-for="(section, key) in $t('secciones')" :key="key">
              <a :href="section.link">{{ section.title }}</a>
            </li>
          </ul>
        </div>
        <div class="col-lg-4" id="datos">
          <div class="mt-4">
            <i class="fas fa-thumbtack"></i>

            <p class="mb-0">Ubicación</p>
            <a :href="$t('footerItems.adress.adressLink')" target="_blank">
              {{ $t("footerItems.adress.adress") }}
            </a>
          </div>
          <div class="mt-4">
            <i class="fas fa-phone-alt"></i>
            <p class="mb-0">Teléfono</p>
            <a :href="$t('footerItems.adress.phoneLink')" target="_blank">
              {{ $t("footerItems.adress.phone") }}
            </a>
          </div>
          <div class="mt-4">
            <i class="far fa-envelope"></i>

            <p class="mb-0">Email</p>
            <a :href="$t('footerItems.adress.mailLink')" target="_blank">
              {{ $t("footerItems.adress.mail") }}
            </a>
          </div>
        </div>
      </div>
      <div class="row align-items-center pt-3">
        <div class="col-lg-4 text-lg-center">
          <a class="" href="#!">{{ $t("footerItems.pp") }}</a>
        </div>

        <div class="col-lg-4 text-lg-center">
          Copyright © {{ $t("footerItems.copyright") }}
        </div>
        <div class="col-lg-4 my-3 my-lg-0"></div>
      </div>
    </div>
  </footer>
</template>

<script></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer-brand {
  height: 4.5rem;
  max-width: 100%;
}
footer #menu {
  padding: 0 4em;
}

footer #menu ul {
  text-transform: uppercase;
  list-style: none;
  padding: 0;
}

footer #menu li {
  padding: 6px 0;
}

footer #menu li a {
  text-decoration: none;
  color: red;
  font-weight: bold;
}
</style>
