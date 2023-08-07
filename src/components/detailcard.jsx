import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseconfig";
import Navbar from "./navbar";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

const DetailArtikel = () => {
  const { id } = useParams();
  const [artikel, setArtikel] = useState(null);

  useEffect(() => {
    const getArtikelData = async () => {
      try {
        const artikelRef = collection(db, "artikel");
        const artikelSnap = await getDoc(doc(artikelRef, id));

        if (artikelSnap.exists()) {
          setArtikel(artikelSnap.data());
        } else {
          console.log("Artikel not found!");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getArtikelData();
  }, [id]);

  if (!artikel) {
    return <div className="text-center">Loading...</div>;
  }
  const judulParts = artikel.judul.split(" ");
  const firstPart = judulParts.slice(0, judulParts.length / 2).join(" ");
  const secondPart = judulParts.slice(judulParts.length / 2).join(" ");
  return (
    <>
      <Navbar />
      <div className="ml-20 mr-20">
        <h1 className="text-3xl font-bold mb-5 mt-5">
          <span className="text-blue-500">{firstPart}</span> <span className="text-black">{secondPart}</span>
        </h1>
        <div className="text-base mt-5 ">
          <Link to="/edukasi" className="flex gap-3 items-center font-medium text-sky-700 hover:text-blue-800 mr-16">
            <IoMdArrowRoundBack />
            kembali
          </Link>
        </div>
        <img src={artikel.thumbnail} alt="" className="w-3/4 h-[700px] rounded-lg shadow-xl" />
        <div className="font-bold mt-5">Kategori: {artikel.Kategori}</div>
        <div className="font-bold">Kategori Usia: {artikel.age_id}</div>
        <div className="font-bold mb-5">Tanggal: {artikel.tanggal}</div>
        <div className="mt-4">{artikel.kontent}</div>
      </div>
    </>
  );
};

export default DetailArtikel;
