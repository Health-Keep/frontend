import envelop from "../../assets/envelope.png";
import circle from "../../assets/circle.png";
import logo from "../../assets/logo.png";
import { useAuth } from "../../context/AuthContext";

const VerifyEmail = () => {
  const { email } = useAuth();
  return (
    <div className="flex items-center justify-center w-[100%] h-screen">
      <div className="absolute top-0 left-10 flex flex-row items-center justify-start gap-2 w-[50%] h-[120px]">
        <img className="w-[30px] h-[30px]" src={logo} alt="HealthKeep Logo" />
        <h2 className="text-[#021B27] font-[700]">HEALTHKEEP</h2>
      </div>
      <div className="flex flex-col items-center justify-center w-[637px] h-[427px]">
        <div className="flex flex-col items-center justify-center gap-2 w-[100%] h-[50%]">
          <img src={envelop} alt="Envelop" />
          <h2 className="text-[24px] font-[700] text-[#2E2E2E] mt-[10px] mb-[40px]">
            Verify your email address
          </h2>
          <div className="flex flex-col items-center justify-center gap-[16px] w-[100%] h-[100%]">
            <p>
              We sent a confirmation email to{" "}
              <span className="font-bold">{email}</span>
            </p>
            <p>
              Please click the{" "}
              <span className="font-bold">&quot;Confirm your email&quot;</span>{" "}
              button to activate your account.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-5 mt-[20px] py-[39px] w-[100%] h-[50%] border-[2px] border-[#EEFAFF] rounded-[8px] shadow-lg">
          <div className="flex items-center justify-center gap-2">
            <img src={circle} alt="info" />
            <p className="text-[16px] font-[400]">
              Didn&apos;t receive the email?
            </p>
          </div>
          <p className="text-[16px] font-[400]">
            Check your spam folder or click below
          </p>
          <button className="w-[150px] h-[50px] px-[18px] py-[10px] text-[16px] font-[600] text-[#03A9F4] bg-[#d3e2e9] border-2 border-[#03A9F4] rounded-[8px] drop-shadow-xl">
            Resend email
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
