import React from "react";
import Scroll_to_top from "../Components/Scroll_to_top";
import Whatsapp from "../Components/Whatsapp";
import Footer from "../Components/Footer";
import NavMenu from "../Components/NavMenu";
import ContactForm from "../Components/Contact_Form";

function Contacts() {
  return (
    <div>
      <NavMenu />
      <Scroll_to_top />
      <Whatsapp />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default Contacts;
