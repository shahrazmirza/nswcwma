import React from "react";
import Whatsapp from "../Components/Whatsapp";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import ContactForm from "../Components/ContactForm";
import ScrollToTop from "../Components/ScrollToTop";

function Contacts() {
  return (
    <div>
      <Navbar />
      <ScrollToTop />
      <Whatsapp />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default Contacts;
