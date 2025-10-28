import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import CoursePage from "./pages/CoursePage";
import MaterialPage from "./pages/MaterialPage";

export default function App() {
  return (
    <Router>
      {/* Barre de navigation */}
      <Header />

      {/* Définition des routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/course/:id" element={<CoursePage />} />
        <Route path="/material" element={<MaterialPage />} />
      </Routes>
    </Router>
  );
}
