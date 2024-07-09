import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Scroll_to_top from "./Components/Scroll_to_top";
import Whatsapp from "./Components/Whatsapp";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Team from "./Components/Team";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Scroll_to_top />
      <Whatsapp />
      <Hero />
      <About />
      <Team />
      <Footer />
    </div>
  );
}
