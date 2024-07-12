import React from "react";
import Scroll_to_top from "../Components/Scroll_to_top";
import Whatsapp from "../Components/Whatsapp";
import Footer from "../Components/Footer";
import NavMenu from "../Components/NavMenu";
import DonationForm from "../Components/DonationForm";

function Donation() {
  return (
    <div>
      <NavMenu />
      <Scroll_to_top />
      <Whatsapp />
      <DonationForm />
      <Footer />
    </div>
  );
}

export default Donation;
