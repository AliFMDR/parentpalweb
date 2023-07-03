import logoimg from "../images/logo.png";
import potofileimg from "../images/profil.png";
const Navbarlogin = () => {
  return (
    <nav className="bg-[#ffffff]">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center">
          <img src={logoimg} alt="Logo" className="h-12 w-12 ml-5" />
          <span className="text-black font-bold text-lg ml-2"></span>
        </div>
        <div className="hidden md:flex">
          <ul className="flex space-x-20 font-bold">
            <li>
              <a href="#" className="text-black hover:text-blue-600 ">
                Beranda
              </a>
            </li>
            <li>
              <a href="#" className="text-black hover:text-blue-600">
                Artikel
              </a>
            </li>
            <li>
              <a href="#" className="text-black hover:text-blue-600">
                Aplikasi
              </a>
            </li>
            <li>
              <a href="#" className="text-black hover:text-blue-600">
                Tentang Kami
              </a>
            </li>
          </ul>
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar ">
            <div className="w-10 rounded-full">
              <img src={potofileimg} />
            </div>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbarlogin;
