import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseconfig";
import loginimg from "../images/gambarlogin.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSimpanClick = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        //const user = userCredential.user;
        // ...
        //navigate("/dasboard");
        navigate("/dasboard");
        console.log(userCredential.user);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <div className="flex  items-center justify-center  bg-slate-500">
      <div className="bg-[#F0F8FF] rounded-2xl  p-10 mt-20 ">
        <div className="flex h-auto rounded-lg shadow-xl">
          <div className="bg-white flex-1 flex flex-col justify-center items-center p-10">
            <form className="max-w-sm">
              <h2 className="text-4xl font-semibold   mb-1">Masuk</h2>
              <p className="mb-4 text-base font-medium">Masuk terlebuh dahulu untuk melanjutkan.</p>
              <div className="mb-4">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Masukkan email"
                  className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500 bg-[#a1dff5] shadow-md placeholder-[#07294A]"
                ></input>
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none bg-[#a1dff5] focus:border-blue-500 shadow-md placeholder-[#07294A]"
                />
              </div>
              <div className="flex justify-items-center mb-4">
                <input type="checkbox" className="checkbox checkbox-info" />
                <label htmlFor="remember" className="text-gray-700 rounded-lg ">
                  Ingat Saya
                </label>
                <p className="ml-16">Lupa Password Anda?</p>
                <a href="#" className="ml-auto text-blue-500">
                  Klik Disini
                </a>
              </div>
              <button type="button" onClick={handleSimpanClick} className="w-full bg-blue-500 text-white py-2 px-20 rounded shadow hover:bg-blue-600 mb-4">
                Masuk
              </button>
              <button type="button" className="w-full bg-white text-black  py-2 rounded border-2 border-blue-800 shadow hover:bg-sky-600 mb-4">
                <span className="flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-2">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.88 14.88l-1.06 1.06L12 13.06l-4.82 4.82L6 16.94l4.82-4.82L6 7.29l1.06-1.06L12 10.94l4.88-4.88z" />
                  </svg>
                  Masuk menggunakan Google
                </span>
              </button>
            </form>
          </div>
          <div className="flex-1 bg-white p-10">
            <img src={loginimg} alt="Ilustrasi" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
