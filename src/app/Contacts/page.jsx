import React from "react";
import Whatsapp from "../Components/Whatsapp";
import Footer from "../Components/Footer";
import NavMenu from "../Components/NavMenu";
import ContactForm from "../Components/ContactForm";
import ScrollToTop from "../Components/ScrollToTop";

function Contacts() {
  return (
    <div>
      <NavMenu />
      <ScrollToTop />
      <Whatsapp />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default Contacts;
