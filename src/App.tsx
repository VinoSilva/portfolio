import "./App.css";

// Import libraries
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import pages
import Home from "@pages/Home";
import About from "@pages/About";
import Projects from "@pages/Projects";
import Contact from "@pages/Contact";

// Import components
import Navbar from "@components/shared/Navbar";
import routes from "@constants/route";
import Footer from "@components/shared/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      {/* Routes */}

      <div className="mt-20 max-w-7xl mx-auto p-6">
        <Routes>
          <Route path={routes.home} element={<Home />} />
          <Route path={routes.about} element={<About />} />
          <Route path={routes.projects} element={<Projects />} />
          <Route path={routes.contact} element={<Contact />} />
        </Routes>
        <div className="mt-40" />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
