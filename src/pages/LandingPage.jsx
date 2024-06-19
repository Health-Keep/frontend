import React from "react";
import logo from "../assets/logo.png";
import nurse from "../assets/nurse.png";
import nurse1 from "../assets/nurse1.png";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="flex flex-col gap-2 w-[100%] px-[60px] pt-[20px] min-h-screen bg-landBg">
      <nav className="flex justify-between items-center gap-3 ">
        <div className="flex flex-row items-center justify-start gap-2">
          <img className="w-[40px] h-[40px]" src={logo} alt="HealthKeep Logo" />
          <h2 className="text-[#021B27] font-[700]">HEALTHKEEP</h2>
        </div>

        <ul className="flex flex-row gap-4">
          <li className="hover:text-[#03A9F4]">
            <Link to="#">Medical Records</Link>
          </li>
          <li className="hover:text-[#03A9F4]">
            <Link to="#">About</Link>
          </li>
          <li className="hover:text-[#03A9F4]">
            <Link to="#">Service</Link>
          </li>
          <li className="hover:text-[#03A9F4]">
            <Link to="#">Contact Us</Link>
          </li>
        </ul>

        <Link to="/login">
          <button className="h-[52px] w-[120px] text-[16px] font-[600] py-[7px] px-[12px] bg-[#03A9F4] rounded-[8px]">
            Login
          </button>
        </Link>
      </nav>

      <div className="flex flex-row items-center justify-between gap-1 w-full mt-[50px] relative">
        <div className="w-[464px] h-[330px] flex flex-col gap-[30px]">
          <div>
            <h1 className="text-[48px] font-[700]">
              Ditch the Paper work Embrace the future of healthcare
            </h1>
            <p className="text-[20px] font-[500]">
              Boost Productivity: Securely Access and Manage Your Medical
              Records Anytime, Anywhere.
            </p>
          </div>
          <div className="flex gap-[24px]">
            <Link to="/org-signup">
              <button className="h-[52px] w-[180px] text-[16px] font-[600] py-[7px] px-[12px] bg-[#03A9F4] rounded-[8px]">
                Sign up as a hospital
              </button>
            </Link>
            <Link to="/patient-signup">
              <button className="h-[52px] w-[180px] text-[16px] font-[600] py-[7px] px-[12px] border border-[black] rounded-[8px]">
                Sign up as a patient
              </button>
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-around gap-5 w-[50%]  relative top-[40px]">
          <span className="w-400px] h-[320px] overflow-hidden bg-gray-200 rounded-[100px] ">
            <img src={nurse} alt="" />
          </span>
          <span className="w-400px] h-[460px] overflow-hidden bg-orange-400 rounded-[200px] relative right-[20px]">
            <img src={nurse1} alt="" />
          </span>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default LandingPage;
