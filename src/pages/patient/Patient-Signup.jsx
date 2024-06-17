import React from "react";
import logo from "../../assets/logo.png";
import eyePatient from "../../assets/eyePatient.png";
import { Link } from "react-router-dom";
import PasswordInput from "../../components/PasswordInput";

const PatientSignup = () => {
  return (
    <div class="flex justify-center items-start h-dvh">
      <div class="w-1/2 pb-[152px], pt-[15px] pl-[102px] pr-[83px]">
        <div class="flex items-center gap-[9px] mb-[15px]">
          <img src={logo} class="w-[28.6px] h-[28.6px]" alt="logo" />
          <h3 class="text-[#021B27] h-[14px] text-[0.71em] font-bold uppercase">
            Healthkeep
          </h3>
        </div>

        <div class ="w-[355px]">
          <p class="mb-[10px] text-[#000000] font-semibold text-[1em] ">
            Create an account
          </p>

          <form>
            <div>
              <p class="mb-[5px] text-[#1F1F1F] text-sm font-normal">
                Full Name
              </p>
              <input
                type="text"
                class="mb-[10px] text-[#A5A5A5] text-[0.8em] shadow-2xl shadow- w-[355px] h-[35px] p-[10px] rounded border"
                placeholder="Name"
                required
              />
            </div>

            <div>
              <p class="mb-[5px] text-[#1F1F1F] text-sm font-normal">Email</p>
              <input
                type="email"
                class="mb-[10px] text-[#A5A5A5] text-[0.8em] shadow-2xl shadow- w-[355px] h-[35px] p-[10px] rounded border"
                placeholder="Email"
                required
              />
            </div>

            <div>
              <p class="mb-[5px] text-[#1F1F1F] text-[0.8em] font-normal">
                Date of Birth
              </p>
              <input
                type="date"
                required
                class="mb-[10px] text-[#A5A5A5] text-[0.7em] shadow-2xl shadow- w-[355px] h-[35px] p-[10px] rounded border"
              />
            </div>

            <div>
              <p class="mb-[5px] text-[#1F1F1F] text-sm font-normal">Gender</p>
              <select class="mb-[10px] text-[#A5A5A5] text-[0.7em] shadow-2xl shadow- w-[355px] h-[35px] p-[10px] rounded border">
                <option value=""> </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <PasswordInput />
            </div>

            <div className="mt-2">
              <div className="px-2 py-1 w-88 rounded bg-[#03A9F4] flex justify-center font-semibold text-white text-xs">
                <Link to="/HomePage">
                  <button type="button">Sign up</button>
                </Link>
              </div>

              <div className="font-medium text-xs flex justify-center mt-1 gap-1">
                <p>Already have an account?</p>
                <Link to="/Patient-Login">
                  <button type="button" className="text-[#03A9F4]">
                    Log in
                  </button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="h-screen w-1/2">
        <img src={eyePatient} className="w-full h-full" alt="patient" />
      </div>
    </div>
  );
};

export default PatientSignup;
