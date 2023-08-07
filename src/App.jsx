import Hubungikami from "./pages/Hubungikami";
import Detailartikel from "./components/detailartikel";
import Edukasi from "./pages/Edukasi";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebaseconfig";
import Aplikasi from "./pages/Aplikasi";
import Tanyaahli from "./pages/Tanyaahli";
import Masuk from "./pages/Masuk";
import Register from "./pages/Singup";
import Dasboard from "./pages/Dasboard";
import LogAktivitas from "./components/logaktivitas";
import DetailArtikel from "./components/detailcard";

const App = () => {
  const [artikels, setArtikels] = useState([]);

  useEffect(() => {
    // Fetch data dari firebase
    const getData = async () => {
      try {
        const artikelRef = collection(db, "artikel");
        const artikelSnap = await getDocs(artikelRef);

        const artikelData = artikelSnap.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        setArtikels(artikelData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getData();
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/logaktivitas" element={<LogAktivitas />} />
        <Route path="/logaktivitas/:id" element={<DetailArtikel />} />
        <Route path="/edukasi" element={<Edukasi />} />
        <Route path="/edukasi/:id" element={<DetailArtikel />} />
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
