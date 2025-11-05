import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/HomePage";
import { ThemeProvider } from "./contexts/ThemeContext";
import { AuthProvider } from "./contexts/AuthContext";
import './App.css';

// Lazy loading pour optimiser les performances
const CoursePage = lazy(() => import("./pages/CoursePage"));
const MaterialPage = lazy(() => import("./pages/MaterialPage"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Signup = lazy(() => import("./pages/Signup"));
const Profile = lazy(() => import("./pages/Profile"));
const Login = lazy(() => import("./pages/Login"));
const Auth = lazy(() => import("./pages/Auth"));

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
        <div className="d-flex flex-column min-vh-100">
          {/* Barre de navigation */}
          <Header />

          {/* Définition des routes */}
          <main className="flex-grow-1">
            <Suspense fallback={
              <div className="d-flex justify-content-center align-items-center" style={{minHeight: '50vh'}}>
                <div className="spinner-border text-success" role="status">
                  <span className="visually-hidden">Chargement...</span>
                </div>
              </div>
            }>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/course/:id" element={<CoursePage />} />
                <Route path="/material" element={<MaterialPage />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/login" element={<Login />} />
                <Route path="/auth" element={<Auth />} />
              </Routes>
            </Suspense>
          </main>
          
          <Footer />
          <ScrollToTop />
        </div>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}
