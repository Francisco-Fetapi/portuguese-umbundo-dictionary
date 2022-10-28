import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LanguageToggle from "../components/LanguageToggle";
import ModalMenu from "../components/ModalMenu";
import { selectMenu, selectTextToTranslate } from "../store/App.selectors";
import {
  resetAdvancedSearch,
  setMenu,
  setTextToTranslate,
} from "../store/App.store";
import { BoxColumnCenter } from "../styles/General";

export default function Home() {
  const textToTranslate = useSelector(selectTextToTranslate);
  const hasText = textToTranslate.length > 0;
  const modalOpen = useSelector(selectMenu);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(setMenu(false));
    };
  }, []);

  useEffect(() => {
    dispatch(resetAdvancedSearch());
  }, []);

  return (
    <div className="super-container">
      <Header />
      <br />
      <BoxColumnCenter
        mt={0}
        className={hasText ? "animate animate-to-bottom" : "animate"}
      >
        <LanguageToggle />
      </BoxColumnCenter>

      <BoxColumnCenter
        mt={3}
        style={{ zoom: 0.8, height: 120 }}
        className={hasText ? "animate animate-to-bottom" : "animate"}
      >
        <Footer setText={(value) => dispatch(setTextToTranslate(value))} />
      </BoxColumnCenter>

      <ModalMenu
        open={modalOpen}
        handleClose={() => dispatch(setMenu(false))}
      />
    </div>
  );
}
