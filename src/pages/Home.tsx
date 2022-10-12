import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LanguageToggle from "../components/LanguageToggle";
import { BoxColumnCenter } from "../styles/General";

export default function Home() {
  return (
    <div className="super-container">
      <Header />
      <BoxColumnCenter mt={2}>
        <LanguageToggle />
      </BoxColumnCenter>
      <BoxColumnCenter mt={3} style={{ zoom: 0.8 }}>
        <Footer />
      </BoxColumnCenter>
    </div>
  );
}
