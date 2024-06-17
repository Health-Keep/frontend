import { Link } from "react-router-dom";
import {MdOutlineEmail } from "react-icons/md";

const ForgotPassword = () => {
  return (
    <div class ="sm:center lg:mx-[400px] lg:my-[150px] w-[450px] h-[300px]  flex justify-around items-center bg-white-500 shadow-2xl shadow-[rgba(103, 110, 118, 0.16)] rounded">
      <div class ="">
        <h2 class ="mb-[20px] text-[#2E2E2E] font-bold text-[1em]">Reset your password</h2>

        <div>
          <div class ="text-[#1F1F1F] font-normal text-[0.85em]">
            <p class ="">Email</p>
            <div  class ="shadow-2xl shadow-[rgba(103, 110, 118, 0.16)] flex gap-1 items-center w-[355px] h-9 p-2 border rounded">
            <MdOutlineEmail class ="w-[10px] h-[10px]" />
            <input type="email" 
            required
            />
            </div>
            
            <Link to="/Email">
              <button class =" w-[355px] h-9 mt-[25px] text-[#FFFFFF] text-xs font-semibold items-center justify-center bg-[#03A9F4] rounded"> 
                Send email to reset password</button>
            </Link>
          </div>

        <div class = "flex font-normal text-xs gap-1 items-center justify-center mt-[25px]">
        <p> Return to </p>
        <Link to="/Patient-Login" class ="text-[#03A9F4]">Log In</Link>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
