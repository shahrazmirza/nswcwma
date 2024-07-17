import React from "react";
import Whatsapp from "../Components/Whatsapp";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import ApplicationForm from "../Components/ApplicationForm";
import ScrollToTop from "../Components/ScrollToTop";

function Application() {
  return (
    <div>
      <Navbar />
      <ScrollToTop />
      <Whatsapp />
      <ApplicationForm />
      <Footer />
    </div>
  );
}

export default Application;
