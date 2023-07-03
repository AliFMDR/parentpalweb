import Daftar from "../components/daftar";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import Footer from "../components/footer";
const Register = () => {
  return (
    <>
      <div className="mb-20">
        <Link to="/" className="flex gap-3 mt-10 ml-10 items-center font-medium text-sky-700 hover:text-blue-800 mr-16">
          <IoMdArrowRoundBack />
          kembali ke Home
        </Link>
      </div>
      <Daftar />
      <div className="mb-20"></div>
      <Footer />
    </>
  );
};

export default Register;
