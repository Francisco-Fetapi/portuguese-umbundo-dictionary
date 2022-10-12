import React from "react";
import { useSelector } from "react-redux";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LanguageToggle from "../components/LanguageToggle";
import { selectTextToTranslate } from "../store/App.selectors";
import { BoxColumnCenter } from "../styles/General";

export default function Home() {
  const textToTranslate = useSelector(selectTextToTranslate);
  const hasText = textToTranslate.length > 0;

  return (
    <div className="super-container">
      <Header />

      <BoxColumnCenter
        mt={0}
        className={hasText ? "animate animate-to-bottom" : "animate"}
      >
        <LanguageToggle />
      </BoxColumnCenter>

      <BoxColumnCenter
        mt={3}
        style={{ zoom: 0.8 }}
        className={hasText ? "animate animate-to-bottom" : "animate"}
      >
        <Footer />
      </BoxColumnCenter>
    </div>
  );
}
