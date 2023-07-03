import React, { useState } from "react";
import komunitasimg from "../images/otgambar.png";

const Table = () => {
  const [selectedItemId, setSelectedItemId] = useState(null);

  const data = [
    { id: 1, name: "toddler", image: "toddler.jpg" },
    { id: 2, name: "Pregnant", image: "pregnant.jpg" },
    { id: 3, name: "Special kids", image: "special.jpg" },
    { id: 4, name: "Single parents", image: "single.jpg" },
    { id: 5, name: "Kids", image: "kids.jpg" },
    { id: 6, name: "Working moms", image: "workingmoms.jpg" },
    // Tambahkan data lainnya sesuai kebutuhanmu
  ];

  const handleButtonClick = (itemId) => {
    setSelectedItemId(itemId);
  };

  const getModalContent = (itemId) => {
    // Ubah sesuai dengan konten yang diinginkan untuk setiap modal aksi
    switch (itemId) {
      case 1:
        return (
          <div className="w-40">
            <h2 className="font-bold">Klik link dibawah</h2>
            <p className="hover:text-blue-500">
              <a href="https://chat.whatsapp.com/CtUzwxOL7Ev5cmnLlNP4gP">Join Group Whatsapp</a>
            </p>
          </div>
        );
      case 2:
        return (
          <div className="w-40">
            <h2 className="font-bold">Klik link dibawah</h2>
            <p className="hover:text-blue-500">
              <a href="https://chat.whatsapp.com/It0UzcxOCtGBfDReSL8jN6">Join Group Whatsapp</a>
            </p>
          </div>
        );
      case 3:
        return (
          <div className="w-40">
            <h2 className="font-bold">Klik link dibawah</h2>
            <p className="hover:text-blue-500">
              <a href="https://chat.whatsapp.com/Bqo4ZiUkopJIdBGUYcmH39">Join Group Whatsapp</a>
            </p>
          </div>
        );
      case 4:
        return (
          <div className="w-40">
            <h2 className="font-bold">Klik link dibawah</h2>
            <p className="hover:text-blue-500">
              <a href="https://chat.whatsapp.com/LrZ8r5r68HZB2Azx6HyBgK">Join Group Whatsapp</a>
            </p>
          </div>
        );
      case 5:
        return (
          <div className="w-40">
            <h2 className="font-bold">Klik link dibawah</h2>
            <p className="hover:text-blue-500">
              <a href="https://chat.whatsapp.com/KprQZgDxzio48il6yWqqe8">Join Group Whatsapp</a>
            </p>
          </div>
        );
      case 6:
        return (
          <div className="w-40">
            <h2 className="font-bold">Klik link dibawah</h2>
            <p className="hover:text-blue-500">
              <a href="https://chat.whatsapp.com/FHAAVKqNGhBLMeSC9BzkU5">Join Group Whatsapp</a>
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex justify-center m-10 bg-white p-5 rounded-md shadow-md ">
      <table className="min-w-full bg-white border border-gray-300 ">
        <thead>
          <tr className="bg-gray-400 ">
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Nama Komunitas</th>
            <th className="py-2 px-4 border-b">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td className="py-2 px-4 border-b text-center">{item.id}</td>
              <td className="py-2 px-4 border-b">
                <div className="flex items-center text-center ml-10">
                  <img src={komunitasimg} alt={item.name} className="w-20 h-20 rounded-full ml-3" />
                  <span className="ml-3">{item.name}</span>
                </div>
              </td>

              <td className="py-2 px-4 border-b">
                <div className="flex justify-center">
                  <button className="hover:bg-blue-700 text-black font-bold py-1 px-2 border-2 rounded" onClick={() => handleButtonClick(item.id)}>
                    ...
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedItemId && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded w-96">
            {getModalContent(selectedItemId)}
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mt-4" onClick={() => setSelectedItemId(null)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Table;
