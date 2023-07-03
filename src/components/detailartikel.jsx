import tumbimg1 from "../images/Thumbartikel1.png";
import tumbimg2 from "../images/Thumbartikel2.png";
import tumbimg3 from "../images/Thumb3.png";
import promoimg from "../images/promosi.png";
import potofileimg from "../images/profil.png";
import Navbar from "./navbar";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

const Detailartikel = () => {
  return (
    <>
      <Navbar />
      <div>
        <div className=" w-1/2 mt-20 text-4xl font-semibold mb-5 ml-32">
          <h1>
            Menumbuhkan Rasa <span className=" text-blue-700">Percaya Diri</span> pada Anak, Tips yang Bisa Anda Coba
          </h1>
          <div className="text-base mt-5 ">
            <Link to="/edukasi" className="flex gap-3 items-center font-medium text-sky-700 hover:text-blue-800 mr-16">
              <IoMdArrowRoundBack />
              kembali
            </Link>
          </div>
        </div>
        <div className="flex gap-4 mt-2 mb-10">
          <div className="w-3/4 bg-white rounded-lg ml-32 ">
            <img src={tumbimg2} className="w-full rounded-lg shadow-md" alt="Tailwind CSS Carousel component" />
            <div className=" mt-5 flex ">
              <div className="avatar">
                <div className="w-12 rounded-full shadow-md ring-offset-base-100 ring-offset-2 mt-5">
                  <img src={potofileimg} />
                </div>
              </div>
              <p className="mt-8 ml-5 font-semibold">Di Posting oleh</p>
              <span className="mt-8 ml-3 text-blue-700">Eva Pratiwi</span>
              <p className="mt-8 ml-10 text-gray-400 font-normal">7 Menit total baca</p>
            </div>
            <div className=" mt-10">
              <p className="text-xl">
                Rasa percaya diri merupakan salah satu kunci penting dalam perkembangan anak. Ketika anak memiliki rasa percaya diri yang kuat, mereka cenderung lebih berani menghadapi tantangan, berinteraksi dengan orang lain, dan
                mengambil keputusan. Membantu anak membangun rasa percaya diri yang sehat adalah tugas penting bagi orangtua dan pengasuh. Berikut ini adalah beberapa tips yang bisa Anda coba untuk menumbuhkan rasa percaya diri pada anak:
                <ol className="list-decimal pl-6 mt-2 ">
                  <li className="text-xl">
                    Berikan pujian dan penghargaan Memberikan pujian dan penghargaan atas pencapaian anak adalah cara yang efektif untuk membangun rasa percaya diri mereka. Fokuskan pada upaya dan kemajuan anak, bukan hanya hasil akhirnya.
                    Berikan pujian yang spesifik dan jujur, sehingga anak merasa dihargai dan termotivasi untuk terus berkembang.
                  </li>
                  <li>
                    Dukung minat dan bakat anak Temukan minat dan bakat unik yang dimiliki anak, dan berikan kesempatan untuk mengembangkannya. Dukung mereka dalam menjalani kegiatan yang mereka sukai, seperti olahraga, seni, atau musik.
                    Ketika anak melihat bahwa mereka memiliki keahlian khusus di suatu bidang, rasa percaya diri mereka akan meningkat.
                  </li>
                  <li>
                    Dorong mereka untuk menghadapi tantangan Anak perlu belajar menghadapi tantangan agar rasa percaya diri mereka tumbuh. Dorong mereka untuk mencoba hal-hal baru dan berani menghadapi ketidakpastian. Bantu mereka melihat
                    kesalahan sebagai peluang untuk belajar dan berkembang. Ketika mereka berhasil mengatasi tantangan, berikan apresiasi dan perhatian positif.
                  </li>
                  <li>
                    Berikan otonomi dan tanggung jawab Memberikan anak tanggung jawab dan kebebasan dalam mengambil keputusan akan membantu mereka merasa lebih percaya diri. Berikan mereka tugas-tugas yang sesuai dengan usia dan tingkat
                    kemampuan mereka, dan biarkan mereka mengambil keputusan kecil dalam hal-hal sehari-hari. Hal ini akan membantu mereka merasa memiliki kendali atas hidup mereka dan membangun rasa percaya diri.
                  </li>
                  <li>
                    Jaga komunikasi yang positif Komunikasi yang positif antara orangtua dan anak sangat penting untuk membangun rasa percaya diri. Dengarkan dengan penuh perhatian saat anak berbicara, dan berikan dukungan emosional.
                    Hindari mengkritik atau menghakimi anak secara berlebihan. Berikan umpan balik konstruktif dan bantu mereka mengatasi rasa ketakutan atau kekhawatiran yang mungkin mereka miliki.
                  </li>
                  <li>
                    Berikan teladan yang positif Anak cenderung meniru perilaku orang dewasa di sekitarnya. Oleh karena itu, penting bagi orangtua dan pengasuh untuk menjadi teladan yang baik. Tunjukkan rasa percaya diri dalam menghadapi
                    tantangan dan berikan contoh kemampuan untuk mengatasi kesulitan. Ini akan menginspirasi anak untuk melakukannya dengan cara yang sama.
                  </li>
                </ol>
              </p>
            </div>
          </div>
          <div className="divider divider-horizontal "></div>

          <div className="w-1/3 bg-white  mr-32 ">
            <div className=" pb-10">
              <input
                type="text"
                className="w-full py-2 pl-4 pr-10 rounded-full shadow-lg bg-white border border-gray-300 hover:border-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:shadow-md"
                placeholder="Cari Artikel..."
              />
            </div>
            <img src={promoimg} alt="gambar promosi" className="h-50 mb-5" />
            <div className=" mt-10 mb-5">
              <h1 className="font-semibold text-xl mb-3 text-[#07294A]">Topik Yang Mungkin Bersangkutan</h1>
            </div>
            <div className="mb-5">
              <button className=" btn-active px-6 py-1 mb-2 mr-2 border border-gray-400 text-gray-400 rounded-full  bg-white hover:text-white hover:bg-[#07294A]">Habbit</button>
              <button className=" btn-active px-6 py-1 mb-2 mr-2 border border-gray-400 text-gray-400 rounded-full  bg-white hover:text-white hover:bg-[#07294A]">Karakter</button>
              <button className=" btn-active px-6 py-1 mb-2 mr-2 border border-gray-400 text-gray-400 rounded-full  bg-white hover:text-white hover:bg-[#07294A]">Emosional</button>
              <button className=" btn-active px-6 py-2 mb-2 mr-2 border border-gray-400 text-gray-400 rounded-full  bg-white hover:text-white hover:bg-[#07294A]">Pendidikan</button>
              <button className=" btn-active px-6 py-2 mb-2 mr-2 border border-gray-400 text-gray-400 rounded-full  bg-white hover:text-white hover:bg-[#07294A]">Chilhood</button>
              <button className=" btn-active px-6 py-2 mb-2 mr-2 border border-gray-400 text-gray-400 rounded-full  bg-white hover:text-white hover:bg-[#07294A]">School</button>
            </div>

            <div className="card w-96 bg-base-100 shadow-xl object-cover h-auto ">
              <figure>
                <img src={tumbimg3} alt="" className="object-cover h-full w-full" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  Shoes!
                  <div className="badge badge-secondary">NEW</div>
                </h2>
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
                <h2 className="card-title">
                  Shoes!
                  <div className="badge badge-secondary">NEW</div>
                </h2>
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
                <h2 className="card-title">
                  Shoes!
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <progress className="progress progress-info w-56 " value="50" max="100"></progress>

                <button className=" flex justify-center bg-[#5AA0F9] text-white hover:bg-blue-800  w-full mt-5 rounded-full shadow-xl py-1 px-16 ">Lanjutkan Membaca</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detailartikel;
