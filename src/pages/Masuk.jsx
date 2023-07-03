import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

import Login from "../components/login";

function Masuk() {
  return (
    <>
      <div className="bg-[#E6EEF5] h-10">
        <Link to="/" className="flex gap-3 items-center font-medium text-sky-700 hover:text-blue-800 mr-16">
          <IoMdArrowRoundBack />
          kembali ke Home
        </Link>
      </div>
      <Login />
    </>
  );
}

export default Masuk;
