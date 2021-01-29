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
        title: "Clientes",
        link: "#clients",
      },
      {
        title: "Contacto",
        link: "#contact",
      },
    ],
    heroH1: "Servicio integral de comercio exterior",
    heroH2:
      "Con el objetivo de optimizar los procesos de importación y exportación de todos nuestros clientes.",
    contactoHero: {
      button: "Consultanos",
      link: "#contact",
    },
    solutionsTitle: "¿Qué hacemos?",
    solutionsBajada:
      "Brindamos asesoramiento integral de comercio exterior y gestionamos las operaciones aduaneras de importación y exportación. Enfocados en las necesidades particulares de cada cliente, con el fin de optimizar tiempos y reducir costos.",
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
          "Ofrecemos un servicio personalizado, asesorando a nuestros clientes, enfocados en estar en cada paso desde el inicio hasta la finalización del trámite.",
      },
    ],
    contactoSolution: {
      button: "Contacto",
      link: "#contact",
    },
    portfolioTitle: "Asesoramiento",
    portfolioBajada: "Asesoramiento Bajada",
    portfolioItems: [
      {
        title: "Consultoría en comercio exterior",
        body:
          "Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
        imgSrc: "assets/img/Asesoramiento1.jpeg",
        imgAlt: "Asesoramiento imagen",
      },
      {
        title: "Gestión aduanera",
        body:
          "Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
        imgSrc: "assets/img/Asesoramiento2.jpeg",
        imgAlt: "Asesoramiento imagen",
      },
      {
        title: "Licencias no automáticas de importación (LNA)",
        body:
          "Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
        imgSrc: "assets/img/Asesoramiento3.jpg",
        imgAlt: "Asesoramiento imagen",
      },
    ],
    contactoPortfolio: {
      button: "Contacto",
      link: "#contact",
    },
    servicesTitle: "Servicios",
    servicesBajada:
      "Con un equipo multidisciplinario ofrecemos servicios integrales destinados a pequeñas y medianas empresas que buscan agilizar y mejorar sus procesos de comercio exterior para exportación e importación. ",
    servicesItems: [
      {
        id: "servicio1",
        idLink: "#servicio1",
        title: "Servicios Despachante de Aduana",
        bodyList: [
          "Tramitación del Formulario SIMI.",
          "Solicitud de LNA (Licencia No Automatica de Importación).",
          "Clasificación de Mercaderias.",
          "Importación y Exportación (Oficialización de los permisos).",
          "Gestión de la documentación ante Aduana.",
          "Logística del transporte de la Mercaderia desde Aduana hasta la Puerta del cliente.",
          "DJCP (Productos Textiles)",
        ],
        imgSrc: "assets/img/Servicios1.jpg",
        imgAlt: "Imagen",
        link: "#contact",
        buttonText: "Consultar",
      },
      {
        id: "servicio2",
        idLink: "#servicio2",
        title: "Servicios Asesoramiento Integral de Comercio Exterior",
        bodyList: [
          "Alta de Importador / Exportador ante AFIP.",
          "Consulta de Estados de cada Operación en Página AFIP. ",
          "Logística Internacional.",
          "Interpretación de las Normas y Resoluciones Aduaneras y de Comercio Exterior.",
          "Analisis de Costos.",
        ],
        imgSrc: "assets/img/Servicios2.jpg",
        imgAlt: "Imagen",
        link: "#contact",
        buttonText: "Consultar",
      },
    ],
    clients: [
      {
        logo: "assets/img/logo-patagonia.png",
        caption: "Patagonia CNC",
        link: "https://patagoniacnc.com/",
      },
      {
        logo: "assets/img/logo-intek.png",
        caption: "Intek SA",
        link: "http://www.intektoys.com/ar/",
      },
      {
        logo: "assets/img/logo-martorelli.png",
        caption: "Martorelli SA",
        link: "https://www.martorelli.com.ar/",
      },
    ],
    whatsapp: {
      link:
        "https://wa.me/5491161161060/?text=Hola%2C%20estoy%20interesado%20en%20consultar%20sobre%20los%20servicios%20ofrecidos☺%EF%B8%8F",
    },
    contactFormItems: {
      contactTitle: "Contacto",
      contactBajada: " Dejanos tu consulta y nos comunicaremos",
      contactButton: "Enviar",
    },
    footerItems: {
      adress: {
        phone: "11-6543-9877",
        phoneLink:
          "https://wa.me/5491161161060/?text=Hola%2C%20estoy%20interesado%20en%20consultar%20sobre%20los%20servicios%20ofrecidos☺%EF%B8%8F",
        adress: "Moreno 584, CABA",
        adressLink: "https://goo.gl/maps/VpTEWtXHULw8Yoxy9",
        mail: "info@gyginternacional.com",
        mailLink: "mailto:info@gyginternacional.com",
      },
      logo: "assets/img/_logo.png",
      copyright: "GYG INTERNACIONAL 2021",
      pp: "Politicas de Privacidad",
    },
  },
  en: {},
};

const i18n = new VueI18n({
  locale: "es", // set locale
  fallbackLocale: "es", // set fallback locale
  messages, // set locale messages
});

export default i18n;
