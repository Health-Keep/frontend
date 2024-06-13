import logo from "../assets/logo.png";
import house from "../assets/house.png";
import profile from "../assets/profile.png";
const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-loginBg">
      <div className="flex flex-col items-center justify-center">
        <img src={logo} alt="HealthKeep Logo" />
        <h1 className="text-[39px] font-[500px] text-[#132838]">
          Who&apos;s using Healthkeep?
        </h1>
        <p className="text-[20px] font-[500px]">Choose your profile</p>
        <div className="w-[491px] flex flex-row items-center justify-around gap-1 mt-10">
          <div className="flex flex-col items-center justify-center gap-3">
            <h2>Organization</h2>
            <span>
              <img src={house} alt="House" />
            </span>
          </div>

          <div className="flex flex-col items-center justify-center gap-3">
            <h2>Patient</h2>
            <span>
              <img src={profile} alt="Profile" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
