import akunImg from "../images/akun.png";
import pertanyaanImg from "../images/pertanyaan.png";
import kalenderImg from "../images/kalender.png";
import proteksiImg from "../images/proteksi.png";
import artikelImg from "../images/artikel.png";
import card1Img from "../images/card1.png";
import card2Img from "../images/card2.png";
import card3Img from "../images/card3.png";
import bgcard1Img from "../images/bg-card1.png";
import bgcard2Img from "../images/bg-card2.png";
import { useEffect, useState } from "react";
const cardContainerStyle1 = {
  display: "flex",
  flexDirection: "row",
  gap: "70px",
  fontSize: "12px",
  marginTop: "-60px",
};

const cardStyle = {
  justifyContent: "space-between",
  backgroundColor: "#fff",
  width: "350px",
  height: "170px",
  borderRadius: "10px",
};

const cardContainerStyle2 = {
  display: "flex",
  flexDirection: "row",
  gap: "70px",
  fontSize: "12px",
};
const jumlahpenggunaAktif = 101;
const presentasipenggunaAftif = +30;
const jumlahpertanyaan = "12/20";
const presentasipertanyaan = 60;
const webinarDate = "21 Agustus 2023";
const webinarTime = "14:00 WIB";
const jumlahpertanyaanterjawab = 8;
const persentasijawaban = 40;
const jumlahartikelupload = 12;

const DashboardPsikolog = (props) => {
  const { user } = props;
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (time) => {
    return time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });
  };

  return (
    <div className="dashboard-container">
      <div
        style={{
          backgroundColor: "#07294A",
          width: "100%",
          height: "240px",
          padding: "20px",
        }}
      >
        <div className="header" style={{ color: "#FFFFFF", display: "flex", justifyContent: "space-between" }}>
          <h1>Dashboard / Utama</h1>
          <div className="text-4xl text-white font-bold bg-[#07294A]" style={{ display: "inline-block" }}>
            {formatTime(time)}
          </div>
        </div>
        <div className="welcome-message">
          <p style={{ color: "#FFFFFF", fontSize: "35px", fontWeight: "bold" }}>Selamat Datang Kembali, {user}!</p>
        </div>
        <div className="lorem-ipsum" style={{ color: "#FFFFFF", fontSize: "15px", width: "550px", marginTop: "10px" }}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempor, leo eu vulputate consectetur, lacus arcu venenatis orci.</p>
        </div>
      </div>
      <div style={{ paddingLeft: "20px" }}>
        <div className="card-container" style={cardContainerStyle1}>
          <div
            className="card1"
            style={{
              ...cardStyle,
              backgroundColor: "#FFFFFF",
              backgroundImage: `url(${card1Img})`,
              backgroundSize: "cover",
            }}
          >
            <div style={{ backgroundColor: "#FFC001", borderTopRightRadius: "10px", borderTopLeftRadius: "10px" }}>
              <h2 style={{ fontSize: "15px", color: "#07294A", paddingLeft: "20px", paddingTop: "20px" }}>Pengguna Aktif</h2>
              <p style={{ fontSize: "50px", fontWeight: "bold", color: "#395176", paddingLeft: "20px", paddingBottom: "5px" }}>{jumlahpenggunaAktif}</p>
              <div className="user-info">
                <div className="user-count">
                  <div
                    style={{
                      width: "65px",
                      height: "65px",
                      backgroundColor: "#FFFFFF",
                      borderRadius: "8px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      position: "absolute",
                      marginLeft: "240px",
                      marginTop: "-90px",
                    }}
                  >
                    <img src={akunImg} alt="akun" style={{ width: "70%", height: "75%" }} />
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", backgroundColor: "#FFFFFF", width: "350px", height: "40px", paddingLeft: "20px", paddingTop: "10px" }}>
                <p style={{ backgroundColor: "#60A31C", width: "40px", height: "17px", borderRadius: "15px", textAlign: "center" }}>{presentasipenggunaAftif}%</p>
                <p style={{ fontSize: "11px", marginLeft: "5px" }}>dalam 30 hari terakhir</p>
                <p style={{ fontSize: "11px", marginLeft: "65px" }}>+10 pengguna</p>
              </div>
            </div>
          </div>
          <div
            className="card2"
            style={{
              ...cardStyle,
              backgroundColor: "#FFFFFF",
              backgroundImage: `url(${card2Img})`,
              backgroundSize: "cover",
            }}
          >
            <div style={{ backgroundColor: "#0DCAF0", borderTopRightRadius: "10px", borderTopLeftRadius: "10px" }}>
              <h2 style={{ fontSize: "15px", color: "#07294A", paddingLeft: "20px", paddingTop: "20px" }}>Pertanyaan Aktif Terjawab</h2>
              <p style={{ fontSize: "50px", fontWeight: "bold", color: "#395176", paddingLeft: "20px", paddingBottom: "5px" }}>{jumlahpertanyaan}</p>
              <div className="question-info">
                <div className="question-count">
                  <div
                    style={{
                      width: "65px",
                      height: "65px",
                      marginLeft: "240px",
                      backgroundColor: "#FFFFFF",
                      borderRadius: "8px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      position: "absolute",

                      marginTop: "-90px",
                    }}
                  >
                    <img src={pertanyaanImg} alt="pertanyaan" style={{ width: "100%", height: "100%", borderRadius: "8px" }} />
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", backgroundColor: "#FFFFFF", width: "350px", height: "40px", paddingLeft: "20px", paddingTop: "10px" }}>
                <p style={{ backgroundColor: "#60A31C", width: "40px", height: "17px", borderRadius: "15px", textAlign: "center" }}>{presentasipertanyaan}%</p>
                <p style={{ fontSize: "11px", marginLeft: "5px" }}>pertanyaan terjawab dari keseluruhan pertanyaan</p>
              </div>
            </div>
          </div>
          <div
            className="card3"
            style={{
              ...cardStyle,
              backgroundColor: "#FFFFFF",
              backgroundImage: `url(${card3Img})`,
              backgroundSize: "cover",
            }}
          >
            <div style={{ backgroundColor: "#DC3545", borderTopRightRadius: "10px", borderTopLeftRadius: "10px" }}>
              <h2 style={{ fontSize: "15px", color: "#07294A", paddingLeft: "20px", paddingTop: "20px" }}>Jadwal Webinar</h2>
              <p style={{ fontSize: "22px", fontWeight: "bold", color: "#395176", paddingLeft: "20px" }}>{webinarDate}</p>
              <p style={{ fontSize: "22px", fontWeight: "bold", color: "#395176", paddingLeft: "20px", paddingBottom: "14px" }}>{webinarTime}</p>
              <div className="webinar-info">
                <div className="schedule">
                  <div
                    style={{
                      width: "65px",
                      height: "65px",
                      marginLeft: "240px",
                      backgroundColor: "#FFFFFF",
                      borderRadius: "8px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      position: "absolute",

                      marginTop: "-90px",
                    }}
                  >
                    <img src={kalenderImg} alt="kalender" style={{ width: "90%", height: "90%" }} />
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", backgroundColor: "#FFFFFF", width: "330px", height: "30px", paddingLeft: "20px", paddingTop: "10px" }}>
                <img src={proteksiImg} alt="proteksi" style={{ height: "15px", width: "12px" }} />
                <p style={{ fontSize: "11px", marginLeft: "5px" }}>Anda memiliki jadwal temu pada tanggal tertera!</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card-container" style={{ ...cardContainerStyle2, marginTop: "30px" }}>
          <div
            className="card4"
            style={{
              backgroundColor: "#FFFFFF",
              backgroundImage: `url(${bgcard1Img})`,
              backgroundSize: "cover",
              backgroundPosition: "right",
              width: "350px",
              height: "255px",
              borderRadius: "10px",
              textAlign: "center",
            }}
          >
            <div style={{ paddingTop: "40px" }}>
              <p style={{ color: "#395176", fontSize: "50px", fontWeight: "bold" }}>{jumlahpertanyaanterjawab}</p>
              <h2>Pertanyaan yang telah Anda jawab</h2>
              <div className="question-info">
                <p>Terima kasih atas komitmen Anda dalam menjawab pertanyaan pengguna. Anda telah menjawab {persentasijawaban}% dari pertanyaan yang diajukan di Platform kami.</p>
              </div>
            </div>
          </div>
          <div
            className="card5"
            style={{
              backgroundImage: `url(${artikelImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "770px",
              height: "320px",
              borderRadius: "10px",
              padding: "40px",
            }}
          >
            <h2 style={{ fontSize: "22px", width: "280px", color: "#FFFFFF" }}>Mengenali Tanda-tanda Kecanduan Gadget pada Anak</h2>
            <div className="question-info mt-2">
              <p
                style={{
                  color: "#FFFFFF",
                  fontSize: "14px",
                  width: "290px",
                }}
              >
                Gadget telah menjadi bagian tak terpisahkan dari kehidupan sehari-hari, termasuk anak-anak. Ketahui tanda-tanda kecanduan gadget pada anak dan bagaimana mengatasinya...
              </p>
              <button style={{ backgroundColor: "#FFFFFF", width: "120px", height: "30px", padding: "2px", borderRadius: "15px", marginTop: "15px", color: "black", fontSize: "11px" }}>Baca Sekarang</button>
            </div>
          </div>
        </div>
        <div className="card-container" style={cardContainerStyle2}>
          <div
            className="card6"
            style={{
              backgroundColor: "#FFFFFF",
              backgroundImage: `url(${bgcard2Img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "350px",
              height: "255px",
              borderRadius: "10px",
              textAlign: "center",
              marginTop: "-55px",
            }}
          >
            <p style={{ color: "#395176", fontSize: "50px", fontWeight: "bold", paddingTop: "45px" }}>{jumlahartikelupload}</p>
            <h2>Artikel anda telah berhasil di Publikasikan</h2>
            <div className="question-info">
              <p>Kami mengucapkan terima kasih yang tulus atas dedikasi Anda dalam berbagi pengetahuan dan inspirasi melalui artikel dan video yang telah Anda unggah dan publikasikan.</p>
            </div>
          </div>
          <div
            className="card7"
            style={{
              backgroundColor: "#FFFFFF",
              width: "770px",
              height: "180px",
              borderRadius: "10px",
              padding: "20px",
              marginTop: "20px",
            }}
          >
            <h2 style={{ color: "#07294A", fontSize: "16px", fontWeight: "bold" }}>Log Aktivitas Anda</h2>
            <div style={{ marginTop: "10px" }}>
              <span style={{ fontSize: "13px", fontWeight: "bold", paddingRight: "5px" }}>{user}</span>
              <span style={{ fontSize: "13px" }}>Membuat postingan artikel (Terpublis)</span>
              <p style={{ fontSize: "10px" }}>Menumbuhkan Rasa Percaya Diri pada Anak, Tips yang Bisa Anda Coba</p>
              <div className="border-t border-gray-300 mt-2 mb-4"></div>
              <span style={{ fontSize: "13px", fontWeight: "bold", paddingRight: "5px" }}>{user}</span>
              <span style={{ fontSize: "13px" }}>Membuat postingan artikel (Terpublis)</span>
              <p style={{ fontSize: "10px" }}>Menumbuhkan Rasa Percaya Diri pada Anak, Tips yang Bisa Anda Coba</p>
              <div className="border-t border-gray-300 mt-2 mb-4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPsikolog;
