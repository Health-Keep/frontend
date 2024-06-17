import React, { useState } from "react";
import logo from "../../assets/logo.png";
import doctor from "../../assets/doctor.png";
import { Link } from "react-router-dom";

const PatientLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

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
    <div class=" flex justify-center items-start h-dvh">
      <div class="w-1/2 h-full justify-center bg-white-500">
        <div class="h-screen pb-[295px] pr-[86px] pt-[32px] pl-[100px]">

        <div class="flex items-center gap-[9px] mb-[100px]">
          <img src={logo} class="w-[28.6px] h-[28.6px]" alt="logo" />
          <h3 class="text-[#021B27] h-[14px] text-[0.71em] font-bold uppercase">
            Healthkeep
          </h3>
        </div>

          <div class ="">
            <p class="mb-[40px] text-[#000000] font-semibold text-[1em]">
                Log in to your account
            </p>
            <form onSubmit={handleSubmit}>
              <div class ="items-start">
                <p class ='mb-[8px] text-[#1F1F1F] text-sm font-normal'>Email</p>
                
                <input class =" mb-[16px] text-[#1F1F1F] text-[0.8em] shadow-2xl shadow- w-[355px] h-[35px] p-[10px] rounded border"
                  value={email}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <div >
                  <p class ="text-[#1F1F1F] text-sm mb-[8px]"> Password </p>
                  <input
                    type="password"
                    class ="text-[#A5A5A5] text-[0.8em] shadow-2xl w-[355px] h-[35px] p-[10px] rounded border"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  <Link to="/Forgot-Password">
                    <p class="text-[#03A9F4] mt-[8px] text-[0.875em] shadow-2xl w-[355px]">Forget Password?</p>
                  </Link>
                </div>

                <div class = "flex  gap-[8px] mt-[24px]">
                  <input type="checkbox" />
                  <p class = "text-[0.8em] font-medium ">Remember Password</p>
                </div>

                {errorMessage && (
                    <p class= "text-red">{errorMessage}</p>
                  )}

                <div class ="mt-[24px]">
                <div class = "px-[10px] py-[5px] w-[355px] rounded bg-[#03A9F4] flex justify-center font-semibold text-white text-sm">
                  <Link to="/Landing-Page">
                    <button type="submit">Login</button>
                  </Link>
                </div>

                <div class = "font-medium text-[0.88em] flex justify-center mt-[16px] gap-[5px]">
                  <p> Don't have an account? </p>
                    <Link to="/Patient-Signup">
                    <p class ="text-[#03A9F4]">Create an account </p>
                    </Link>
                </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div class="w-1/2 h-screen bg-purple-500">
      <img class="w-full h-screen" src={doctor} alt="doctor" />
      </div>
    </div>
  );
};

export default PatientLogin;
