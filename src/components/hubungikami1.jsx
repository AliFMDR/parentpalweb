import shareimg from "../images/ilustrasishare.png";
const Hubungikami1 = () => {
  return (
    <>
      <div className="bg-white justify-center text-center mt-20">
        <p className="text-lg font-semibold text-[#07294A]">Hubungi Kami</p>
      </div>
      <div className="bg-white justify-center text-center mt-1">
        <p className="text-3xl font-semibold text-[#07294A] mb-10">Kami senang dapat mendengar anda</p>
      </div>
      <div className="rounded-xl w-3/4 h-auto p-10 bg-[#E6EEF5] ml-52 mb-52 shadow-lg ">
        <div className="flex">
          <div className="flex-1 grid">
            <div className="flex flex-col ml-16 mt-28">
              <div className="flex">
                <img src={shareimg} alt="Gambar 1" className="mb-12 w-10 h-10" />
                <div className="ml-5 ">
                  <h2 className="font-semibold">Chat kami melalui</h2>
                  <p>Team kami siap membantu anda.</p>
                  <p>
                    <a href="https://www.example.com" target="_blank" rel="noopener noreferrer" className="">
                      admin@parentpal.co
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex">
                <img src={shareimg} alt="Gambar 2" className="mb-10 mt-2 w-10 h-10" />
                <div className="ml-5 mt-2 ">
                  <h2 className="font-semibold">Kunjungi kami di</h2>
                  <p>Jl Jendral Sudirman kav.50 jakarta timur </p>
                  <p>Jakarta pusat, DKI Jakarta</p>
                </div>
              </div>
              <div className="flex">
                <img src={shareimg} alt="Gambar 2" className="mb-4 mt-3 w-10 h-10" />
                <div className="ml-5 mt-2">
                  <h2 className="font-semibold">Kunjungi kami di</h2>
                  <p>Sen-Jum 8:00 - 16:00 WIB</p>
                  <p>(+62) 8123 456 7890</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-2/3 h-auto justify-between bg-[#E6EEF5]">
            <div className="flex flex-col bg-white mt-10 mb-10 ml-10 rounded-lg mr-10">
              <div>
                <h1 className="font-semibold text-2xl text-[#07294A] ml-10 mt-10">Memiliki saran atau keluhan terhadap aplikasi?</h1>
                <p className="font-semibold text-[#07294A] ml-10">Katakan apapun terkait aplikasi kepada kami.</p>
              </div>
              <div className="mb-4 ml-10 mt-5">
                <label className="block mb-2 font-medium">Panggilan Anda</label>
                <input type="text" className="w-11/12 rounded border border-black border-opacity-50 px-3 py-1 " placeholder="..." />
              </div>
              <div className="mb-4 ml-10 ">
                <label className="block mb-2 font-medium">Email</label>
                <input type="text" className="w-11/12 rounded border border-black border-opacity-50 px-3 py-1" placeholder="..." />
              </div>
              <div className="mb-4 ml-10">
                <label className="block mb-2 font-medium">Ceritakan apapun terkait aplikasi</label>
                <textarea className="w-11/12 rounded border border-black border-opacity-50 px-3 py-2" rows="2"></textarea>
              </div>
              <button className="bg-[#8c9093] text-white py-2 px-4 ml-10 mr-10 mb-10 rounded-lg ">Kirim</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Hubungikami1;
