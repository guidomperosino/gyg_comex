<template>
  <div id="app">
    <NavBar></NavBar>
    <Hero></Hero>
    <Solutions></Solutions>
    <Services></Services>
    <Clients></Clients>
    <Portfolio></Portfolio>
    <ContactForm></ContactForm>
    <Footer></Footer>
    <WhatsappButton></WhatsappButton>
    <CookieConsent></CookieConsent>
    <Modal></Modal>
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
import CookieConsent from "./components/CookieConcent";
import Modal from "./components/Modal";

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
    CookieConsent,
    Modal,
  },
};
</script>

<style></style>
