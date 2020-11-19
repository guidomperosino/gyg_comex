<template>
  <!-- Navigation-->
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
    <div class="container">
      <a class="navbar-brand js-scroll-trigger" href="#page-top"
        ><img :src='navbarCustom.imgSrc' :alt='navbarCustom.imgAlt'
      />{{ navbarCustom.title }}</a>
      <button
        class="navbar-toggler navbar-toggler-right"
        type="button"
        data-toggle="collapse"
        data-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        Menu
        <i class="fas fa-bars ml-1"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav text-uppercase ml-auto">
          <li class="nav-item" v-for="(section, key) in navbarJSON" :key="key">
            <a class="nav-link js-scroll-trigger" :href="section.link">{{ section.title }}</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data: () => ({
    navbarJSON: [
      {
        title: "section1",
        link: "#section1",
      },
      {
        title: "section2",
        link: "#section2",
      },
      {
        title: "section3",
        link: "#section3",
      },
      {
        title: "section4",
        link: "#section4",
      },
    ],
    navbarCustom: {
      imgSrc: 'assets/img/logo.png',
      imgAlt: 'logo',
      title:"GT Comex"
    },
  }),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
