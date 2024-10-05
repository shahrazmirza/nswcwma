import React from "react";
import Whatsapp from "../Components/Whatsapp";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import ScrollToTop from "../Components/ScrollToTop";
import AnnualReport from "../Components/AnnualReport";
import Policies from "../Components/Policies";

function Downloads() {
  return (
    <div>
      <Navbar />
      <ScrollToTop />
      <Whatsapp />
      <AnnualReport />
      <Policies />
      <Footer />
    </div>
  );
}

export default Downloads;
