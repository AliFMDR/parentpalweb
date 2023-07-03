import tumbimg1 from "../images/thumbartikel1.png";
import tumbimg2 from "../images/thumbartikel2.png";
import tumbimg3 from "../images/thumb3.png";
import ilustrasiimg from "../images/ilustrasibulat.png";
import ilustrasipromosi from "..//images/ilustrasipromote.png";
import { useState, useEffect } from "react";
import "animate.css/animate.min.css";
import AOS from "aos";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Lastsection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="grid grid-collapse-content  bg-white">
      <div className="mb-5">
        <h4 className="text-xl mt-20 ml-16  font-bold">Baca Artikel Baru</h4>
        <div className="flex justify-between">
          <p className="ml-16  mb-0 font-normal text-lg">Buat diri anda tetap terinformasi dengan membaca artikel-artikel baru. </p>
          <a href="#" className="flex items-center font-medium text-sky-700 hover:text-blue-800 mr-16">
            Lihat Semua
          </a>
        </div>
      </div>
      <div className="flex justify-evenly mb-20">
        <AnimationOnScroll animateIn="animate__fadeInDown" className="card w-80 bg-base-100 shadow-xl  ">
          <figure>
            <img src={tumbimg1} alt="" className="object-cover h-full" />
          </figure>
          <div className="card-body">
            <h2 className="card-title ">Menumbuhkan Rasa Percaya Diri pada Anak, Tips yang Bisa Anda Coba</h2>

            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <a href="#" className="flex items-center font-medium text-sky-700 hover:text-blue-800 ">
                Learn More..
              </a>
            </div>
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInUp" className="card w-80 bg-base-100 shadow-xl">
          <figure>
            <img src={tumbimg2} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Manfaat Bermain Sambil Belajar untuk Anak Usia Dini</h2>
            <p>Pendidikan anak sejak dini itu sangat penting, bukan? </p>
            <div className="card-actions justify-end">
              <a href="#" className="flex items-center font-medium text-sky-700 hover:text-blue-800 ">
                Learn More..
              </a>
            </div>
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInDown" className="card w-80 bg-base-100 shadow-xl">
          <figure>
            <img src={tumbimg3} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Pahami Digital Parenting, Mari Jadi Orang Tua Cerdas!</h2>
            <p>Kira-kira bagaimana ya cara asuh yang benar agar anak dapat menggunakan penggunaan teknologi digital secara benar?</p>
            <div className="card-actions justify-end">
              <a href="#" className="flex items-center font-medium text-sky-700 hover:text-blue-800 ">
                Learn More..
              </a>
            </div>
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInUp" className="card w-80 bg-base-100 shadow-xl">
          <figure>
            <img src={tumbimg3} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">5 Cara Pilih Lomba yang Positif untuk Anak</h2>
            <p>Jika saat ini Anda masih bingung lomba apa yang cocok untuk anak-anak, berikut 5 cara pilih lomba yang harus Anda tahu!</p>
            <div className="card-actions justify-end">
              <a href="#" className="flex items-center font-medium text-sky-700 hover:text-blue-800 ">
                Learn More..
              </a>
            </div>
          </div>
        </AnimationOnScroll>
      </div>

      <div className="bg-gray-200500 mt-10">
        <div className="flex  justify-evenly bg-gray-100">
          <AnimationOnScroll animateIn="animate__fadeInLeft" className="flex flex-col items-center text-center bg-gray-100 w-60 rounded-md  mb-5 mt-5">
            <div className="w-40 text-center">
              <img src={ilustrasiimg} alt="Gambar" />
            </div>
            <h1 className="text-2xl font-bold mt-4 text-[#07294A]">Tanya Ahli</h1>
            <p className="text-lg mt-3 text-[#07294A]">Dapatkan Ahli psikologi yang telah terverifikasi dan memiliki pengalaman luas dalam mendukung keluarga.</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-800 text-white rounded-lg mb-5">Pelajari Selengkapnya</button>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__flipInX" className="flex flex-col items-center text-center bg-gray-100 w-60 rounded-md  mb-5 mt-5">
            <div className="w-40 text-center">
              <img src={ilustrasiimg} alt="Gambar" />
            </div>
            <h1 className="text-2xl font-bold mt-4 text-[#07294A]">Komunitas</h1>
            <p className="text-lg mt-3 text-[#07294A]">Dapatkan Ahli psikologi yang telah terverifikasi dan memiliki pengalaman luas dalam mendukung keluarga.</p>
            <div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white mt-4 py-2 px-4 rounded-lg" onClick={handleButtonClick}>
                Gabung Komunitas
              </button>
              <button className="bg-gray-200500 hover:bg-blue-800 text-gray-100  py-2 px-4 mt-4 rounded-lg" onClick={handleButtonClick}>
                Gabung Komunitas
              </button>
              {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                  <div className="bg-white p-4 rounded">
                    <h2 className="text-xl font-bold mb-4 w-60">Pilih Komunitas</h2>
                    <ul className="space-y-2">
                      <li>
                        <a href="https://chat.whatsapp.com/CtUzwxOL7Ev5cmnLlNP4gP" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 hover:font-bold">
                          Toddler
                        </a>
                      </li>
                      <li>
                        <a href="https://chat.whatsapp.com/It0UzcxOCtGBfDReSL8jN6" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 hover:font-bold">
                          Pregnant
                        </a>
                      </li>
                      <li>
                        <a href="https://chat.whatsapp.com/Bqo4ZiUkopJIdBGUYcmH39" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 hover:font-bold">
                          Special Kids
                        </a>
                      </li>
                      <li>
                        <a href="https://chat.whatsapp.com/LrZ8r5r68HZB2Azx6HyBgK" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 hover:font-bold">
                          Single Parents
                        </a>
                      </li>
                      <li>
                        <a href="https://chat.whatsapp.com/KprQZgDxzio48il6yWqqe8" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 hover:font-bold">
                          Kids
                        </a>
                      </li>
                      <li>
                        <a href="https://chat.whatsapp.com/FHAAVKqNGhBLMeSC9BzkU5" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 hover:font-bold">
                          Working Moms
                        </a>
                      </li>
                    </ul>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" onClick={closeModal}>
                      Tutup
                    </button>
                  </div>
                </div>
              )}
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInRight" className="flex flex-col items-center text-center bg-gray-100 w-60 rounded-md  mb-5 mt-5" data-aos="fade-up">
            <div className="w-40 text-center">
              <img src={ilustrasiimg} alt="Gambar" />
            </div>
            <h1 className="text-2xl font-bold mt-4 text-[#07294A]">Edukasi</h1>
            <p className="text-lg mt-3 text-[#07294A]">Dapatkan Ahli psikologi yang telah terverifikasi dan memiliki pengalaman luas dalam mendukung keluarga.</p>

            <button className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-800 text-white rounded-lg mb-5">Pelajari Selengkapnya</button>
          </AnimationOnScroll>
        </div>

        <div className="flex justify-center items-center h-screen">
          <div className="text-center ml-9">
            <img src={ilustrasipromosi} alt="Gambar" className="w-screen" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lastsection;
