import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Whatsapp from "./Components/Whatsapp";
import Footer from "./Components/Footer";
import About from "./Components/About";
import ServicesStats from "./Components/ServicesStats";
import ServicesBanner from "./Components/ServicesBanner";
import Team from "./Components/Team";
import ScrollToTop from "./Components/ScrollToTop";
import Partners from "./Components/Partners";
import Funders from "./Components/Funders";

export default function Home() {
  return (
    <div>
      <Navbar />
      <ScrollToTop />
      <Whatsapp />
      <Hero />
      <About />
      <ServicesStats />
      <ServicesBanner />
      <Partners />
      <Team />
      <Funders />
      <Footer />
    </div>
  );
}
