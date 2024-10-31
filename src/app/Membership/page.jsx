import React from "react";
import Whatsapp from "../Components/Whatsapp";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import MembershipForm from "../Components/MembershipForm";
import ScrollToTop from "../Components/ScrollToTop";

function Membership() {
  return (
    <div>
      <Navbar />
      <ScrollToTop />
      <Whatsapp />
      <MembershipForm />
      <Footer />
    </div>
  );
}

export default Membership;
