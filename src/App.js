import './App.css';
import { Route, Routes } from 'react-router';
// import Main from './components/Main';
import HowItWorksPage from './components/SubMain/HowItWorksPage';
import ReviewsPage from './components/SubMain/ReviewsPage';
import ContactPage from './components/SubMain/ContactPage';
import Main from './components/Main';

function App() {
  return (
    <>
      <div >

        <Main />
        <Routes>
          {/* <Route path="/" exact element={<Main />} /> */}
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/contacts" element={<ContactPage />} />
        </Routes>
      </div>
    </>);
}

export default App;
