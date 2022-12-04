import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./containers/Home";
import Donate from "./containers/Donate";
import Contact from "./containers/Contact";
import About from "./containers/About";

const App = () => {
  return (
    <>
      <Header />

      <main className="h-full w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
};

export default App;
