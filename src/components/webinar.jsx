// src/WebinarForm.js
import { useState } from "react";

import { app } from "../firebaseconfig";

import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const storage = getStorage(app);
const WebinarForm = () => {
  const [judul, setJudul] = useState("");
  const [imageUpload, setImageUpload] = useState(null);
  const [waktuMulai, setWaktuMulai] = useState("");
  const [waktuBerakhir, setWaktuBerakhir] = useState("");
  const [tanggal, setTanggal] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/Poster_webinar ${judul}`);
    await uploadBytes(imageRef, imageUpload);
    const imageUrl = await getDownloadURL(imageRef);
    // Simpan data ke Firebase
    const db = getFirestore(app);
    setDoc(doc(db, "webinars", judul), {
      judul: judul,
      thumbnail: imageUrl,
      waktuMulai: waktuMulai,
      waktuBerakhir: waktuBerakhir,
      tanggal: tanggal,
    });

    // Reset nilai input setelah disimpan
    setJudul("");
    setImageUpload(null);
    setWaktuMulai("");
    setTanggal("");
  };

  return (
    <div className="max-w-md mx-auto bg-white mt-10 p-5 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-4">Form Input Webinar</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="judul" className="block mb-1">
            Judul
          </label>
          <input type="text" id="judul" value={judul} onChange={(e) => setJudul(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200" required />
        </div>
        <div className="mb-4">
          <label htmlFor="waktu" className="block mb-1">
            Thumbnail
          </label>
          <input
            type="file"
            onChange={(event) => {
              setImageUpload(event.target.files[0]);
            }}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="waktu" className="block mb-1">
            Waktu Mulai
          </label>
          <input type="time" id="waktuMulai" value={waktuMulai} onChange={(e) => setWaktuMulai(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200" required />
        </div>
        <div className="mb-4">
          <label htmlFor="waktu" className="block mb-1">
            Waktu Berakhir
          </label>
          <input
            type="time"
            id="waktuBerakhir"
            value={waktuBerakhir}
            onChange={(e) => setWaktuBerakhir(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="tanggal" className="block mb-1">
            Tanggal
          </label>
          <input type="date" id="tanggal" value={tanggal} onChange={(e) => setTanggal(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200" required />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
          Simpan
        </button>
      </form>
    </div>
  );
};

export default WebinarForm;
