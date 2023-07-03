import { Link, NavLink } from "react-router-dom";
import logoimg from "../images/logo.png";
import { useState, useEffect } from "react";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav className={`navbar sticky top-0 z-10 ${isScrolled ? "bg-[#E6EEF5] opacity-75" : "bg-[#E6EEF5]"}`}>
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center">
          <img src={logoimg} alt="Logo" className="h-12 w-12 ml-5" />
          <span className="text-[#07294A] font-bold text-3xl ml-2">
            Parent <span className="text-blue-500 font-bold text-3xl">Pal</span>
          </span>
        </div>
        <div className="hidden md:flex">
          <ul className="flex space-x-20 font-bold">
            <li>
              <NavLink to="/" className="text-black hover:text-blue-600    ">
                Beranda
              </NavLink>
            </li>
            <li>
              <NavLink to="/edukasi" className="text-black hover:text-blue-600  ">
                Edukasi
              </NavLink>
            </li>
            <li>
              <NavLink to="/aplikasi" className="text-black hover:text-blue-600  ">
                Aplikasi
              </NavLink>
            </li>
            <li>
              <NavLink to="/tanyaahli" className="text-black hover:text-blue-600  ">
                Tanya Ahli
              </NavLink>
            </li>
            <li>
              <NavLink to="/hubungikami" className="text-black hover:text-blue-600 ">
                Tentang Kami
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <Link to="/login">
            <button className="bg-blue-700 text-white hover:bg-blue-800  mr-8 rounded-lg py-2 px-10">Login Ahli</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
