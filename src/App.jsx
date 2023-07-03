import Hubungikami from "./pages/Hubungikami";
import Detailartikel from "./components/detailartikel";
import Edukasi from "./pages/Edukasi";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Aplikasi from "./pages/Aplikasi";
import Tanyaahli from "./pages/Tanyaahli";
import Masuk from "./pages/Masuk";
import Register from "./pages/Singup";
import Dasboard from "./pages/Dasboard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/edukasi" element={<Edukasi />} />
        <Route path="/aplikasi" element={<Aplikasi />} />
        <Route path="/hubungikami" element={<Hubungikami />} />
        <Route path="/detailartikel" element={<Detailartikel />} />
        <Route path="/tanyaahli" element={<Tanyaahli />} />
        <Route path="/login" element={<Masuk />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dasboard" element={<Dasboard />} />
        <Route path="*" element={<h1>NOT FOUND</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
