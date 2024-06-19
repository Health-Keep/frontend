import { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import doc from "../../assets/doc.png";
import logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const OrgLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [license, setLicense] = useState("");

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://backend-vsie.onrender.com/api/org/login",
        {
          email: email,
          licence: license,
          password: password,
        }
      );
      console.log("Login Successful:", response.data);
      navigate("/dashboard");
    } catch (error) {
      console.error("Signup failed:", error.message);
    }
  };

  return (
    <div className="flex flex-row items-center justify-center h-screen">
      <div className="flex flex-col items-start justify-start w-[50%] h-full mx-[100px]">
        <div className="flex flex-row items-center justify-start gap-2 w-[50%] h-[120px]">
          <img className="w-[30px] h-[30px]" src={logo} alt="HealthKeep Logo" />
          <h2 className="text-[#021B27] font-[700]">HEALTHKEEP</h2>
        </div>
        <h1 className="font-[600] mt-[60px] mb-[40px] text-[24px] w-[100%]">
          Log in to your account
        </h1>
        <form
          onSubmit={onSubmit}
          className="flex flex-col items-start justify-start gap-[8px] w-[534px] h-[720px]"
        >
          <label htmlFor="email">Email</label>
          <input
            className="h-[50px] w-[534px] border-[1px] rounded-[8px] border-[#A5A5A5] outline-[#A5A5A5] px-[10px] drop-shadow-xl"
            type="email"
            id="email"
            name="email"
            placeholder="Email Address"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="license">License No</label>
          <input
            className="h-[50px] w-[534px] border-[1px] rounded-[8px] border-[#A5A5A5] outline-[#A5A5A5] px-[10px] drop-shadow-xl"
            type="text"
            id="license"
            name="license"
            placeholder="Hospital's License Number"
            required
            value={license}
            onChange={(e) => setLicense(e.target.value)}
          />

          <div className="relative flex flex-col items-start justify-start gap-[8px]">
            <label htmlFor="password">Password</label>
            <input
              className="h-[50px] w-[534px] border-[1px] rounded-[8px] border-[#A5A5A5] outline-[#A5A5A5] px-[10px] drop-shadow-xl"
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="* * * * * * * *"
              required
              value={password}
              onChange={handleChangePassword}
            />
            <button
              className="absolute right-5 top-[47px]"
              type="button"
              onClick={handleTogglePassword}
            >
              {showPassword ? <FaRegEye /> : <FaEyeSlash />}
            </button>
            <div className="flex items-center justify-end w-[100%] ">
              <Link className="text-[14px] font-[500]" to="/forgetpassword">
                Forgot Password?
              </Link>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center gap-[8px]">
            <input type="checkbox" name="rem" id="rem" />
            <p className="text-[16px] font-[500]">Remember Password</p>
          </div>

          <button
            className="h-[50px] w-[534px] mt-[10px] py-[16px] px-[24px] text-white bg-[#03A9F4] rounded-[8px]"
            type="submit"
          >
            Log in
          </button>
          <span className="flex flex-row items-center justify-center gap-1 w-[534px]">
            <p>Don&apos;t have an account?</p>
            <Link to="/org-signup" className="text-[#03A9F4]">
              Create an account
            </Link>
          </span>
        </form>
      </div>
      <div className="flex flex-col items-center justify-center w-[50%] h-full">
        <img className="w-[100%] h-[100%]" src={doc} alt="doctor" />
      </div>
    </div>
  );
};

export default OrgLogin;
