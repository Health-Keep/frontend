import React from 'react'
import logo from "../../assets/logo.png";

const PatientProfile = () => {
  return (
    <div className="w-full h-full ">
      <div className="gap-1 flex items-center pl-10 pt-10">
            <img src={logo} className="w-[28px] h-[28px]" alt="logo" />
            <p className="h-[14px] w-[72px] text-[#021B27] font-bold text-xs uppercase">
            Healthkeep
            </p>
      </div>

    </div>
  )
}

export default PatientProfile