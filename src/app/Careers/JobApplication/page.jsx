import React from "react";
import Whatsapp from "../../Components/Whatsapp";
import JobApplicationForm from "../../Components/JobApplicationForm";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import ScrollToTop from "../../Components/ScrollToTop";

function JobApplication() {
  return (
    <div>
      <Navbar />
      <ScrollToTop />
      <Whatsapp />
      <JobApplicationForm />
      <Footer />
    </div>
  );
}

export default JobApplication;
