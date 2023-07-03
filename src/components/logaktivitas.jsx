import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseconfig";

const LogAktivitas = () => {
  const [artikels, setArtikels] = useState([]);

  const getData = async () => {
    const artikelRef = collection(db, "artikel");
    const artikelSnap = await getDocs(artikelRef);

    const artikel = [];
    artikelSnap.forEach((doc) => {
      artikel.push(doc.data());
    });

    setArtikels(artikel);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1 className="text-2xl">HALLO TEST FECTH API</h1>
      {artikels.map((artikel, idx) => (
        <div key={idx}>
          <div>Kategori:{artikel.Kategori}</div>
          <div>Kategori Usia:{artikel.age_id}</div>
          <div>Judul:{artikel.judul}</div>
          <div>Tanggal:{artikel.tanggal}</div>
          <div>
            Konten: <p>{artikel.kontent}</p>
          </div>
          <div>
            Thumbnail: <img src={artikel.thumbnail} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default LogAktivitas;
