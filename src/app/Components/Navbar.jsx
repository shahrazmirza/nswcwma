"use client";
import React, { useEffect, useState } from "react";
import Togglemenu from "./Togglemenu";
import NavMenu from "./NavMenu";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return <div>{isMobile ? <Togglemenu /> : <NavMenu />}</div>;
};

export default Navbar;
