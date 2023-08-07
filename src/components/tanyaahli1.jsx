import React, { useState, useEffect } from "react";
import rightImg from "../images/icon-right.png";
import moreImg from "../images/more.png";
import searchImg from "../images/icon-search.png";
import profileImg from "../images/profile.png";
import timeImg from "../images/time.png";

const TanyaAhli = () => {
  const [filterByAnswered, setFilterByAnswered] = useState("semua");
  const [sortBy, setSortBy] = useState("semua");
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [isSearchClicked, setIsSearchClicked] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [isAnswering, setIsAnswering] = useState(false);
  const [answerText, setAnswerText] = useState("");

  const questions = [
    // Data pertanyaan...
    {
      id: 1,
      akun: "JohnDoe",
      pertanyaan: "Bagaimana cara menggunakan React Hooks?",
      status: "Terjawab",
      tanggal: "12 Jun 2023",
      waktu: "04:31 AM",
      role: "Ayah",
      deskripsi:
        "Saya sebagai orang tua memiliki seorang anak perempuan yang berusia 10 tahun. Dalam beberapa bulan terakhir, saya memperhatikan bahwa anak saya sering mengalami kecemasan dan ketakutan yang intens. Dia merasa cemas dan takut dalam berbagai situasi, termasuk saat harus berbicara di depan kelas, menghadapi ujian, atau bahkan saat belajar.",
    },
    {
      id: 2,
      akun: "JaneSmith",
      pertanyaan: "Apa perbedaan antara var, let, dan const dalam JavaScript?",
      status: "Terjawab",
      waktu: "11:31 PM",
      tanggal: "09 Jun 2023",
      role: "Ibu",
      deskripsi:
        "Saya sebagai orang tua memiliki seorang anak perempuan yang berusia 10 tahun. Dalam beberapa bulan terakhir, saya memperhatikan bahwa anak saya sering mengalami kecemasan dan ketakutan yang intens. Dia merasa cemas dan takut dalam berbagai situasi, termasuk saat harus berbicara di depan kelas, menghadapi ujian, atau bahkan saat belajar.",
    },
    {
      id: 3,
      akun: "Alice",
      pertanyaan: "Bagaimana cara mengubah warna latar belakang halaman web?",
      status: "Belum Terjawab",
      waktu: "08:30 AM",
      tanggal: "20 Jun 2023",
      role: "Ayah",
      deskripsi:
        "Saya sebagai orang tua memiliki seorang anak perempuan yang berusia 10 tahun. Dalam beberapa bulan terakhir, saya memperhatikan bahwa anak saya sering mengalami kecemasan dan ketakutan yang intens. Dia merasa cemas dan takut dalam berbagai situasi, termasuk saat harus berbicara di depan kelas, menghadapi ujian, atau bahkan saat belajar.",
    },
    {
      id: 4,
      akun: "Bob",
      pertanyaan: "Apa itu API dan bagaimana cara menggunakannya?",
      status: "Terjawab",
      tanggal: "05 Jun 2023",
      waktu: "12:31 PM",
      role: "Ibu",
      deskripsi:
        "Saya sebagai orang tua memiliki seorang anak perempuan yang berusia 10 tahun. Dalam beberapa bulan terakhir, saya memperhatikan bahwa anak saya sering mengalami kecemasan dan ketakutan yang intens. Dia merasa cemas dan takut dalam berbagai situasi, termasuk saat harus berbicara di depan kelas, menghadapi ujian, atau bahkan saat belajar.",
    },
  ];

  useEffect(() => {
    filterQuestions();
  }, [filterByAnswered, sortBy, isSearchClicked, searchTerm]);

  const handleFilterByAnsweredChange = (event) => {
    setFilterByAnswered(event.target.value);
  };

  const handleSortByChange = (event) => {
    setSortBy(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    setIsSearchClicked(true);
    filterQuestions();
  };

  const handleActionMenuClick = (questionId) => {
    const question = questions.find((q) => q.id === questionId);
    setSelectedQuestion(question);
    setAnswerText("");

    if (question.status === "Belum Terjawab") {
      setIsAnswering(true);
    } else {
      setIsAnswering(false);
    }
  };

  const handleAnswerChange = (event) => {
    setAnswerText(event.target.value);
  };

  const handleAnswerSubmit = () => {
    // Update the question status to "Terjawab" and update the answer
    const updatedQuestions = questions.map((question) => {
      if (question.id === selectedQuestion.id) {
        return {
          ...question,
          status: "Terjawab",
          jawaban: answerText,
        };
      }
      return question;
    });

    // Update the filtered questions as well
    const updatedFilteredQuestions = filteredQuestions.map((question) => {
      if (question.id === selectedQuestion.id) {
        return {
          ...question,
          status: "Terjawab",
          jawaban: answerText,
        };
      }
      return question;
    });

    setQuestions(updatedQuestions);
    setFilteredQuestions(updatedFilteredQuestions);
    setSelectedQuestion(null);
    setAnswerText("");
    setIsAnswering(false);
  };

  const handleCancelAnswer = () => {
    setIsAnswering(false);
  };

  const filterQuestions = () => {
    let filteredResults = [...questions];

    // Filter by answered
    if (filterByAnswered !== "semua") {
      filteredResults = filteredResults.filter((question) => (filterByAnswered === "terjawab" && question.status === "Terjawab") || (filterByAnswered === "belum terjawab" && question.status === "Belum Terjawab"));
    }

    // Filter by search term
    if (isSearchClicked && searchTerm !== "") {
      filteredResults = filteredResults.filter((question) => question.pertanyaan.toLowerCase().includes(searchTerm.toLowerCase()));
    }

    // Sort by date
    if (sortBy === "terbaru") {
      filteredResults.sort((a, b) => new Date(b.tanggal) - new Date(a.tanggal));
    } else if (sortBy === "terlama") {
      filteredResults.sort((a, b) => new Date(a.tanggal) - new Date(b.tanggal));
    }

    setFilteredQuestions(filteredResults);
  };

  return (
    <div>
      <div style={{ margin: "auto" }}>
        <h1 style={{ marginTop: "40px", marginBottom: "20px" }}>
          <span style={{ color: "gray", fontSize: "20px" }}>Beranda </span>
          <span style={{ color: "#07294A", fontSize: "20px" }}>Tanya Ahli (Privat)</span>
        </h1>
      </div>
      <table className="table" style={{ backgroundColor: "#ffffff", marginBottom: "10px", margin: "auto", width: "1000px", height: "50px", borderRadius: "10px", padding: "20px auto" }}>
        {/* Table Head */}
        <thead>
          <tr>
            <td colSpan="4">
              <div className="tanya-ahli-container" style={{ marginLeft: "40px", display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px", marginTop: "10px" }}>
                <div>
                  <h2 style={{ color: "#07294A", fontWeight: "bold", fontSize: "25px" }}>Tanya Ahli</h2>
                  <span style={{ fontSize: "12px", color: "#6C757E" }}>Lorem ipsum dolor sit amet</span>
                </div>

                <div className="search-input-container" style={{ position: "relative", marginLeft: "260px" }}>
                  {searchTerm === "" && (
                    <span className="search-icon" style={{ position: "absolute", top: "50%", left: "17px", transform: "translateY(-50%)", width: "15px", height: "15px" }}>
                      <img src={searchImg} alt="Search" />
                    </span>
                  )}
                  <input
                    type="text"
                    className="search-input"
                    placeholder="Cari pertanyaan"
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                    style={{
                      backgroundColor: "#e9e7e7",
                      height: "40px",
                      width: "210px",
                      paddingLeft: "20px",
                      borderRadius: "10px",
                    }}
                  />
                  <style>
                    {`
                      .search-input::placeholder {
                        color: #6C757E;
                        padding-left: 30px;
                      }
                    `}
                  </style>
                  <button type="submit" className="search-button" onClick={handleSearchSubmit} style={{ position: "absolute", top: "50%", left: "180px", transform: "translateY(-50%)", width: "15px", height: "15px" }}>
                    <img src={rightImg} alt="Cari" />
                  </button>
                </div>

                <div style={{ marginLeft: "15px" }}>
                  <label htmlFor="sortBy" style={{ fontSize: "10px", color: "#BDC5CC", marginLeft: "14px" }}>
                    Urut berdasar
                  </label>
                  <div></div>
                  <select id="sortBy" className="dropdown-select" value={sortBy} onChange={handleSortByChange} style={{ width: "100px", color: "#6C757E", fontWeight: "bold" }}>
                    <option value="semua">Semua</option>
                    <option value="terbaru">Terbaru</option>
                    <option value="terlama">Terlama</option>
                  </select>
                </div>

                <div style={{ marginLeft: "20px" }}>
                  <label htmlFor="filterByAnswered" style={{ fontSize: "10px", color: "#BDC5CC", marginLeft: "4px" }}>
                    Kategori
                  </label>
                  <div></div>
                  <select id="filterByAnswered" className="dropdown-select2" value={filterByAnswered} onChange={handleFilterByAnsweredChange} style={{ width: "140px", color: "#6C757E", fontWeight: "bold", marginLeft: "10px" }}>
                    <option value="semua">Semua</option>
                    <option value="terjawab">Terjawab</option>
                    <option value="belum terjawab">Belum Terjawab</option>
                  </select>
                </div>
              </div>
            </td>
          </tr>
          <tr style={{ background: "#E6EEF5", height: "50px", color: "#6C757E" }}>
            <td className="th1" style={{ paddingLeft: "41px" }}>
              Akun
            </td>
            <td className="th2" style={{ paddingLeft: "130px" }}>
              Pertanyaan
            </td>
            <td className="th3" style={{ paddingLeft: "347px" }}>
              Status
            </td>
            <td className="th4" style={{ paddingRight: "25px" }}>
              Aksi
            </td>
          </tr>
        </thead>
        <tbody>
          {filteredQuestions.map((question) => (
            <tr key={question.id} className="question-row" style={{ borderBottom: "1px solid #D1D5DB", margin: "auto" }}>
              <td>
                <div className="profile-container" style={{ display: "flex", alignItems: "center" }}>
                  <img src={profileImg} alt="Profil" className="profile-image" style={{ marginTop: "20px", marginLeft: "40px", marginBottom: "20px", height: "40px" }} />
                  <span style={{ marginTop: "-29px", marginLeft: "10px", fontSize: "14px" }}>{`${question.akun}`}</span>
                  <span
                    className={`status ${question.role === "ibu" ? "ibu" : "ayah"}`}
                    style={{ background: "#60A31C", width: "60px", height: "25px", borderRadius: "20px", color: "white", position: "absolute", marginLeft: "90px", marginTop: "18px", fontSize: "13px", textAlign: "center" }}
                  >
                    {question.role === "ibu" ? "Ibu" : "Ayah"}
                  </span>
                  <img src={timeImg} alt="Time" style={{ position: "absolute", marginLeft: "175px", marginRight: "5px", height: "8px" }} />
                  <span style={{ fontSize: "10px", position: "absolute", marginLeft: "186px", marginRight: "5px" }}>{`${question.tanggal}`}</span>
                  <span style={{ fontSize: "10px", position: "absolute", marginLeft: "245px", marginRight: "5px" }}>{`${question.waktu}`}</span>
                </div>
              </td>
              <td>
                <span style={{ position: "absolute", marginTop: "-11px", marginLeft: "130px", fontSize: "13.5px" }}>{question.pertanyaan}</span>
              </td>
              <td>
                <span
                  style={{
                    backgroundColor: question.status === "Terjawab" ? "#FFC001" : "#1CA345",
                    color: "#000000",
                    position: "absolute",
                    marginLeft: "310px",
                    fontSize: "13.5px",
                    width: "120px",
                    height: "30px",
                    borderRadius: "20px",
                    textAlign: "center",
                    paddingTop: "3px",
                    marginTop: "-15px",
                  }}
                >
                  {question.status}
                </span>
              </td>
              <td>
                {question.status === "Terjawab" ? (
                  <div className="action-container" style={{ position: "relative" }}>
                    <button type="button" onClick={() => handleActionMenuClick(question.id)}>
                      <img src={moreImg} alt="Aksi" className="button" style={{ marginTop: "2px" }} />
                    </button>
                    {selectedQuestion && selectedQuestion.id === question.id && (
                      <div
                        className="dropdown-content"
                        style={{
                          minWidth: "160px",
                          boxShadow: "0px 8px 16px 0px rgba(0, 0, 0, 0.2)",
                          zIndex: 1,
                          position: "absolute",
                          backgroundColor: "#f9f9f9",
                          display: "none",
                          padding: "8px",
                          top: "100%",
                          left: "50%",
                          transform: "translateX(-50%)",
                        }}
                      >
                        <button onClick={() => handleEditAnswerClick(question.id)}>Edit Jawaban</button>
                      </div>
                    )}
                    <style>
                      {`
                        .action-container:hover .dropdown-content {
                          display: block;
                        }
                      `}
                    </style>
                  </div>
                ) : (
                  <button type="button" onClick={() => handleActionMenuClick(question.id)}>
                    <img src={moreImg} alt="Aksi" className="button" />
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedQuestion && isAnswering && (
        <div className="modal" style={{ display: "flex", alignItems: "center", justifyContent: "center", position: "fixed", top: "0", left: "0", width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
          <div className="modal-content" style={{ backgroundColor: "white", width: "400px", padding: "20px", borderRadius: "4px", position: "relative", transform: "translate(-50%, -50%)", top: "50%", left: "50%" }}>
            <div className="question-header">
              <div className="profile-container">
                <img src={profileImg} alt="Profil" className="profile-image" />
                <div className="profile-info">
                  <span className={`status ${selectedQuestion.role === "ibu" ? "ibu" : "ayah"}`}>{selectedQuestion.role === "ibu" ? "Ibu" : "Ayah"}</span>
                  <span className="question-akun">{selectedQuestion.akun}</span>
                </div>
              </div>
              <div className="question-timestamp">
                <img src={timeImg} alt="Time" className="timestamp-icon" />
                <span className="question-date">{selectedQuestion.tanggal}</span>
                <span className="question-time">{selectedQuestion.waktu}</span>
              </div>
            </div>
            <h3>Pertanyaan</h3>
            <div className="question-container" style={{ marginBottom: "20px" }}>
              <p className="question" style={{ fontSize: "16px", fontWeight: "bold", marginBottom: "10px" }}>
                {selectedQuestion.pertanyaan}
              </p>
              <span>{selectedQuestion.deskripsi}</span>
            </div>
            <form onSubmit={handleAnswerSubmit}>
              <div className="form-group">
                <textarea id="answer" name="answer" value={answerText} onChange={handleAnswerChange} className="form-control" rows="5" placeholder="Ketikkan jawaban..."></textarea>
              </div>
              <button type="submit" className="submit-button">
                Kirim
              </button>
              <button onClick={handleCancelAnswer} className="back-button">
                Kembali
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default TanyaAhli;
