import React, { useState } from "react";
import logo from "../../assets/logo.png";
import doctor from "../../assets/doctor.png";
import { Link } from "react-router-dom";
import { FaRegEye, FaEyeSlash } from "react-icons/fa";

const PatientLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const correctPassword = ""; 

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password === correctPassword) {
      setErrorMessage("");
    } else {
      setErrorMessage("Invalid password");
    }
  };

  return (
    <div className="flex justify-center items-start h-screen">
      <div className="w-1/2 h-full flex justify-center bg-white">
        <div className="h-screen pb-72 pr-20 pt-8 pl-24">
          <div className="flex items-center gap-2 mb-12">
            <img src={logo} className="w-7 h-7" alt="logo" />
            <h3 className="text-[#021B27] h-4 text-xs font-bold uppercase">
              Healthkeep
            </h3>
          </div>

          <div className="w-[355px]">
            <p className="mb-10 text-[#000000] font-semibold text-lg">
              Log in to your account
            </p>
            <form onSubmit={handleSubmit}>
              <div className="items-start">
                <p className="mb-2 text-[#1F1F1F] text-sm font-normal">Email</p>
                <input
                  className="mb-4 text-[#1F1F1F] text-xs shadow-2xl w-[355px] h-9 p-2 rounded border"
                  value={email}
                  required
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="relative">
                <p className="text-[#1F1F1F] text-sm mb-2">Password</p>
                <input
                  type={showPassword ? "text" : "password"}
                  className="text-[#A5A5A5] text-xs shadow-2xl w-[355px] h-9 p-2 rounded border pr-10"
                  value={password}
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm text-[#A5A5A5]"
                >
                  {showPassword ? <FaRegEye /> : <FaEyeSlash />}
                </button>

                {!errorMessage && (
                  <Link to="/Forgot-Password">
                    <p className="text-[#03A9F4] mt-2 text-xs">Forget Password?</p>
                  </Link>
                )}
              </div>

              
              {errorMessage && (
                <div className="mt-4 text-red-500 flex font-medium justify-between items-center">
                  <p className="text-[0.8em]">{errorMessage}</p>
                  <Link to="/Forgot-Password" className="text-[#1F1F1F] text-[0.8em]">
                    Forget Password?
                  </Link>
                </div>
              )}

              <div className="flex gap-2 mt-6">
                <input type="checkbox" />
                <p className="text-xs font-medium">Remember Password</p>
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  className="px-4 py-2 w-full rounded bg-[#03A9F4] flex justify-center font-semibold text-white text-sm"
                >
                  Login
                </button>

                <div className="font-medium text-xs flex justify-center mt-4 gap-1">
                  <p>Don't have an account?</p>
                  <Link to="/Patient-Signup" className="text-[#03A9F4]">
                    Create an account
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="w-1/2 h-screen bg-purple-500">
        <img className="w-full h-screen" src={doctor} alt="doctor" />
      </div>
    </div>
  );
};

export default PatientLogin;
