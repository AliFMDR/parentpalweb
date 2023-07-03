import tumbimg1 from "../images/thumbartikel1.png";
import tumbimg2 from "../images/thumbartikel2.png";
import tumbimg3 from "../images/thumb3.png";
import promoimg from "../images/promosi.png";
import artikelimg1 from "../images/4_robert-collins-tvc5imO5pXk-unsplash.jpg";
import artikelimg2 from "../images/5_joice-kelly-38MGlMtsZyc-unsplash.jpg";
import { Link } from "react-router-dom";
import { BiSearchAlt2 } from "react-icons/bi";
import { useEffect } from "react";
import AOS from "aos";

const Artikelcontentlogin = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="bg-white ">
        <div className="w-2/4 py-2 mx-auto mt-10 pl-4 pr-10 rounded-full shadow-xl bg-white border border-gray-300 hover:border-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:shadow-md flex gap-5 items-center">
          <BiSearchAlt2 />
          <input type="text" placeholder="Cari Artikel..." className="w-96" />
        </div>
      </div>
      <div className="flex justify-center items-center h-20 bg-white">
        <div className="w-5/6 border-t-2 border-gray-300 border-b-2"></div>
      </div>
      <h1 className=" ml-32 font-semibold text-4xl mb-5 text-[#07294A]">Artikel Hari ini</h1>

      <div className="flex gap-4 mb-10">
        <div className="w-3/4 bg-white rounded-lg ml-32 ">
          <div className="w-full h-96 carousel rounded-box shadow-lg">
            <div className="carousel-item w-full relative ">
              <img src={tumbimg1} className="w-full" alt="Tailwind CSS Carousel component" />
              <div className="absolute  top-0 left-0 w-2/4 h-full flex flex-col justify-start items-start text-white p-4 bg-gray-400 bg-opacity-50 ">
                <h2 className="text-3xl font-semibold mb-2">Mengenali Tanda-tanda Kecanduan Gadget pada Anak</h2>
                <p className="text-lg">{`Gadget telah menjadi bagian tak terpisahkan dari kehidupan sehari-hari, termasuk anak-anak. Ketahui tanda-tanda kecanduan gadget pada anak dan bagaimana mengatasinya...`}</p>
                <Link to={"/detailartikel"} className=" mt-10 px-6 py-2 rounded-full bg-white text-black shadow-lg hover:shadow-xl hover:bg-sky-500">
                  Baca Sekarang
                </Link>
              </div>
            </div>
            <div className="carousel-item w-full relative">
              <img src={artikelimg1} className="w-full" alt="Tailwind CSS Carousel component" />
              <div className="absolute  top-0 left-0 w-2/4 h-full flex flex-col justify-start items-start text-white p-4 bg-gray-400 bg-opacity-50 ">
                <h2 className="text-3xl font-semibold mb-2">10 Skill Dasar Anak yang Harus Dilatih Sejak Dini</h2>
                <p className="text-lg">{`Ada juga berbagai skill lainnya seperti life skill atau social skill yang tidak kalah pentingnya untuk diajarkan kepada anak sejak dini.`}</p>
                <Link to={"/detailartikel"} className=" mt-10 px-6 py-2 rounded-full bg-white text-black shadow-lg hover:shadow-xl hover:bg-sky-500">
                  Baca Sekarang
                </Link>
              </div>
            </div>
            <div className="carousel-item w-full relative">
              <img src={artikelimg2} className="w-full" alt="Tailwind CSS Carousel component" />
              <div className="absolute  top-0 left-0 w-2/4 h-full flex flex-col justify-start items-start text-white p-4 bg-gray-400 bg-opacity-50 ">
                <h2 className="text-3xl font-semibold mb-2">5 Fakta Unik Tentang Bunda yang Menakjubkan</h2>
                <p className="text-lg">{`Gadget telah menjadi bagian tak terpisahkan dari kehidupan sehari-hari, termasuk anak-anak. Ketahui tanda-tanda kecanduan gadget pada anak dan bagaimana mengatasinya...`}</p>
                <Link to={"/detailartikel"} className=" mt-10 px-6 py-2 rounded-full bg-white text-black shadow-lg hover:shadow-xl hover:bg-sky-500">
                  Baca Sekarang
                </Link>
              </div>
            </div>
            <div className="carousel-item w-full relative">
              <img src={tumbimg1} className="w-full" alt="Tailwind CSS Carousel component" />
              <div className="absolute  top-0 left-0 w-2/4 h-full flex flex-col justify-start items-start text-white p-4 bg-gray-400 bg-opacity-50 ">
                <h2 className="text-3xl font-semibold mb-2">Mengenali Tanda-tanda Kecanduan Gadget pada Anak</h2>
                <p className="text-lg">{`Gadget telah menjadi bagian tak terpisahkan dari kehidupan sehari-hari, termasuk anak-anak. Ketahui tanda-tanda kecanduan gadget pada anak dan bagaimana mengatasinya...`}</p>
                <Link to={"/detailartikel"} className=" mt-10 px-6 py-2 rounded-full bg-white text-black shadow-lg hover:shadow-xl hover:bg-sky-500">
                  Baca Sekarang
                </Link>
              </div>
            </div>
            <div className="carousel-item w-full relative">
              <img src={tumbimg2} className="w-full" alt="Tailwind CSS Carousel component" />
              <div className="absolute  top-0 left-0 w-2/4 h-full flex flex-col justify-start items-start text-white p-4 bg-gray-400 bg-opacity-50 ">
                <h2 className="text-3xl font-semibold mb-2">Mengenali Tanda-tanda Kecanduan Gadget pada Anak</h2>
                <p className="text-lg">{`Gadget telah menjadi bagian tak terpisahkan dari kehidupan sehari-hari, termasuk anak-anak. Ketahui tanda-tanda kecanduan gadget pada anak dan bagaimana mengatasinya...`}</p>
                <Link to={"/detailartikel"} className=" mt-10 px-6 py-2 rounded-full bg-white text-black shadow-lg hover:shadow-xl hover:bg-sky-500">
                  Baca Sekarang
                </Link>
              </div>
            </div>
            <div className="carousel-item w-full relative">
              <img src={tumbimg3} className="w-full" alt="Tailwind CSS Carousel component" />
              <div className="absolute  top-0 left-0 w-2/4 h-full flex flex-col justify-start items-start text-white p-4 bg-gray-400 bg-opacity-50 ">
                <h2 className="text-3xl font-semibold mb-2">Mengenali Tanda-tanda Kecanduan Gadget pada Anak</h2>
                <p className="text-lg">{`Gadget telah menjadi bagian tak terpisahkan dari kehidupan sehari-hari, termasuk anak-anak. Ketahui tanda-tanda kecanduan gadget pada anak dan bagaimana mengatasinya...`}</p>
                <Link to={"/detailartikel"} className=" mt-10 px-6 py-2 rounded-full bg-white text-black shadow-lg hover:shadow-xl hover:bg-sky-500">
                  Baca Sekarang
                </Link>
              </div>
            </div>
            <div className="carousel-item w-full relative">
              <img src={tumbimg1} className="w-full" alt="Tailwind CSS Carousel component" />
              <div className="absolute  top-0 left-0 w-2/4 h-full flex flex-col justify-start items-start text-white p-4 bg-gray-400 bg-opacity-50 ">
                <h2 className="text-3xl font-semibold mb-2">Mengenali Tanda-tanda Kecanduan Gadget pada Anak</h2>
                <p className="text-lg">{`Gadget telah menjadi bagian tak terpisahkan dari kehidupan sehari-hari, termasuk anak-anak. Ketahui tanda-tanda kecanduan gadget pada anak dan bagaimana mengatasinya...`}</p>
                <Link to={"/detailartikel"} className=" mt-10 px-6 py-2 rounded-full bg-white text-black shadow-lg hover:shadow-xl hover:bg-sky-500">
                  Baca Sekarang
                </Link>
              </div>
            </div>
          </div>
          <div className=" mt-10 mb-5">
            <h1 className="font-semibold text-4xl mb-3 text-[#07294A]">Topik Yang Mungkin Cocok</h1>
          </div>
          <button className=" btn-active px-6 py-1 mb-10 mr-2 border border-gray-400 text-gray-400 rounded-full  bg-white hover:text-white hover:bg-[#07294A]">Semua</button>
          <button className=" btn-active px-6 py-1 mb-10 mr-2 border border-gray-400 text-gray-400 rounded-full  bg-white hover:text-white hover:bg-[#07294A]">Karakter</button>
          <button className=" btn-active px-6 py-1 mb-10 mr-2 border border-gray-400 text-gray-400 rounded-full  bg-white hover:text-white hover:bg-[#07294A]">Emosional</button>
          <button className=" btn-active px-6 py-1 mb-10 border border-gray-400 text-gray-400 rounded-full  bg-white hover:text-white hover:bg-[#07294A]">Pendidikan</button>
          <div className="grid grid-cols-2 gap-6 bg-white">
            <div className="card w-96 bg-base-100 shadow-xl  hover:border-blue-900 object-cover h-full ">
              <figure>
                <img src={tumbimg1} alt="" className="object-cover h-full w-full" />
              </figure>
              <div className="card-body ">
                <h2 className="card-title">Tips Mendidik Anak untuk Percaya Diri</h2>
                <p>Apa sifat dan karakter penting yang harus dimiliki oleh seorang anak untuk mengembangkan dirinya? </p>
                <div className="card-actions justify-end">
                  <a href="#" className="flex items-center font-medium text-sky-700 hover:text-blue-800 ">
                    Learn More..
                  </a>
                </div>
              </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl object-cover h-full ">
              <figure>
                <img src={tumbimg2} alt="" className="object-cover h-full w-full" />
              </figure>
              <div className="card-body">
                <h2 className="card-title"> Tips Memilih Sekolah Terbaik untuk Anak</h2>
                <p>Sebagai orang tua pastinya Anda menginginkan yang terbaik untuk anak, terlebih dalam hal pendidikan. Untuk mewujudkannya</p>
                <div className="card-actions justify-end">
                  <a href="#" className="flex items-center font-medium text-sky-700 hover:text-blue-800 ">
                    Learn More..
                  </a>
                </div>
              </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl object-cover h-full ">
              <figure>
                <img src={tumbimg3} alt="" className="object-cover h-full w-full" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Tips Mendidik Anak untuk Percaya Diri</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <a href="#" className="flex items-center font-medium text-sky-700 hover:text-blue-800 ">
                    Learn More..
                  </a>
                </div>
              </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl object-cover h-full ">
              <figure>
                <img src={tumbimg1} alt="" className="object-cover h-full w-full" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Tips Mendidik Anak untuk Percaya Diri</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <a href="#" className="flex items-center font-medium text-sky-700 hover:text-blue-800 ">
                    Learn More..
                  </a>
                </div>
              </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl object-cover h-full ">
              <figure>
                <img src={tumbimg1} alt="" className="object-cover h-full w-full" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Tips Mendidik Anak untuk Percaya Diri</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <a href="#" className="flex items-center font-medium text-sky-700 hover:text-blue-800 ">
                    Learn More..
                  </a>
                </div>
              </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl object-cover h-full ">
              <figure>
                <img src={tumbimg3} alt="" className="object-cover h-full w-full" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Tips Mendidik Anak untuk Percaya Diri</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <a href="#" className="flex items-center font-medium text-sky-700 hover:text-blue-800 ">
                    Learn More..
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="divider divider-horizontal "></div>

        <div className="w-1/3 bg-white  mr-32 ">
          <img src={promoimg} alt="gambar promosi" className="h-50 mb-5" />
          <div className="card w-96 bg-base-100 shadow-xl object-cover h-auto ">
            <figure>
              <img src={tumbimg3} alt="" className="object-cover h-full w-full" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Tips Mendidik Anak untuk Percaya Diri</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <progress className="progress progress-info w-56" value="70" max="100"></progress>

              <button className=" flex justify-center bg-[#5AA0F9] text-white hover:bg-blue-800  w-full mt-5 rounded-full shadow-xl py-1 px-16 ">Lanjutkan Membaca</button>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl  hover:border-blue-900 object-cover h-auto mt-5 ">
            <figure>
              <img src={tumbimg1} alt="" className="object-cover h-full w-full" />
            </figure>
            <div className="card-body ">
              <h2 className="card-title">Tips Mendidik Anak untuk Percaya Diri</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <progress className="progress progress-info w-56" value="30" max="100"></progress>

              <button className=" flex justify-center bg-[#5AA0F9] text-white hover:bg-blue-800  w-full mt-5 rounded-full shadow-xl py-1 px-16 ">Lanjutkan Membaca</button>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl  hover:border-blue-900 object-cover h-auto mt-5 ">
            <figure>
              <img src={tumbimg2} alt="" className="object-cover h-full w-full" />
            </figure>
            <div className="card-body ">
              <h2 className="card-title">Tips Mendidik Anak untuk Percaya Diri</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <progress className="progress progress-info w-56 " value="50" max="100"></progress>

              <button className=" flex justify-center bg-[#5AA0F9] text-white hover:bg-blue-800  w-full mt-5 rounded-full shadow-xl py-1 px-16 ">Lanjutkan Membaca</button>
            </div>
          </div>
          <div className=" mt-10 mb-5">
            <h1 className="font-semibold text-4xl mb-3 text-[#07294A]">Topik Yang Mungkin Bersangkutan</h1>
          </div>
          <button className=" btn-active px-6 py-1 mb-2 mr-2 border border-gray-400 text-gray-400 rounded-full  bg-white hover:text-white hover:bg-[#07294A]">Habbit</button>
          <button className=" btn-active px-6 py-1 mb-2 mr-2 border border-gray-400 text-gray-400 rounded-full  bg-white hover:text-white hover:bg-[#07294A]">Karakter</button>
          <button className=" btn-active px-6 py-1 mb-2 mr-2 border border-gray-400 text-gray-400 rounded-full  bg-white hover:text-white hover:bg-[#07294A]">Emosional</button>
          <button className=" btn-active px-6 py-2 mb-2 mr-2 border border-gray-400 text-gray-400 rounded-full  bg-white hover:text-white hover:bg-[#07294A]">Pendidikan</button>
          <button className=" btn-active px-6 py-2 mb-2 mr-2 border border-gray-400 text-gray-400 rounded-full  bg-white hover:text-white hover:bg-[#07294A]">Chilhood</button>
          <button className=" btn-active px-6 py-2 mb-2 mr-2 border border-gray-400 text-gray-400 rounded-full  bg-white hover:text-white hover:bg-[#07294A]">School</button>
        </div>
      </div>
    </>
  );
};

export default Artikelcontentlogin;
