import { Link } from "react-router-dom";
import successIcon from "../../assets/successIcon.png";

const PasswordChanged = () => {
  return (
    <div className="h-full w-full flex items-center justify-center bg-white p-4 sm:p-8">
      <div className="flex items-center justify-center shadow-xl h-[439px] w-[720px] max-w-lg p-8 bg-white rounded">
        <div className="flex flex-col items-center justify-center h-[224px] w-[392px] ">
            <div className="flex flex-col items-center h-[144px] w-[373px] mb-[24px]">
                <img
                src={successIcon}
                className="w-[61px] h-[61px] mb-[16px]"
                alt="successful"
                />

                <div className="text-center ">
                <p className="text-[#1F1F1F] mb-[8px] font-bold text-xl sm:text-2xl">
                    Password Changed
                </p>
                <p className="text-[#1F1F1F] font-normal text-xs sm:text-sm">
                    Your password reset was successful
                </p>
                </div>
            </div>
            <div className="w-full h-12 bg-[#03A9F4] flex items-center justify-center rounded">
                <Link to="/HomePage">
                <input
                    type="submit"
                    className="text-white text-base font-semibold"
                    value="Go back to homepage"
                />
                </Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordChanged;
