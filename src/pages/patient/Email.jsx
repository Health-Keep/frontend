import React from "react";
import { Link } from "react-router-dom";

const Email = () => {
  return (
    <div class ="h-[358px] pl-[146.5px] mt-32 pr-[147.5px]">
      <div class ="h-[300px] w-[500px] ml-[230px] flex flex-col justify-center items-center shadow-2xl rounded">
        <p class =" mb-[24px] font-bold text-[#2E2E2E] text-[1.5em]"> Check your email!</p>
        
        <div class = "font-normal text-center text-[1em] text-[#2E2E2E]">
        <p>We sent you an email with a link to reset</p>
        <p>your password.</p>
        </div>
      </div>

      <div class = "flex justify-center items-center mt-[24px] ml-96 gap-1 text-[1.13em] w-48">
        <p class ="text-[#1F1F1F] font-normal">Return to</p>
        <Link to="/Patient-Login" className="text-[#03A9F4]">Log In</Link>
      </div>
    </div>
  );
};

export default Email;
