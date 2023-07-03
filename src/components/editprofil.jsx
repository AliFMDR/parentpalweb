import React, { useState } from "react";

const EditProfile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [profileImage, setProfileImage] = useState(null);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleBioChange = (e) => {
    setBio(e.target.value);
  };

  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    setProfileImage(URL.createObjectURL(imageFile));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Lakukan operasi penyimpanan atau pembaruan profil pengguna di sini
    // Misalnya, kirim data ke server atau panggil API untuk memperbarui profil

    // Mengunggah foto profil ke server
    if (profileImage) {
      const formData = new FormData();
      formData.append("profileImage", profileImage);

      // Kirim formData ke API atau server untuk mengunggah foto
      // Misalnya, fetch('/upload-profile-image', { method: 'POST', body: formData })
      // Kemudian, dapatkan URL foto yang diunggah dari respons server dan simpan di profil pengguna
    }

    // Setelah berhasil menyimpan atau memperbarui profil, bisa melakukan pengalihan halaman jika diperlukan
    // history.push('/profile') atau sesuai dengan rute yang diinginkan
  };

  return (
    <div className="max-w-md mx-auto mt-4 bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Edit Profil</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="profileImage" className="block font-bold mb-1">
            Foto Profil
          </label>
          <div className="relative w-24 h-24 mx-auto mb-2">
            <img src={profileImage || "placeholder.png"} alt="Profile" className="w-full h-full object-cover rounded-full" />
            <label htmlFor="imageUpload" className="absolute bottom-0 right-0 bg-blue-500 text-white rounded-full p-2 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <input type="file" id="imageUpload" accept="image/*" className="hidden" onChange={handleImageChange} />
            </label>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block font-bold mb-1">
            Nama{" "}
          </label>
          <input type="text" id="name" className="w-full p-2 border border-gray-300 rounded" value={name} onChange={handleNameChange} />
        </div>
        <div className="mb-4">
          <label htmlFor="bio" className="block font-bold mb-1">
            Bio
          </label>
          <textarea id="bio" className="w-full p-2 border border-gray-300 rounded" rows="4" value={bio} onChange={handleBioChange} />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Simpan
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
