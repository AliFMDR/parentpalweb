import { useState, useRef } from "react";
import { storage } from "../firebaseconfig";
import { db } from "../firebaseconfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import { setDoc, doc } from "firebase/firestore";

const FileInputGambar = () => {
  const [imageUpload, setImageUpload] = useState(null);
  const judulRef = useRef();
  const uploadImage = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then(() => {
      getDownloadURL(imageRef).then((url) => {
        setDoc(doc(db, "artikel", judulRef.current.value, { merge: true }), {
          thumbnail: url,
        });
      });
      alert("berhasil");
    });
  };

  return (
    <div>
      <p className="block text-lg font-medium mb-2">Thumbnail</p>
      <input
        type="file"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }}
      />
      <button onClick={uploadImage}> Upload Image</button>
    </div>
  );
};

export default FileInputGambar;
