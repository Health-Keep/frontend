import React, { useState } from "react";
import { Link } from "react-router-dom";
import avatar from "../../assets/avatars.png";

const RequestAccess = () => {
  const [request, setRequest] = useState(false);
  const handleClick = () => {
    setRequest(true);
  };
  return (
    <div className="flex flex-col items-center justify-center gap-3 w-full min-h-screen pt-[0px]">
      <div className="flex flex-col items-center justify-center w-[150px]">
        <img src={avatar} alt="Patient Avatar" />
        <h1 className="text-[30px] font-[700]">ID: 20101</h1>
      </div>

      <div>
        {request === false ? (
          <div className="flex flex-col items-center justify-center gap-[5px] w-[590px]">
            <div className="flex flex-col items-start justify-center gap-3 p-[10px] w-[570px] h-[60px] rounded-[8px] border-[2px] border-[#f5f5f5] shadow-md ">
              <p className="opacity-40 text-[16px] font-[400] leading-[14px]">
                Full name
              </p>
              <p className="text-[16px] font-[400] leading-[20px]">
                Mary Joseph
              </p>
            </div>

            <button
              onClick={handleClick}
              className="text-white text-[16px] leading-[24px] font-[700] w-[570px] h-[50px] rounded-[8px] border-none bg-[#03A9F4]"
            >
              Request Access
            </button>
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center gap-2">
            <h1 className="text-[20px]">Request Sent successfully</h1>
            <Link
              to="/dashboard"
              className="flex justify-center items-center text-white text-[16px] leading-[24px] font-[700] w-[570px] h-[50px] rounded-[8px] border-none bg-[#03A9F4]"
            >
              Back to dashboard
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default RequestAccess;
