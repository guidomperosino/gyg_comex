<template>
  <div class="cookie-container">
    <p>
      Utilizamos cookies propias y de terceros para obtener datos estadísticos
      de la navegación de nuestros usuarios y mejorar nuestros servicios. Si
      acepta o continúa navegando, consideramos que acepta su uso. Puede cambiar
      la configuración u obtener más información
      <a data-toggle="modal" href="#CookiesModal">aquí</a>.
    </p>

    <button class="cookie-btn">
      Ok
    </button>
  </div>
</template>

<script></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cookie-container {
  position: fixed;
  bottom: -100%;
  left: 0;
  right: 0;
  background: #2f3640;
  color: #f5f6fa;
  padding: 5px 2em 0px 2em;
  box-shadow: 0 -2px 16px rgba(47, 54, 64, 0.39);
  text-align: center;
  transition: 400ms;
}

.cookie-container.active {
  bottom: 0;
}

.cookie-container a {
  color: #f5f6fa;
}

.cookie-btn {
  background: #e84118;
  border: 0;
  color: #f5f6fa;
  padding: 12px 48px;
  font-size: 18px;
  margin-bottom: 16px;
  border-radius: 8px;
  cursor: pointer;
}
</style>
