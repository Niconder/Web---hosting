import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Homepage } from "./pages/Homepage";
import { HowItWorks } from "./pages/HowItWorks";
import { Price } from "./pages/Price/Price";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Header } from "./layout/Header";
import { Footer } from "./layout/Footer";
import { Success } from "./pages/Success";

function App() {
  return (
    <Router>
      <div className="bg-white relative">
        <div className="relative z-10">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/how-it-works" element={<HowItWorks />} />
              <Route path="/prices" element={<Price />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/success" element={<Success />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router >
  );
}

export default App;
