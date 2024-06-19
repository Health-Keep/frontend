import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const MedicalRecordCard = () => {
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleText = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = () => {
    navigate("/medhistory");
  };
  return (
    <div className="flex flex-col items-start justify-center gap-3 w-full min-h-screen p-[80px]">
      <div className="flex justify-center items-center w-full mb-[80px]">
        <div className="flex flex-col justify-center items-start gap-4 min-w-[1000px]">
          <h1 className="text-[32px] font-[400]">ID: 01442 - Dolapo Aina</h1>
          <table className="w-[300px] h-[180px] flex flex-col gap-3 p-3 border-2 border-[#f5f5f5] shadow-lg">
            <tr className="text-[16px] font-[700] flex flex-row justify-start items-center gap-5">
              <th className="w-[60px] text-start">BP:</th>
              <td>90/70</td>
            </tr>
            <tr className="text-[16px] font-[700] flex flex-row justify-start items-center gap-5">
              <th className="w-[60px] text-start">Pulse:</th>
              <td>25</td>
            </tr>
            <tr className="text-[16px] font-[700] flex flex-row justify-start items-center gap-5">
              <th className="w-[60px] text-start">Weight:</th>
              <td>50kg</td>
            </tr>
            <tr className="text-[16px] font-[700] flex flex-row justify-start items-center gap-5">
              <th className="w-[60px] text-start">Temp:</th>
              <td>36 &deg;C</td>
            </tr>
          </table>
        </div>
      </div>

      <div className="flex justify-center items-center w-full">
        <form className="flex flex-col items-center justify-center min-w-[1000px] h-full">
          <input
            type="text"
            value={title}
            onChange={handleTitle}
            placeholder="Title"
            className="text-[18px] font-[700] h-[50px] w-full placeholder:text-gray-600 text-center border-none outline-none"
          />
          <textarea
            className="w-[100%] min-h-[700px] border-2 rounded-[8px] p-[30px] bg-gray-100 border-[#f5f5f5] outline-[#f5f5f5] shadow-lg placeholder:text-gray-600"
            id="report"
            value={text}
            onChange={handleText}
            rows="5"
            cols="33"
            placeholder="Report..."
          />
          <button
            onClick={handleSubmit}
            className="flex justify-center items-center text-white text-[16px] leading-[24px] font-[700] w-[300px] h-[50px] rounded-[8px] border-none bg-[#03A9F4] my-[20px]"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default MedicalRecordCard;
