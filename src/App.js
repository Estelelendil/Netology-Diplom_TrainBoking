import "./App.css";
import { Route, Routes } from "react-router";
// import Main from './components/Main';
import HowItWorksPage from "./components/SubMain/HowItWorksPage";
import ReviewsPage from "./components/SubMain/ReviewsPage";
import ContactPage from "./components/SubMain/ContactPage";
import Main from "./components/Main";
import Footer from "./components/SubMain/Footer";
import AboutUsPage from "./components/SubMain/AboutUsPage";
import SearchResultsTrain from "./components/SearchResults/SearchResultstrain";

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
