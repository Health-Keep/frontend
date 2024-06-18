import { Link } from "react-router-dom";
import { MdOutlineEmail } from "react-icons/md";

const ForgotPassword = () => {
  return (
    <div className="flex justify-center items-center min-h-screen p-4 sm:p-8">
      <div className="w-full max-w-md bg-white shadow-2xl rounded-lg p-6">
        <h2 className="mb-6 text-[#2E2E2E] font-bold text-lg sm:text-xl">Reset your password</h2>

        <div>
          <div className="text-[#1F1F1F] font-normal text-sm">
            <p>Email</p>
            <div className="shadow-md flex gap-2 items-center w-full h-10 p-2 border rounded">
              <MdOutlineEmail className="w-5 h-5" />
              <input
                type="email"
                className="w-full border-none focus:outline-none"
                required
              />
            </div>

            <Link to="/Email">
              <button className="w-full h-10 mt-6 text-white text-sm font-semibold flex items-center justify-center bg-[#03A9F4] rounded">
                Send email to reset password
              </button>
            </Link>
          </div>

          <div className="flex font-normal text-xs gap-1 items-center justify-center mt-6">
            <p>Return to</p>
            <Link to="/Patient-Login" className="text-[#03A9F4]">Log In</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
