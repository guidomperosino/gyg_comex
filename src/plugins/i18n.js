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
    heroH2: "Despachante de Aduana, Asesoramiento, Logística.",
    contactoHero: {
      button: "Consultanos",
      link: "#contact",
    },
    solutionsTitle: "¿Qué hacemos?",
    solutionsBajada:
      "Brindamos asesoramiento integral de comercio exterior y gestionamos las operaciones aduaneras de importación y exportación. Enfocados en las necesidades particulares de cada cliente, con el fin de optimizar tiempos y reducir costos.",
    solutionsItems: [
      {
        icon: "fa-box-open",
        title: "Trading",
        body:
          "Somos una empresa con más de 20 años de experiencia en comex. Contamos con oficinas en China, lo que nos permite ofrecer a nuestros clientes el desarrollo de nuevos productos en el exterior.",
        buttonLink: "#portfolio",
      },
      {
        icon: "fa-business-time",
        title: "Despachante de aduana",
        body:
          "Como agente auxiliar del comercio y del servicio aduanero, nos encargamos de clasificar su mercadería e interpretar las distintas normas para gestionar sus operaciones de la mejor manera.",
        buttonLink: "#servicios",
      },
      {
        icon: "fa-users-cog",
        title: "Asesoramiento integral",
        body:
          "Ofrecemos un servicio personalizado, asesorando a nuestros clientes, enfocados en estar en cada paso desde el inicio hasta la finalización del trámite.",
        buttonLink: "#servicios",
      },
      {
        icon: "fa-truck",
        title: "Logística",
        body:
          "Brindamos servicios integrales de Transporte, Almacenamiento y Movimiento de Cargas para la ejecución de toda la Cadena Logística.",
        buttonLink: "#portfolio",
      },
    ],
    contactoSolution: {
      button: "Más Información",
    },
    portfolioTitle: "Asesoramiento",
    portfolioBajada:
      "En nuestro estudio aduanero vas a poder encontrar lo que necesitas para que tu gestión de comercio exterior suceda en tiempo y forma, al menor costo posible y con atención plena en todo el proceso.",
    portfolioItems: [
      {
        title: "Consultoría en comercio exterior",
        body:
          "Buscamos agilidad en toda la gestión del trámite y gracias al constante seguimiento logramos acortar los tiempos y brindar respuestas inmediatas. Nos destacamos por ofrecer asesoramiento personalizado y manejar tiempos cortos de gestión.",
        imgSrc: "assets/img/Asesoramiento1.jpg",
        imgAlt: "Asesoramiento imagen",
      },
      {
        title: "Gestión aduanera",
        body:
          "Ponemos a disposición, en base a nuestros 20 años de experiencia en el rubro, todas las herramientas necesarias para optimizar su trámite de importación y exportación buscando el menor costo posible.",
        imgSrc: "assets/img/Asesoramiento2.jpg",
        imgAlt: "Asesoramiento imagen",
      },
      {
        title: "Legales",
        body:
          "Asesoramos a nuestros clientes sobre Derecho Aduanero y Regimenes Especiales.",
        imgSrc: "assets/img/Asesoramiento3.jpg",
        imgAlt: "Asesoramiento imagen",
      },
      {
        title: "Análisis de resoluciones COMEX",
        body:
          "Mantenemos a nuestros clientes actualizados frente a las distintas Normas y Regulaciones publicadas día a día.",
        imgSrc: "assets/img/Asesoramiento4.jpg",
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
        id1: "servicio1",
        id2: "servicio1top",
        idLink: "#servicio1",
        title: "Trading",
        bodyList: [
          "Identificación de proveedores en diferentes países.",
          "Negociación de las condiciones de venta de los productos.",
          "Selección de productos con precios competitivos.",
          "Gestión logística, aduanera y documental.",
          "Importación.",
          "Entrega del producto a la puerta del cliente.",
        ],
        imgSrc: "assets/img/Servicios1.jpg",
        imgAlt: "Imagen",
        link: "#contact",
        buttonText: "Consultar",
      },
      {
        id1: "servicio2",
        id2: "servicio2top",
        idLink: "#servicio2",
        title: "Despachante de Aduana",
        bodyList: [
          "Tramitación del Formulario SIMI.",
          "Solicitud de LNA (Licencia No Automatica de Importación).",
          "Clasificación de Mercaderias.",
          "Importación y Exportación (Oficialización de los permisos).",
          "Gestión de la documentación ante Aduana.",
          "Logística del transporte de la Mercaderia desde Aduana hasta la Puerta del cliente.",
          "Tramites ante Organismos Públicos y Privados (DJCP, INAL, SENASA, etc).",
        ],
        imgSrc: "assets/img/Servicios2.jpg",
        imgAlt: "Imagen",
        link: "#contact",
        buttonText: "Consultar",
      },
      {
        id1: "servicio3",
        id2: "servicio3top",
        idLink: "#servicio3",
        title: "Asesoramiento Integral de Comercio Exterior",
        bodyList: [
          "Alta de Importador / Exportador ante AFIP.",
          "Consulta de Estados de cada Operación en Página AFIP. ",
          "Logística Internacional.",
          "Interpretación de las Normas y Resoluciones Aduaneras y de Comercio Exterior.",
          "Analisis de Costos.",
        ],
        imgSrc: "assets/img/Servicios3.jpg",
        imgAlt: "Imagen",
        link: "#contact",
        buttonText: "Consultar",
      },
    ],
    clientsTitle: "Confian en Nosotros.",
    clientsBajada:
      "A la hora de decidir realizar una importación o una exportación, es indispensable la intervención de un despachante de aduanas, que sea capaz de entender las necesidades del cliente, clasificar la mercadería de una forma correcta, e interpretar las normas aduaneras, para así poder lograr una eficiente operación. Esto combinado con experiencia en trámites ante DGA (aduana) y DGI, conocimiento de logística internacional y portuaria, harán que nuestros clientes puedan reducir costos y tiempos, para poder lograr un mejor posicionamiento dentro del mercado.",
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
      {
        logo: "assets/img/logo-siberian.png",
        caption: "Siberian",
        link: "https://siberian-seguridad-electronica.negocio.site/",
      },
      {
        logo: "assets/img/logo-texmakro-chico.png",
        caption: "TexMakro",
        link: "",
      },
      {
        logo: "assets/img/logo-haupt.png",
        caption: "Haupt",
        link: "https://hauptbicycles.com/",
      },
      {
        logo: "assets/img/logo-glamtex.png",
        caption: "GlamTex",
        link: "https://www.glamtex.com/",
      },
      {
        logo: "assets/img/logo-tejar.png",
        caption: "Tejar Make Up",
        link: "http://ferpamar.com.ar/tejar-make-up/",
      },
      {
        logo: "assets/img/logo-btec.png",
        caption: "Btec",
        link: "http://btec.com.ar/",
      },
      {
        logo: "assets/img/logo-puntoextremo.png",
        caption: "Punto Extremo",
        link: "https://puntoextremo.com.ar/main/",
      },
      {
        logo: "assets/img/logo-gp23.png",
        caption: "GP23",
        link: "",
      },
      {
        logo: "assets/img/logo-kista.png",
        caption: "Kista",
        link: "",
      },
    ],
    whatsapp: {
      link:
        "https://wa.me/5491132164426/?text=Hola%2C%20estoy%20interesado%20en%20consultar%20sobre%20los%20servicios%20ofrecidos☺%EF%B8%8F",
    },
    contactFormItems: {
      contactTitle: "Contacto",
      contactBajada: " Dejanos tu consulta y nos comunicaremos",
      contactButton: "Enviar",
    },
    footerItems: {
      adress: {
        phone: "+54-11-4331-1305",
        phoneLink:
          "https://wa.me/5491132164426/?text=Hola%2C%20estoy%20interesado%20en%20consultar%20sobre%20los%20servicios%20ofrecidos☺%EF%B8%8F",
        adress: "Moreno 584 4°B, CABA",
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
