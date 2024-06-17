import avatar from "../../assets/avatars.png";

const PatientSearchCard = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 w-full pt-[20px]">
      <div className="flex flex-col items-center justify-center w-[150px]">
        <img src={avatar} alt="Patient Avatar" />
        <h1 className="text-[32px] font-[700]">ID: 20101</h1>
      </div>

      <div className="flex flex-col items-center justify-center gap-[10px] w-[590px]">
        <div className="flex flex-col items-start justify-center gap-3 p-[10px] w-[570px] h-[70px] rounded-[8px] border-[2px] border-[#f5f5f5] shadow-md ">
          <p className="opacity-40 text-[16px] font-[400] leading-[14px]">
            Full name
          </p>
          <p className="text-[16px] font-[400] leading-[20px]">Mary Joseph</p>
        </div>
        <div className="flex flex-col items-start justify-center gap-3 p-[10px] w-[570px] h-[70px] rounded-[8px] border-[2px] border-[#f5f5f5] shadow-md">
          <p className="opacity-40 text-[16px] font-[400] leading-[14px]">
            Age
          </p>
          <p className="text-[16px] font-[400] leading-[20px]">28</p>
        </div>
        <div className="flex flex-col items-start justify-center gap-3 p-[10px] w-[570px] h-[70px] rounded-[8px] border-[2px] border-[#f5f5f5] shadow-md">
          <p className="opacity-40 text-[16px] font-[400] leading-[14px]">
            Gender
          </p>
          <p className="text-[16px] font-[400] leading-[20px]">Female</p>
        </div>
        <div className="flex flex-col items-start justify-center gap-3 p-[10px] w-[570px] h-[70px] rounded-[8px] border-[2px] border-[#f5f5f5] shadow-md">
          <p className="opacity-40 text-[16px] font-[400] leading-[14px]">
            Blood Group
          </p>
          <p className="text-[16px] font-[400] leading-[20px]">AB</p>
        </div>
        <div className="flex flex-col items-start justify-center gap-3 p-[10px] w-[570px] h-[70px] rounded-[8px] border-[2px] border-[#f5f5f5] shadow-md">
          <p className="opacity-40 text-[16px] font-[400] leading-[14px]">
            Genotype
          </p>
          <p className="text-[16px] font-[400] leading-[20px]">AA</p>
        </div>
        <button className="text-white text-[16px] leading-[24px] font-[700] w-[570px] h-[50px] rounded-[8px] border-none bg-[#03A9F4]">
          View medical record
        </button>
      </div>
    </div>
  );
};

export default PatientSearchCard;
