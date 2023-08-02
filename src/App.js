import "./App.css";
import { Route, Routes } from "react-router";
// import Main from './components/Main';
import Main from "./components/Landing/Main/Main";
import AboutUsPage from "./components/Landing/AboutUsPage";
import HowItWorksPage from "./components/Landing/HowItWorksPage";
import ReviewsPage from "./components/Landing/ReviewsPage";
import ContactPage from "./components/Landing/ContactPage";
import Footer from "./components/SubMain/Footer";
import HeaderMenu from "./components/Landing/Main/HeaderMenu";
import ConnectedCoach from "./components/SearchResults/Coach/ConnectedCoach";
import ConnectedTrain from "./components/SearchResults/Train/ConnectedTrain";
import ConnectedPersons from "./components/SearchResults/Coach/Persons/ConnectedPersons";

function App() {
  // let { from_сity_id } = useParams();
  return (
    <>
      <div>
        {/* <Main /> */}
        <Routes>
          <Route path="/" element={<HeaderMenu />}>
            <Route path="about-us" exact element={<AboutUsPage />} />
            <Route path="how-it-works" element={<HowItWorksPage />} />
            <Route path="reviews" element={<ReviewsPage />} />
            <Route path="contacts" element={<ContactPage />} />
            <Route path="search/" element={<Main />}>
              <Route path="trains/*" element={<ConnectedTrain />} />
              <Route path="seats/*" element={<ConnectedCoach />} />
              <Route path="persons/*" element={<ConnectedPersons />} />
            </Route>
          </Route>
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
