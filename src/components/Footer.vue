<template>
  <footer class="footer py-4">
    <div class="container">
      <div class="row align-items-center mb-3">
        <div class="col-lg-4" id="logo_pie">
          <img src="img/LOGO_NEGRO.png" />
        </div>
        <div id="menu" class="col-lg-4 aside">
          <ul>
            <li><a href="index.html">Inicio</a></li>
            <li><a href="nosotros.html">Nosotros</a></li>
            <li><a href="servicios.html">Servicios</a></li>
            <li><a href="clientes.html">Clientes</a></li>
            <li><a href="contacto.html">Contacto</a></li>
          </ul>
        </div>
        <div class="col-lg-4" id="datos">
          <div>
            <i class="fas fa-thumbtack"></i>
            <div>
              <p>Ubicación</p>
              <p>Moreno 584, CABA</p>
            </div>
          </div>
          <div>
            <i class="fas fa-phone-alt"></i>
            <div>
              <p>Teléfono</p>
              <p>11-6543-9877</p>
            </div>
          </div>
          <div>
            <i class="far fa-envelope"></i>
            <div>
              <p>Email</p>
              <p>info@gyginternacional.com</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row align-items-center">
        <div class="col-lg-4 text-lg-left">Copyright © Your Website 2020</div>
        <div class="col-lg-4 my-3 my-lg-0">
          <a class="btn btn-dark btn-social mx-2" href="#!"
            ><i class="fab fa-twitter"></i
          ></a>
          <a class="btn btn-dark btn-social mx-2" href="#!"
            ><i class="fab fa-facebook-f"></i
          ></a>
          <a class="btn btn-dark btn-social mx-2" href="#!"
            ><i class="fab fa-linkedin-in"></i
          ></a>
        </div>
        <div class="col-lg-4 text-lg-right">
          <a class="mr-3" href="#!">Privacy Policy</a>
          <a href="#!">Terms of Use</a>
        </div>
      </div>
    </div>
  </footer>
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
