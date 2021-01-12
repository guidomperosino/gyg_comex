import Vue from "vue";
import VueI18n from "vue-i18n";
Vue.use(VueI18n);

const messages = {
  es: {
    marca: "",
    logoNavBar: "assets/img/logo.png",
    secciones: [
      {
        title: "Soluciones",
        link: "#soluciones",
      },
      {
        title: "Servicios",
        link: "#servicios",
      },
      {
        title: "Asesoramiento",
        link: "#asesoramiento",
      },
      {
        title: "Contacto",
        link: "#contact",
      },
    ],
    heroH2: "Hero H2",
    heroH1: "Hero H1",
    contactoHero: {
      button: "Contacto",
      link: "#contact",
    },
    solutionsTitle: "¿Qué hacemos?",
    solutionsBajada:
      "Brindamos asesoramiento integral brindando a nuestros clientes las herramientas necesarias para realizar su trámite de importación o exportación, enfocados en optimizar tiempos y reducir costos.",
    solutionsItems: [
      {
        icon: "fa-calculator",
        title: "Optimizamos costos",
        body:
          "Asesoramos a nuestros clientes para poder obtener un trámite eficiente y competitivo buscando la mejor operatoria en trámites de comercio exterior.",
      },
      {
        icon: "fa-business-time",
        title: "Reducimos tiempos",
        body:
          "Buscamos agilidad en toda la gestión del trámite y gracias al constante seguimiento logramos acortar los tiempos y brindar respuestas inmediatas.",
      },
      {
        icon: "fa-users-cog",
        title: "Asesoramiento integral",
        body:
          "Ofrecemos un servicio personalizado y basado en la necesidad de cada cliente, enfocados en estar en cada paso desde el inicio hasta la finalización del trámite.",
      },
    ],
    contactoSolution: {
      button: "Contacto",
      link: "#contact",
    },
    portfolioTitle: "Portfolio",
    portfolioBajada: "Portfolio Bajada",
    portfolioItems: [
      {
        icon: "fa-shopping-cart",
        title: "Trámite 1",
        body:
          "Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
        imgSrc: "assets/img/como.jpg",
        imgAlt: "Imagen Prueba",
        modalLink: "#portfolioModal1",
      },
    ],
    contactoPortfolio: {
      button: "Contacto",
      link: "#contact",
    },
    servicesTitle: "Servicios",
    servicesBajada: "Servicios Bajada",
    servicesItems: [
      {
        id: "servicio1",
        idLink: "#servicio1",
        title: "Servicios de despachante de aduanas",
        bodyList: [
          "Licencia SIMI y validación.",
          "Trámite de presentación de licencia no automática.",
          "Despacho de importación OM1993.",
          "Tramitación y gestión de la documentación ante aduana.",
          "Transporte de mercadería / Logística de aduana a depósito del importador.",
        ],
        imgSrc: "assets/img/HeroNosotros.jpg",
        imgAlt: "Imagen Prueba",
        link: "#contact",
        buttonText: "Consultar",
      },
      {
        id: "servicio2",
        idLink: "#servicio2",
        title: "Asesoramiento integral en comercio exterior",
        bodyList: [
          "Clasificación de mercadería.",
          "Alta de importador o exportador ante AFIP.",
          "Logística internacional.",
          "Resoluciones aduaneras y de comercio exterior.",
          "Resolución de importaciones o exportaciones en conflicto.",
        ],
        imgSrc: "assets/img/HeroNosotros.jpg",
        imgAlt: "Imagen Prueba",
        link: "#contact",
        buttonText: "Consultar",
      },
    ],
  },
  en: {},
};

const i18n = new VueI18n({
  locale: "es", // set locale
  fallbackLocale: "en", // set fallback locale
  messages, // set locale messages
});

export default i18n;
