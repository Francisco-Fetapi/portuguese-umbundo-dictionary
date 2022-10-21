import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Conversations from "./pages/Conversations";
import Favorites from "./pages/Favorites";
import HelpAndComments from "./pages/HelpAndComments";
import History from "./pages/History";
import Home from "./pages/Home";
import PolicyAndPrivacy from "./pages/PolicyAndPrivacy";
import SavedSentences from "./pages/SavedSentences";
import Settings from "./pages/Settings";
import UtilityTerms from "./pages/UtilityTerms";
import AdvancedSearch from "./pages/AdvancedSearch";
import Word from "./pages/Word";

export default function routes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/historico" element={<History />} />
        <Route path="/favoritos" element={<Favorites />} />
        <Route path="/frases-guardadas" element={<SavedSentences />} />
        <Route path="/pesquisa-avancada" element={<AdvancedSearch />} />
        <Route path="/conversacao" element={<Conversations />} />
        <Route path="/definicoes" element={<Settings />} />
        <Route path="/ajuda-e-comentarios" element={<HelpAndComments />} />
        <Route path="/sobre-nos" element={<AboutUs />} />
        <Route
          path="/politicas-de-privacidade"
          element={<PolicyAndPrivacy />}
        />
        <Route path="/termos-de-utilizacao" element={<UtilityTerms />} />
        <Route path="/palavra/:word" element={<Word />} />
      </Routes>
    </BrowserRouter>
  );
}
