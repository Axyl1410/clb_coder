import { AnimatePresence } from "framer-motion";
import { Suspense, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Preloader from "./components/preloader/Preloader";
import { Transition } from "./components/transition/Transition";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";

function App() {
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 1000);
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <Suspense fallback={<Preloader />}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route index element={<Transition OgPage={Home} />} />
            <Route path="*" element={<Transition OgPage={NoPage} />} />
          </Routes>
        </AnimatePresence>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
