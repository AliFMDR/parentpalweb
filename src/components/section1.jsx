import heroimg from "../images/heroilustration.png";
import AOS from "aos";
import { useEffect } from "react";
const Section1 = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section className="grid grid-cols-2 gap-8  bg-[#E6EEF5]" data-aos="fade-up">
        <div>
          <h1 className="text-7xl mt-36 ml-16 font-medium">
            Menyediakan <span className=" text-sky-500">Sarana</span> Terbaik untuk Para <span className=" text-blue-700">Orangtua</span>
          </h1>
          <p className="ml-16 mt-10 font-normal text-2xl">
            Peran sebagai orangtua tidaklah mudah. Oleh karena itu, aplikasi ParentPal hadir untuk memudahkan perjalanan Orangtua. Dengan fitur-fitur interaktif dan konten yang bermanfaat, ParentPal akan membantu Anda menghadapi tantangan
            sehari-hari dalam mendidik dan merawat buah hati Anda. Dapatkan saran dari Psikologi ahli, temukan aktivitas seru untuk keluarga, dan jalin koneksi dengan komunitas orangtua lainnya.
          </p>
        </div>
        <div>
          <img src={heroimg} alt="Ilustrasi " />
        </div>
      </section>
      <div className="flex justify-center bg-[#E6EEF5] py-6 w-f ">
        <button className=" flex justify-center bg-[#5AA0F9] text-white hover:bg-blue-800  mr-8 rounded-xl shadow-xl py-4 px-16 ">Pelajari Selengkapnya</button>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#E6EEF5" fillOpacity="1" d="M0,256L80,218.7C160,181,320,107,480,90.7C640,75,800,117,960,128C1120,139,1280,117,1360,106.7L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
      </svg>
    </>
  );
};

export default Section1;
