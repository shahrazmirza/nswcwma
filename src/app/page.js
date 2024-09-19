import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Whatsapp from "./Components/Whatsapp";
import Footer from "./Components/Footer";
import About from "./Components/About";
import ServicesBanner from "./Components/ServicesBanner";
import Team from "./Components/Team";
import ScrollToTop from "./Components/ScrollToTop";
import PrayerTime from "./Components/PrayerTime";

export default function Home() {
  return (
    <div>
      <Navbar />
      <ScrollToTop />
      <Whatsapp />
      <Hero />
      <About />
      <ServicesBanner />
      <Team />
      <Footer />
    </div>
  );
}
