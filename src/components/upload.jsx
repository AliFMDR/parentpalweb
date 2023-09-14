import { useState, useRef } from "react";
import { app } from "../firebaseconfig";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc, Timestamp } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL, uploadString } from "firebase/storage";

import { Editor } from "@tinymce/tinymce-react";

const storage = getStorage(app);

const options = [
  { label: "Emosional", value: "Emosional" },
  { label: "Karakter", value: "Karakter" },
  { label: "Pendidikan", value: "Pendidikan" },
  { label: "Hobi", value: "Hobi" },
  { label: "Perkembangan Fisik", value: "Perkembangan Fisik" },
  { label: "Komunikasi", value: "Komunikasi" },
  { label: "Kognitif", value: "Kognitif" },
  { label: "Pendidikan anak usia dini", value: "Pendidikan anak usia dini" },
  { label: "Psikologi & Pola Asuh ", value: "Psikologi & Pola Asuh" },
  { label: "Kesehatan Anak ", value: "Kesehatan Anak" },
  { label: "Kehamilan ", value: "Kehamilan" },
  { label: "Perencanaan Keuangan", value: "Perencanaan Keuangan" },
];

const usia = [
  { label: "0-6 tahun", value: "1" },
  { label: "7-12 tahun", value: "2" },
  { label: "12-17 tahun", value: "3" },
];

const FormInput = () => {
  const editorRef = useRef(null);
  const judulRef = useRef();
  const [imageUpload, setImageUpload] = useState(null);
  const [setErrors] = useState({});
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedUsia, setSelectedUsia] = useState("");

  const handleOptionChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedOption(selectedValue);
  };

  const handleUsiaChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedUsia(selectedValue);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      const content = editorRef.current.getContent();
      const docu = new DOMParser().parseFromString(content, "text/html");
      const imgElements = docu.querySelectorAll("img");
      for (let i = 0; i < imgElements.length; i++) {
        const img = imgElements[i];
        const imageUrl = img.src;
        const storageRef = ref(storage, `images/${Date.now()}_${Math.floor(Math.random() * 100000)}.png`);
        await uploadString(storageRef, imageUrl, "data_url");
        const downloadUrl = await getDownloadURL(storageRef);
        img.src = downloadUrl;
      }

      if (imageUpload == null) return;
      const imageRef = ref(storage, `images/thumbnail ${judulRef.current.value}`);
      await uploadBytes(imageRef, imageUpload);
      const imageUrl = await getDownloadURL(imageRef);

      const dateCreated = Timestamp.now();
      const tanggal = dateCreated.toDate().toDateString();

      const db = getFirestore(app);
      setDoc(doc(db, "artikel", judulRef.current.value), {
        kontent: docu.body.innerHTML,
        thumbnail: imageUrl,
        Kategori: selectedOption,
        tanggal: tanggal,
        judul: judulRef.current.value,
        age_id: selectedUsia,
      });

      console.log("Form submitted:", judulRef.current.value);

      judulRef.current.value = "";
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    const errors = {};

    return errors;
  };

  return (
    <div className="container  mx-auto p-4 ">
      <div className="container  mx-auto p-4 bg-gray-300 rounded-xl">
        <h1 className="text-3xl font-bold mb-4">Input Artikel</h1>
        {/* <FileInputGambar /> */}
        <form onSubmit={handleSubmit}>
          <div>
            <p className="block text-lg font-medium mb-2">Thumbnail</p>
            <input
              type="file"
              onChange={(event) => {
                setImageUpload(event.target.files[0]);
              }}
            />
          </div>

          <div className="mt-5">
            <select value={selectedOption} onChange={handleOptionChange} className="p-2 rounded border border-gray-300">
              <option value="">Pilih Kategori</option>
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="mt-5">
            <select value={selectedUsia} onChange={handleUsiaChange} className="p-2 rounded border border-gray-300">
              <option value="">Masukkan Kategori Usia</option>
              {usia.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="judul" className="block text-lg font-medium mb-1 mt-5">
              Title
            </label>
            <input type="text" id="judul" ref={judulRef} className="border border-gray-300 rounded p-2 w-full" />
          </div>

          <div className="mb-4">
            <label htmlFor="text" className="block text-lg font-medium mb-1">
              Teks
            </label>
            <Editor
              apiKey="3dbc4siucidpab7ck2y78qpnb6px0uuwef8lsy0db579zylu"
              onInit={(evt, editor) => (editorRef.current = editor)}
              initialValue="<p>This is the initial content of the editor.</p>"
              init={{
                height: 500,
                menubar: false,
                plugins: ["advlist", "autolink", "lists", "link", "image", "charmap", "preview", "anchor", "searchreplace", "visualblocks", "code", "fullscreen", "insertdatetime", "media", "table", "image code", "help", "wordcount"],
                toolbar: "undo redo | blocks | " + "bold italic forecolor | alignleft aligncenter " + "alignright alignjustify | bullist numlist outdent indent | " + "removeformat | help image code",
                content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                images_upload_url: storage.upload,
              }}
            />
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormInput;
