import heroimg from "../images/heroilustration.png";
import promoimg from "../images/fitur11.png";
import edukaimg from "../images/ilustrasieduka.png";
import ahliimg from "../images/ilustrasiahlipal.png";
import binaimg from "../images/ilustrasibinapal.png";
import faseimg from "../images/ilustrasifasepal.png";
import promosiapp from "../images/appromote1.png";
import logopal from "../images/logo1.png";
import footerimg from "../images/footerlogo.png";
const Promosi = () => {
  return (
    <>
      <section className="grid grid-cols-2 gap-8  bg-[#E6EEF5]">
        <div>
          <h1 className="text-7xl mt-36 ml-16 font-medium">
            Ingin Tahu Apa Aja <span className=" text-sky-500">Fitur</span> <span className=" text-blue-700">ParentPal</span>?
          </h1>
          <div className="ml-16 mt-10 font-normal text-2xl">
            <p>
              <span className="text-blue-700 font-bold">Aplikasi ParentPal</span> hadir untuk memudahkan perjalanan Orangtua. Dengan <span className="text-blue-500">fitur-fitur interaktif</span> dan{" "}
              <span className="text-blue-500">konten</span> yang <span className="text-blue-500">bermanfaat</span>, ParentPal akan membantu Anda menghadapi tantangan sehari-hari dalam mendidik dan merawat buah hati Anda. Dapatkan saran dari
              para <span className="text-blue-700 font-bold">ahli</span>, temukan aktivitas seru untuk keluarga, dan jalin koneksi dengan <span className="text-blue-700 font-bold">komunitas orangtua</span> lainnya.
            </p>
          </div>
        </div>
        <div>
          <img src={heroimg} alt="Ilustrasi " />
        </div>
      </section>
      <div className="flex justify-center bg-[#E6EEF5] py-6">
        <img src={promoimg} alt="" className="shadow-xl mt-5 " style={{ width: "40%", height: "auto" }} />
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#E6EEF5" fillOpacity="1" d="M0,256L80,218.7C160,181,320,107,480,90.7C640,75,800,117,960,128C1120,139,1280,117,1360,106.7L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
      </svg>
      <div className=" py-10">
        <div className="w-10/12 rounded-xl shadow-lg  p-4 justify-center items-center ml-36 bg-gradient-to-r from-white to-blue-200">
          <div className="flex">
            <div className="w-1/2">
              {/* Kolom Kiri */}
              <img src={edukaimg} alt="Ilustrasi" />
            </div>
            <div className="w-1/2">
              {/* Kolom Kanan */}
              <div className="p-4 bg-white mt-40 rounded-xl shadow-xl mr-6 ml-10 ">
                <h2 className="text-2xl font-bold ml-3 mt-5">
                  Eduka<span className=" text-blue-700">Pal</span>
                </h2>
                <p className="mt-5 text-lg mb-5 ml-3 mr-3 font-normal">Parents dapat mengakses artikel dan video mengenai parenting dengan topik-topik yang menyesuaikan dengan fase pertumbuhan Anak</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-10/12 rounded-xl shadow-lg  p-4 justify-center items-center ml-36 bg-gradient-to-l mt-16 from-white to-blue-200">
          <div className="flex">
            <div className="w-1/2">
              {/* Kolom Kiri */}
              <div className="p-4 bg-white    mt-40 rounded-xl shadow-xl mr-6 ml-10 ">
                <h2 className="text-2xl font-bold ml-3 mt-5">
                  Ahli<span className=" text-sky-500">Pal</span>
                </h2>
                <p className="mt-5 text-lg mb-5 ml-3 mr-3 font-normal">Tanyakan dan dapatkan bantuan langsung dari 20+ ahli psikolog dan dokter dalam fitur AhliPal untuk mengatasi permasalahan mengasuh anak dengan lebih baik.</p>
              </div>
            </div>
            <div className="w-1/2">
              {/* Kolom Kanan */}
              <img src={ahliimg} alt="Ilustrasi" />
            </div>
          </div>
        </div>
        <div className="w-10/12 rounded-xl shadow-lg  p-4 justify-center items-center ml-36  mt-16 bg-gradient-to-r from-white to-blue-200">
          <div className="flex">
            <div className="w-1/2">
              {/* Kolom Kiri */}
              <img src={binaimg} alt="Ilustrasi" />
            </div>
            <div className="w-1/2">
              {/* Kolom Kanan */}
              <div className="p-4 bg-white mt-40 rounded-xl shadow-xl mr-6 ml-10 ">
                <h2 className="text-2xl font-bold ml-3 mt-5">
                  Bina<span className=" text-blue-700">Pal</span>
                </h2>
                <p className="mt-5 text-lg mb-5 ml-3 mr-3 font-normal">Parents juga dapat mengikuti webinar bersama para Ahli untuk mendapatkan pengalaman bertanya secara live melalui zoom meeting.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-10/12 rounded-xl shadow-lg  p-4 justify-center items-center ml-36 mb-16 mt-16 bg-gradient-to-l from-white to-blue-200">
          <div className="flex">
            <div className="w-1/2">
              {/* Kolom Kiri */}
              <div className="p-4 bg-white mt-40 rounded-xl shadow-xl mr-6 ml-10 ">
                <h2 className="text-2xl font-bold ml-3 mt-5">
                  Fase<span className=" text-sky-500">Pal</span>
                </h2>
                <p className="mt-5 text-lg mb-5 ml-3 mr-3 font-normal">Parents dapat memantau tumbuh dan kembangan Anak sesuai dengan fase. Fitur ini dapat mencegah terjadinya ketidaknormalan tumbuh kembang Anak.</p>
              </div>
            </div>
            <div className="w-1/2">
              {/* Kolom Kanan */}
              <img src={faseimg} alt="Ilustrasi" />
            </div>
          </div>
        </div>
        <div className="items-center justify-center w-10/12 flex ml-36">
          <img src={promosiapp} alt="" className="  " />
        </div>
        <div className="bg-[#0072C6] mt-10 w-10/12 ml-36">
          <div className=" bg-[#0072C6]">
            <div className="flex h-96">
              <div className="w-3/4">
                {/* Kolom Kiri */}
                <div className="  mt-32 ml-10 mr-16">
                  <p className="text-white font-semibold text-4xl">
                    Ayo bergabung menjadi relawan Ahli Bersama ParentPal untuk membangun para <span className=" text-sky-300">orangtua cerdas</span>
                  </p>
                </div>
              </div>
              <div className="w-1/2">
                {/* Kolom Kanan */}
                <img src={logopal} alt="Ilustrasi" className="ml-20 mt-10" />
                <button type="submit" className="bg-[#5AA0F9] mt-5 ml-10 text-white py-3 px-5 hover:bg-blue-800 rounded-md flex">
                  <img src={footerimg} alt="Daftar" className="h-5 w-5 mr-3 mt-1 text-white" />
                  Bergabung Sekarang!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Promosi;
