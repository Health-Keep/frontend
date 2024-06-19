import { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import doc from "../../assets/doc.png";
import logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import PasswordStrengthMeter from "../../components/PasswordStrengthMeter";
import { useAuth } from "../../context/AuthContext";
import axios from "axios";

const OrgSignup = () => {
  const { email, setEmail } = useAuth();
  const [name, setName] = useState("");
  const [license, setLicense] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const validationError = {};
    if (!name) validationError.name = "Name is required";

    if (!email.trim()) {
      validationError.email = "Email is required";
    } else if (
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        email
      )
    ) {
      validationError.email = "Please Input a valid Email";
    }
    if (license.length < 11 || license.length > 18)
      validationError.license =
        "Invalid License, it must be between 11 and 18 digits";

    if (!password.trim()) {
      validationError.password = "Password is required";
    } else if (password.length < 8) {
      validationError.password = "Password must be at least 8 characters";
    }

    setErrors(validationError);

    if (Object.keys(validationError).length === 0) {
      try {
        const response = await axios.post(
          "https://backend-vsie.onrender.com/api/org/signup",
          {
            name: name,
            email: email,
            password: password,
            licence: license,
          }
          // response.data.user.name
        );
        console.log("Signup Successful:", response.data);
        navigate("/org-verify");
      } catch (error) {
        console.error("Signup failed:", error.message);
      }
    }
  };

  return (
    <div className="flex flex-row items-center justify-center h-screen">
      <div className="flex flex-col items-start justify-start w-[50%] h-full mx-[100px]">
        <div className="flex flex-row items-center justify-start gap-2 w-[50%] h-[120px]">
          <img className="w-[30px] h-[30px]" src={logo} alt="HealthKeep Logo" />
          <h2 className="text-[#021B27] font-[700]">HEALTHKEEP</h2>
        </div>
        <h1 className="font-[600] mt-[10px] mb-[10px] text-[24px] w-[100%]">
          Create an Account
        </h1>
        <form
          onSubmit={onSubmit}
          className="flex flex-col items-start justify-start gap-[8px] w-[534px] h-[720px]"
        >
          <label htmlFor="name">Name</label>
          <input
            className="h-[50px] w-[534px] border-[1px] rounded-[8px] border-[#A5A5A5] outline-[#A5A5A5] px-[10px] drop-shadow-xl"
            type="text"
            id="name"
            name="name"
            required
            placeholder="Name of Organization"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && (
            <p className="text-[#FF4545] font-[600]">{errors.name}</p>
          )}
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
          {errors.email && (
            <p className="text-[#FF4545] font-[600]">{errors.email}</p>
          )}
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
          {errors.license && (
            <p className="text-[#FF4545] font-[600]">{errors.license}</p>
          )}

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
          </div>
          {errors.password && (
            <p className="text-[#FF4545] font-[600]">{errors.password}</p>
          )}
          <PasswordStrengthMeter password={password} />
          <p className="text-[14px] font-[400] mb-[10px]">
            Use a minimum of 8 characters with at least one number and special
            character (#!&$)
          </p>
          <button
            className="h-[50px] w-[534px] py-[16px] px-[24px] text-white bg-[#03A9F4] rounded-[8px]"
            type="submit"
          >
            Sign up
          </button>
          <span className="flex flex-row items-center justify-center gap-1 w-[534px]">
            <p>Already have an account?</p>
            <Link to="/org-login" className="text-[#03A9F4]">
              Log in
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

export default OrgSignup;
