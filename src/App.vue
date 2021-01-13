<template>
  <div id="app">
    <NavBar></NavBar>
    <Hero></Hero>
    <Solutions></Solutions>
    <Services></Services>
    <Portfolio></Portfolio>
    <Clients></Clients>
    <ContactForm></ContactForm>
    <Footer></Footer>
    <WhatsappButton></WhatsappButton>
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Solutions from "./components/Solutions";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Clients from "./components/Clients";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import WhatsappButton from "./components/WhatsappButton";


//import i18n from '@/plugins/i18n';

export default {
  name: "App",
  components: {
    NavBar,
    Hero,
    Solutions,
    Portfolio,
    Services,
    Clients,
    ContactForm,
    Footer,
    WhatsappButton,
  },
};
</script>

<style></style>
