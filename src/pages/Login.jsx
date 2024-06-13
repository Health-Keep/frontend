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
          <h1 className="text-[39px] font-[500px] text-[#132838] mt-[60px] mb-[16px]">
            Who&apos;s using Healthkeep?
          </h1>
          <p className="text-[20px] font-[500px]">Choose your profile</p>
        </div>

        <div className="w-[491px] flex flex-row items-center justify-around gap-1 mt-10">
          <Link to="/org-login">
            <div className="flex flex-col items-center justify-center gap-3 w-[131px]">
              <h2>Organization</h2>
              <span>
                <img src={house} alt="House" />
              </span>
            </div>
          </Link>

          <Link to="/user-login">
            <div className="flex flex-col items-center justify-center gap-3">
              <h2>Patient</h2>
              <span>
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
