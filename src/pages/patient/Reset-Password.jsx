import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegEye, FaEyeSlash } from "react-icons/fa";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [passwordMessage, setPasswordMessage] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setPassword(value);
  };

  const handleConfirmChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    validatePassword(password, value);
  };

  const validatePassword = (password, confirmPassword) => {
    if (password !== confirmPassword) {
      setPasswordMessage("Passwords do not match");
    } else {
      setPasswordMessage("Passwords match");
    }
  };

  return (
    <div className="h-full w-full flex items-center justify-center bg-white p-4 sm:p-8">
      <div className="flex items-center justify-center shadow-xl h-auto w-full max-w-lg p-8 bg-white rounded">
        <div className="flex flex-col items-start w-full">
          <p className="text-[#2E2E2E] mb-8 font-bold text-xl sm:text-2xl">
            Enter your new password
          </p>

          <div className="w-full mb-4">
            <div className="mb-4">
              <p className="mb-2 font-normal text-sm sm:text-base">
                New password
              </p>
              <div className="relative w-full">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  required
                  placeholder="********"
                  onChange={handleChange}
                  className="w-full h-12 p-3 border rounded"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm text-[#A5A5A5]"
                >
                  {showPassword ? <FaRegEye /> : <FaEyeSlash /> }
                </button>
              </div>
            </div>

            <div className="mb-4">
              <p className="mb-2 font-normal text-sm sm:text-base">
                Confirm password
              </p>

              <div className="relative w-full">
                <input
                  type={showPassword ? "text" : "password"}
                  value={confirmPassword}
                  required
                  placeholder="********"
                  onChange={handleConfirmChange}
                  className="w-full h-12 p-3 border rounded"
                />

                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm text-[#A5A5A5]"
                >
                  {showPassword ? <FaRegEye /> : <FaEyeSlash />}
                </button>
              </div>
            </div>

            {passwordMessage && (
              <div
                className={`mb-4 text-sm sm:text-base ${
                  passwordMessage === "Passwords match" ? "text-green-500" : "text-red-500"
                }`}
              >
                {passwordMessage}
              </div>
            )}

            <div className="sm:text-base text-[#2E2E2E] font-normal mb-4">
              <p className="text-xs">
                Use a minimum of 8 characters with at least one number and
              </p>
              <p className="text-xs">special character (#!&$)</p>
            </div>

            <div className="w-full h-12 bg-[#03A9F4] flex items-center justify-center rounded">
              <Link to="/PasswordChanged">
                <input 
                type="submit" 
                className="text-white text-base font-semibold"
                value = "Change Password"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
