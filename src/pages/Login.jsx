import logo from "../assets/logo.png";
import house from "../assets/house.png";
import profile from "../assets/profile.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-loginBg">
      <div className="flex flex-col gap-2 items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-2">
          <img src={logo} alt="HealthKeep Logo" />
          <h1 className="text-[39px] font-[500] text-[#132838] mt-[60px] mb-[16px]">
            Who&apos;s using Healthkeep?
          </h1>
          <p className="text-[20px] font-[500]">Choose your profile</p>
        </div>

        <div className="w-[491px] flex flex-row items-center justify-around gap-1 mt-10">
          <Link to="/org-login">
            <div className="flex flex-col items-center justify-center gap-3 w-[140px] h-[150px] border-2 border-solid border-[#b1e4fc] bg-[#b1e4fc] rounded-[8px] cursor-pointer">
              <h2 className="text-[18px] font-[500]">Organization</h2>
              <span className="flex flex-row items-center justify-center h-[70px] w-[70px] border-2 border-black rounded-full ">
                <img src={house} alt="House" />
              </span>
            </div>
          </Link>

          <Link to="/user-login">
            <div className="flex flex-col items-center justify-center gap-3 w-[140px] h-[150px] border-2 border-solid border-[#FFC0B3] bg-[#FFC0B3] rounded-[8px] cursor-pointer">
              <h2 className="text-[18px] font-[500]">Patient</h2>
              <span className="flex flex-row items-center justify-center h-[70px] w-[70px] border-2 border-black rounded-full ">
                <img src={profile} alt="Profile" />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
