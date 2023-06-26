import "./App.css";
import { Route, Routes } from "react-router";
// import Main from './components/Main';
import Main from "./components/Landing/Main/Main";
import AboutUsPage from "./components/Landing/AboutUsPage";
import HowItWorksPage from "./components/Landing/HowItWorksPage";
import ReviewsPage from "./components/Landing/ReviewsPage";
import ContactPage from "./components/Landing/ContactPage";
import SearchResultsTrain from "./components/SearchResults/SearchResultstrain";
import Footer from "./components/SubMain/Footer";

function App() {
  return (
    <>
      <div>
        <Main />
        <Routes>
          <Route path="/about-us" exact element={<AboutUsPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/contacts" element={<ContactPage />} />
          <Route path="/choose-train" element={<SearchResultsTrain />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
