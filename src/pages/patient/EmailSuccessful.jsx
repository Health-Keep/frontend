import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const EmailSuccessful = () => {
  const { email } = useAuth();
  return (
    <div className="flex items-center justify-center w-[100%] h-screen">
      <div className="flex flex-col items-center justify-center gap-5 mt-[20px] py-[39px] w-[627px] h-[400px] border-[2px] border-[#EEFAFF] rounded-[8px] shadow-lg">
        <h1 className="text-[24px] font-[700] mb-[40px]">
          Verification successful!
        </h1>
        <p>
          You have now verified <span>{email}</span>
        </p>
        <p className="flex flex-row items-center justify-center gap-2">
          Redirecting to HealthKeep in 6 seconds....{" "}
          <Link to="/" className="text-[#03A9F4]">
            Go to homepage
          </Link>
        </p>
      </div>
    </div>
  );
};

export default EmailSuccessful;
