import { useState } from "react";

const CommunityButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCommunity, setSelectedCommunity] = useState(null);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCommunityClick = (community) => {
    setSelectedCommunity(community);
  };

  const closeModal = () => {
    setSelectedCommunity(null);
    setIsModalOpen(false);
  };

  return (
    <div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleButtonClick}>
        Gabung Komunitas
      </button>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded">
            {selectedCommunity ? (
              <div>
                <h2 className="text-xl font-bold mb-4">Pilih Sub-Komunitas</h2>
                <ul className="space-y-2">
                  <li>
                    <button className="text-blue-500 hover:text-blue-700 hover:scale-[1.1] text-left w-full" onClick={() => handleCommunityClick(null)}>
                      Kembali
                    </button>
                  </li>
                  <li>
                    <a href={`https://wa.link/${selectedCommunity.link}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 hover:scale-[1.1] text-left w-full">
                      {selectedCommunity.name}
                    </a>
                  </li>
                </ul>
              </div>
            ) : (
              <div>
                <h2 className="text-xl font-bold mb-4">Pilih Komunitas</h2>
                <ul className="space-y-2">
                  <li>
                    <button className="text-blue-500 hover:text-blue-700 hover:scale-[1.1] text-left w-full" onClick={() => handleCommunityClick({ name: "Komunitas 1", link: "https://chat.whatsapp.com/CtUzwxOL7Ev5cmnLlNP4gP" })}>
                      Sub-Komunitas 1
                    </button>
                  </li>
                  <li>
                    <button className="text-blue-500 hover:text-blue-700 hover:scale-[1.1] text-left w-full" onClick={() => handleCommunityClick({ name: "Komunitas 2", link: "xxxxxxxxxx2" })}>
                      Sub-Komunitas 2
                    </button>
                  </li>
                  <li>
                    <button className="text-blue-500 hover:text-blue-700 hover:scale-[1.1] text-left w-full" onClick={() => handleCommunityClick({ name: "Komunitas 3", link: "xxxxxxxxxx3" })}>
                      Sub-Komunitas 3
                    </button>
                  </li>
                </ul>
              </div>
            )}
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" onClick={closeModal}>
              Tutup
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommunityButton;
