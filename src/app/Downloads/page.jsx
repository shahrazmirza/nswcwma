import React from "react";
import Whatsapp from "../Components/Whatsapp";
import Footer from "../Components/Footer";
import NavMenu from "../Components/NavMenu";
import ScrollToTop from "../Components/ScrollToTop";
import AnnualReport from "../Components/AnnualReport";

function Downloads() {
  return (
    <div>
      <NavMenu />
      <ScrollToTop />
      <Whatsapp />
      <AnnualReport />
      <Footer />
    </div>
  );
}

export default Downloads;
