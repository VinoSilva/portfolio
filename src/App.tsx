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
import FavouriteBooks from "@pages/FavouriteBooks";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      {/* Routes */}

      <div className="mt-20 max-w-7xl mx-auto p-4 sm:p-6">
        <Routes>
          <Route path={routes.home} element={<Home />} />
          <Route path={routes.about} element={<About />} />
          <Route path={routes.projects} element={<Projects />} />
          <Route path={routes.contact} element={<Contact />} />
          <Route path={routes.favourite_books} element={<FavouriteBooks />} />
        </Routes>
        <div className="mt-40" />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
