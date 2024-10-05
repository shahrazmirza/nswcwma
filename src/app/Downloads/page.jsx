import React from "react";
import Whatsapp from "../Components/Whatsapp";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import ScrollToTop from "../Components/ScrollToTop";
import ReportsAndPolicies from "../Components/ReportsAndPolicies";

function Downloads() {
  return (
    <div>
      <Navbar />
      <ScrollToTop />
      <Whatsapp />
      <ReportsAndPolicies />
      <Footer />
    </div>
  );
}

export default Downloads;
