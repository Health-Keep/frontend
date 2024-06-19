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

      <div>
        <div className="w-[464px] h-[330px] flex flex-col gap-[16px]">
          <div>
            <h1 className="text-[48px] font-[700]">
              Ditch the Paper work Embrace the future of healthcare
            </h1>
            <p className="text-[20px] font-[500]">
              Boost Productivity: Securely Access and Manage Your Medical
              Records Anytime, Anywhere.
            </p>
          </div>
          <div>
            <Link to="/org-signup">
              <button className="h-[52px] w-[120px] text-[16px] font-[600] py-[7px] px-[12px] bg-[#03A9F4] rounded-[8px]">
                Sign up as a hospital
              </button>
            </Link>
            <Link to="/login">
              <button className="h-[52px] w-[120px] text-[16px] font-[600] py-[7px] px-[12px] bg-[#03A9F4] rounded-[8px]">
                Sign up as a patient
              </button>
            </Link>
          </div>
        </div>

        <div className="flex gap-5">
          <span>
            <img src={nurse} alt="" />
          </span>
          <span>
            <img src={nurse1} alt="" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
