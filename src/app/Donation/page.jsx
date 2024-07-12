import React from "react";
import Whatsapp from "../Components/Whatsapp";
import Footer from "../Components/Footer";
import NavMenu from "../Components/NavMenu";
import DonationForm from "../Components/DonationForm";
import ScrollToTop from "../Components/ScrollToTop";

function Donation() {
  return (
    <div>
      <NavMenu />
      <ScrollToTop />
      <Whatsapp />
      <DonationForm />
      <Footer />
    </div>
  );
}

export default Donation;
