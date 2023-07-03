import React, { useState } from "react";
import { app } from "../firebaseconfig";
import { getDatabase, ref, set } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import { redirect } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const Daftar = () => {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    birthDate: "",
    gender: "",
    phoneNumber: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      // Submit form
      toast.success("Data berhasil diinput!", {
        position: "bottom-right",
        autoClose: 3000, // Durasi tampilan alert (dalam milidetik)
      });
      console.log("Form submitted:", formValues);

      const auth = getAuth();
      createUserWithEmailAndPassword(auth, formValues.email, formValues.password)
        .then((userCredential) => {
          // Signed in
          console.log(userCredential.user);
          redirect("/login");
          const db = getFirestore(app);
          // Add a new document in collection "cities"
          setDoc(doc(db, "users", formValues.email), {
            firstName: formValues.firstName,
            lastName: formValues.lastName,
            username: formValues.username,
            email: formValues.email,
            password: formValues.password,
            confirmPassword: formValues.confirmPassword,
            birthDate: formValues.birthDate,
            gender: formValues.gender,
            phoneNumber: formValues.phoneNumber,
          });
          // ...
        })
        .catch((error) => {
          console.log("error", error);
          // ..
        });

      // Reset form
      setFormValues({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        birthDate: "",
        gender: "",
        phoneNumber: "",
      });
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    const errors = {};

    if (!formValues.firstName.trim()) {
      errors.firstName = "Nama depan harus diisi";
    }

    if (!formValues.lastName.trim()) {
      errors.lastName = "Nama belakang harus diisi";
    }

    if (!formValues.username.trim()) {
      errors.username = "Username harus diisi";
    }

    if (!formValues.email.trim()) {
      errors.email = "Email harus diisi";
    } else if (!isValidEmail(formValues.email)) {
      errors.email = "Email tidak valid";
    }

    if (!formValues.password.trim()) {
      errors.password = "Kata sandi harus diisi";
    }

    if (!formValues.confirmPassword.trim()) {
      errors.confirmPassword = "Konfirmasi kata sandi harus diisi";
    } else if (formValues.confirmPassword !== formValues.password) {
      errors.confirmPassword = "Konfirmasi kata sandi tidak sesuai";
    }

    if (!formValues.birthDate.trim()) {
      errors.birthDate = "Tanggal lahir harus diisi";
    }

    if (!formValues.gender.trim()) {
      errors.gender = "Jenis kelamin harus diisi";
    }

    if (!formValues.phoneNumber.trim()) {
      errors.phoneNumber = "Nomor telepon harus diisi";
    }

    return errors;
  };

  const isValidEmail = (email) => {
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="flex justify-center">
      <form className="w-5/12 p-6 border-t-2 bg-[#c1d3ee] rounded-lg shadow-lg" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-6">Daftar</h2>
        <div className="mb-4">
          <label htmlFor="firstName" className="block mb-2">
            Nama Depan
          </label>
          <input type="text" name="firstName" id="firstName" value={formValues.firstName} onChange={handleInputChange} className={`border ${errors.firstName ? "border-red-500" : "border-black"} p-2 w-full rounded`} />
          {errors.firstName && <span className="text-red-500">{errors.firstName}</span>}
        </div>

        <div className="mb-4">
          <label htmlFor="lastName" className="block mb-2">
            Nama Belakang
          </label>
          <input type="text" name="lastName" id="lastName" value={formValues.lastName} onChange={handleInputChange} className={`border ${errors.lastName ? "border-red-500" : "border-black"} p-2 w-full rounded`} />
          {errors.lastName && <span className="text-red-500">{errors.lastName}</span>}
        </div>

        <div className="mb-4">
          <label htmlFor="username" className="block mb-2">
            Username
          </label>
          <input type="text" name="username" id="username" value={formValues.username} onChange={handleInputChange} className={`border ${errors.username ? "border-red-500" : "border-black"} p-2 w-full rounded`} />
          {errors.username && <span className="text-red-500">{errors.username}</span>}
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">
            Email
          </label>
          <input type="email" name="email" id="email" value={formValues.email} onChange={handleInputChange} className={`border ${errors.email ? "border-red-500" : "border-black"} p-2 w-full rounded`} />
          {errors.email && <span className="text-red-500">{errors.email}</span>}
        </div>
        <div className="flex ">
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2">
              Kata Sandi
            </label>
            <input type="password" name="password" id="password" value={formValues.password} onChange={handleInputChange} className={`border ${errors.password ? "border-red-500" : "border-black"} p-2 w-full rounded`} />
            {errors.password && <span className="text-red-500">{errors.password}</span>}
          </div>

          <div className="mb-4 ml-10">
            <label htmlFor="confirmPassword" className="block mb-2">
              Konfirmasi Kata Sandi
            </label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              value={formValues.confirmPassword}
              onChange={handleInputChange}
              className={`border ${errors.confirmPassword ? "border-red-500" : "border-black"} p-2 w-full rounded`}
            />
            {errors.confirmPassword && <span className="text-red-500">{errors.confirmPassword}</span>}
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="birthDate" className="block mb-2">
            Tanggal Lahir
          </label>
          <input type="date" name="birthDate" id="birthDate" value={formValues.birthDate} onChange={handleInputChange} className={`border ${errors.birthDate ? "border-red-500" : "border-black"} p-2 w-full rounded`} />
          {errors.birthDate && <span className="text-red-500">{errors.birthDate}</span>}
        </div>

        <div className="flex mb-4">
          <div className="mr-4 ">
            <label htmlFor="gender" className="block mb-2">
              Jenis Kelamin
            </label>
            <select name="gender" id="gender" value={formValues.gender} onChange={handleInputChange} className={`border ${errors.gender ? "border-red-500" : "border-black"} p-2 rounded`}>
              <option value="">Pilih jenis kelamin</option>
              <option value="Laki-laki">Laki-laki</option>
              <option value="Perempuan">Perempuan</option>
            </select>
            {errors.gender && <span className="text-red-500">{errors.gender}</span>}
          </div>

          <div>
            <label htmlFor="phoneNumber" className="block ml-14 mb-2">
              Nomor Telepon
            </label>
            <input type="tel" name="phoneNumber" id="phoneNumber" value={formValues.phoneNumber} onChange={handleInputChange} className={`border ${errors.phoneNumber ? "border-red-500" : "border-black"} p-2 w-56 ml-14 rounded`} />
            {errors.phoneNumber && <span className="text-red-500">{errors.phoneNumber}</span>}
          </div>
        </div>

        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
          Daftar
        </button>
      </form>
    </div>
  );
};

export default Daftar;
