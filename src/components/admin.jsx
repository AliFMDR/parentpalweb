import { useState } from "react";
import Logodasboard from "../images/logo.png";
import TanyaAhli from "../components/tanyaahli1";
import leftImage from "../images/left.png";
import rightImage from "../images/right.png";
import berandaIcon from "../images/beranda.png";
import konsultasiIcon from "../images/konsultasi.png";
import edukasiIcon from "../images/edukasi.png";
import webinarIcon from "../images/webinar.png";
import logaktivitasIcon from "../images/log-aktivitas.png";
import pengaturanIcon from "../images/pengaturan.png";
import chatIcon from "../images/chat.png";
import logoutIcon from "../images/logout.png";
import FormInput from "./upload";
import Kominutas from "./kominutas";
import Editprofil from "./editprofil";
import WebinarForm from "./webinar";
import LogAktivitas from "./logaktivitas";
import { auth } from "../firebaseconfig";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import DashboardPsikolog from "./beranda";

const Sidebar = () => {
  const [selectedMenu, setSelectedMenu] = useState("beranda");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();
  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
    // Logika lainnya untuk mengubah konten di sebelahnya
  };

  const logOut = () => {
    // Logika untuk proses logout
    signOut(auth)
      .then(() => {
        navigate("/");
        console.log("Logout");
      })
      .catch((error) => {
        console.log("Error:" + error);
      });
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="bg-[#E6EEF5]">
      <div className="flex h-screen">
        {isSidebarOpen && (
          <div className="bg-white w-56">
            {/* Logo dan tulisan di sidebar paling atas */}
            <div className="flex items-center justify-center p-4 mb-4">
              <img src={Logodasboard} alt="Logo" className="w-10 h-10 mr-2" />
              <span className="font-bold text-[#395176]">ParentPal</span>
            </div>

            {/* Menu utama */}
            <nav>
              <p className="font-thin ml-2" style={{ fontSize: "12px" }}>
                Menu Utama
              </p>
              <div className="mt-4"></div>
              <ul className="space-y-2 mt-4 ml-0 " style={{ fontSize: "15px" }}>
                <li className={`pl-7 py-2 cursor-pointer ${selectedMenu === "beranda" ? "bg-gradient-to-r from-[#0D99FF] to-white border-l-8 border-blue-900" : ""}`} onClick={() => handleMenuClick("beranda")}>
                  <img src={berandaIcon} alt="Beranda" className="w-5 h-5 mr-2 inline-block" />
                  <span className="inline-block">Beranda</span>
                </li>
                <li className={`pl-7 py-2 cursor-pointer ${selectedMenu === "konsultasi" ? "bg-gradient-to-r from-[#0D99FF] to-white border-l-8 border-blue-900" : ""}`} onClick={() => handleMenuClick("konsultasi")}>
                  <img src={konsultasiIcon} alt="Konsultasi Orang Tua" className="w-5 h-5 mr-2 inline-block" />
                  <span className="inline-block">Konsultasi Orang Tua</span>
                </li>
                <li className={`pl-7 py-2 cursor-pointer ${selectedMenu === "edukasi" ? "bg-gradient-to-r from-[#0D99FF] to-white border-l-8 border-blue-900" : ""}`} onClick={() => handleMenuClick("edukasi")}>
                  <img src={edukasiIcon} alt="Edukasi" className="w-5 h-5 mr-2 inline-block" />
                  <span className="inline-block">Edukasi</span>
                </li>
                <li className={`pl-7 py-2 cursor-pointer ${selectedMenu === "Komunitas" ? "bg-gradient-to-r from-[#0D99FF] to-white border-l-8 border-blue-900" : ""}`} onClick={() => handleMenuClick("Komunitas")}>
                  <img src={edukasiIcon} alt="Edukasi" className="w-5 h-5 mr-2 inline-block" />
                  <span className="inline-block">Komunitas</span>
                </li>
                <li className={`pl-7 py-2 cursor-pointer ${selectedMenu === "webinar" ? "bg-gradient-to-r from-[#0D99FF] to-white border-l-8 border-blue-900" : ""}`} onClick={() => handleMenuClick("webinar")}>
                  <img src={webinarIcon} alt="Webinar" className="w-5 h-5 mr-2 inline-block" />
                  <span className="inline-block">Webinar</span>
                </li>
              </ul>
              <div className="mb-10"></div>
            </nav>

            {/* Referensi dan menu lainnya */}
            <div className="mt-auto">
              <div className="border-t border-gray-300 mt-4"></div>
              <p className="font-thin mt-4 ml-2" style={{ fontSize: "12px" }}>
                Preferensi
              </p>
              <ul className="space-y-2 mt-4" style={{ fontSize: "15px" }}>
                <li className={`pl-7 py-2 mt-4 cursor-pointer ${selectedMenu === "Log Aktivitas" ? "bg-gradient-to-r from-[#0D99FF] to-white border-l-8 border-blue-900" : ""}`} onClick={() => handleMenuClick("Log Aktivitas")}>
                  <img src={logaktivitasIcon} alt="Log Aktivitas" className="w-5 h-5 mr-2 inline-block" />
                  <span className="inline-block">Log Aktivitas</span>
                </li>
                <li className={`pl-7 py-2 mt-10 cursor-pointer ${selectedMenu === "Pengaturan" ? "bg-gradient-to-r from-[#0D99FF] to-white border-l-8 border-blue-900" : ""}`} onClick={() => handleMenuClick("Pengaturan")}>
                  <img src={pengaturanIcon} alt="Pengaturan" className="w-5 h-5 mr-2 inline-block" />
                  <span className="inline-block">Pengaturan</span>
                </li>
                <li className={`pl-7 py-2 mt-10 cursor-pointer ${selectedMenu === "Pusat Bantuan" ? "bg-gradient-to-r from-[#0D99FF] to-white border-l-8 border-blue-900" : ""}`} onClick={() => handleMenuClick("Pusat Bantuan")}>
                  <img src={chatIcon} alt="Pusat Bantuan" className="w-5 h-5 mr-2 inline-block" />
                  <span className="inline-block">Pusat Bantuan</span>
                </li>
              </ul>
              <div className="mt-10 mr-44 bottom-0 w-full text-center mb-4">
                <button className="text-black px-1 py-2 rounded" style={{ width: "120px", height: "40px" }} onClick={logOut}>
                  <span>
                    <img src={logoutIcon} alt="Log Out" className="w-5 h-5 inline-block" />
                  </span>
                  <span className="inline-block ml-4">Log Out</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Konten di sebelah sidebar */}
        <div className={`flex-1 ${isSidebarOpen ? "" : ""}`}>
          <button className={`bg-white text-white px-2 py-1 rounded-full border-1 border-[#6C757E] absolute top-4 left-[205px] ${isSidebarOpen ? "" : "hidden"}`} onClick={toggleSidebar}>
            <img src={leftImage} alt="Buka" className="w-5 h-7" />
          </button>
          {!isSidebarOpen && (
            <button className="bg-white text-white px-2 py-1 rounded-full border-1 border-[#6C757E] absolute top-4 left-[-18px]" onClick={toggleSidebar}>
              <img src={rightImage} alt="Tutup" className="w-5 h-7" />
            </button>
          )}
          <div className="bg-[#E6EEF5]">
            <header className="bg-[#07294A] h-20 p-4"></header>
            {/* Isi konten sesuai menu yang dipilih */}
            {selectedMenu === "beranda" && (
              <div>
                <DashboardPsikolog user="ALIF" />
              </div>
            )}

            {selectedMenu === "konsultasi" && (
              <div style={{ margin: "auto" }}>
                <h1 style={{ marginTop: "40px", marginBottom: "20px" }}></h1>
                <TanyaAhli />
              </div>
            )}

            {selectedMenu === "edukasi" && (
              <div>
                <FormInput />
              </div>
            )}
            {selectedMenu === "Komunitas" && (
              <div>
                <Kominutas />
              </div>
            )}

            {selectedMenu === "webinar" && (
              <div>
                <WebinarForm />
                {/* Tambahkan elemen HTML atau komponen React lainnya sesuai kebutuhan */}
              </div>
            )}

            {selectedMenu === "aktivitas" && (
              <div>
                <h1>Semua Aktivitas</h1>
                {/* Tambahkan elemen HTML atau komponen React lainnya sesuai kebutuhan */}
              </div>
            )}

            {selectedMenu === "Log Aktivitas" && (
              <div>
                <h1>Log Aktivitas</h1>
                <LogAktivitas />
              </div>
            )}

            {selectedMenu === "Pengaturan" && (
              <div>
                <h1>Pengaturan</h1>
                <Editprofil />
              </div>
            )}

            {selectedMenu === "Pusat Bantuan" && (
              <div>
                <h1>Pusat Bantuan</h1>
                {/* Tambahkan elemen HTML atau komponen React lainnya sesuai kebutuhan */}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
