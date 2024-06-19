import { Link } from "react-router-dom";
import { MdOutlineEmail } from "react-icons/md";
import logo from "../../assets/logo.png";
import info from "../../assets/info.png";
import { useAuth } from "../../context/AuthContext";

const EmailVerification = () => {
  const { email } = useAuth();
  return (
    <div className="w-full h-full ">
      <div className="gap-1 flex items-center pl-10 pt-10">
            <img src={logo} className="w-[28px] h-[28px]" alt="logo" />
            <p className="h-[14px] w-[72px] text-[#021B27] font-bold text-xs uppercase">
            Healthkeep
            </p>
      </div>
      <div className="flex flex-col items-center justify-center ">
            <div className="flex flex-col justify-center items-center shadow-xl w-[637px] h-[400px]">
                <div className="w-[487px] h-[213px] flex flex-col justify-center items-center mb-[30px]">
                    <div className="flex flex-col items-center justify-center mb-[40px] w-[268px] h-[109px]">
                        <MdOutlineEmail className="text-[#03A9F4] w-[64px] h-[64px] mb-[16px]" />
                        <p className="font-bold text-xl text-[#2E2E2E] w-[269px] h-[29px]">
                            Verify your email address
                        </p>
                    </div>

                    <div className="w-[487px] h-[64px] font-medium flex-col text-sm">
                        <p className="mb-2">
                            We sent a confirmation email to{" "}
                            <span className="font-bold">{email}</span>
                        </p>
                        <p>
                            Please click the{" "}
                            <span className="font-bold">
                            &quot;Confirm your email&quot;
                            </span>{" "}
                            button to activate your account.
                        </p>
                    </div>
                </div>

                <div className="w-full h-40 rounded-2xl shadow-inner border  flex items-center justify-center">
                    <div className="w-[270px] h-[120px]">
                        <div className=" w-[270px] h-[64px]">
                            <div className="flex justify-center items-center gap-3 mb-[16px]">
                            <img src={info} className="text-white w-[24px] h-[24px]" alt="info" />
                            <p className="text-sm font-medium w-[173px] h-[24px]">Didn't receive the email?</p>
                            </div>
                            <p className="text-sm font-medium w-full h-[24px]">Check your spam folder or click below</p>
                        </div>

                        <div className="border m-20 flex items-center justify-center rounded-lg bg-[#EEFAFF] shadow-xl mt-[16px] w-[118px] h-[40px]">
                            <Link className="flex items-center justify-center">
                               <input type="submit" 
                               value="Resend email"
                               className="text-[#03A9F4] font-semibold text-sm"
                               /> 
                            </Link>
                        </div>
                    </div>

                    <div>
                    
                    </div>
                    

                </div>
            </div>  
      </div>
    </div>
  );
};

export default EmailVerification;
