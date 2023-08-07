import React from "react";
import PropTypes from "prop-types";

const ArtikelDetail = ({ artikel, onBackToList }) => {
  // ... konten komponen ArtikelDetail ...

  // Fungsi untuk kembali ke daftar artikel saat tombol diklik
  const handleBackClick = () => {
    onBackToList();
  };

  return (
    <div>
      {/* ... konten detail artikel ... */}
      <p>hallo ini detail artikel</p>
      <div className="flex justify-center mt-4">
        <button className="btn btn-primary" onClick={handleBackClick}>
          Kembali ke Daftar Artikel
        </button>
      </div>
    </div>
  );
};

ArtikelDetail.propTypes = {
  artikel: PropTypes.shape({
    thumbnail: PropTypes.string.isRequired,
    judul: PropTypes.string.isRequired,
    Kategori: PropTypes.string.isRequired,
    age_id: PropTypes.string.isRequired,
    tanggal: PropTypes.string.isRequired,
    kontent: PropTypes.string.isRequired,
  }).isRequired,
  onBackToList: PropTypes.func.isRequired,
};

export default ArtikelDetail;
