import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/HomePage";
import CoursePage from "./pages/CoursePage";
import MaterialPage from "./pages/MaterialPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Signup from "./pages/Signup";
import { ThemeProvider } from "./contexts/ThemeContext";
import './App.css';

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="d-flex flex-column min-vh-100">
          {/* Barre de navigation */}
          <Header />

          {/* Définition des routes */}
          <main className="flex-grow-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/course/:id" element={<CoursePage />} />
              <Route path="/material" element={<MaterialPage />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </main>
          
          <Footer />
          <ScrollToTop />
        </div>
      </Router>
    </ThemeProvider>
  );
}
