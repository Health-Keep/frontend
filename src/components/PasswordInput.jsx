import React, { useState } from "react";
import { FaRegEye, FaEyeSlash } from "react-icons/fa";

const PasswordInput = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  const getPasswordStrength = () => {
    const hasNumber = /\d/;
    const hasSpecialChar = /[#!&$]/;
    const isLongEnough = password.length >= 8;

    if (
      isLongEnough &&
      hasNumber.test(password) &&
      hasSpecialChar.test(password)
    ) {
      return "Great";
    } else if (isLongEnough) {
      return "medium";
    } else {
      return "weak";
    }
  };

  const passwordStrength = getPasswordStrength();

  return (
    <div class="relative">
      <p class="mb-[5px] text-[#1F1F1F] text-sm font-normal">Password</p>
      <input
        class="mb-[10px] text-[#A5A5A5] text-[0.7em] shadow-2xl shadow- w-[355px] h-[35px] p-[10px] rounded border"
        type={showPassword ? "text" : "password"}
        value={password}
        required
        placeholder="********"
        onChange={handleChange}
      />
      <button
        type="button"
        onClick={togglePasswordVisibility}
        className="absolute inset-y-0 right-0 pr-3 pb-[12px] flex items-center text-[0.8em] text-[#A5A5A5] leading-5"
      >
        {showPassword ? <FaRegEye /> : <FaEyeSlash />}
      </button>

    <div>
    {password && (
        <p
          className={`text-sm${
            passwordStrength === "Great"
              ? " text-green-500"
              : passwordStrength === "medium"
              ? "text-yellow-500"
              : "text-red-500"
          }`}
        >
         {passwordStrength}
        </p>
      )}
    </div>
     
      <p class="mb-[10px] text-[#1F1F1F] text-[0.6em] font-normal">
        Use a minimum of 8 characters with at least one number and special
        <p>character (#!&$)</p>
      </p>
    </div>
  );
};

export default PasswordInput;
