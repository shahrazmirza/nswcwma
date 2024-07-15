import React from "react";
import Whatsapp from "../Components/Whatsapp";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import DonationForm from "../Components/DonationForm";
import ScrollToTop from "../Components/ScrollToTop";

function Donation() {
  return (
    <div>
      <Navbar />
      <ScrollToTop />
      <Whatsapp />
      <DonationForm />
      <Footer />
    </div>
  );
}

export default Donation;
