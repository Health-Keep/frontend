import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import user from "../../assets/user.png";
import users from "../../assets/users.png";
import shield from "../../assets/shield.png";
import bell from "../../assets/bell.png";
import icon from "../../assets/icon.png";
import role from "../../assets/role.png";
import cal from "../../assets/lead-icon.png";
import Table from "../../components/Table";

const DashBoard = () => {
  const [date, setDate] = useState("");
  const [filter, setFilter] = useState("");

  const handleChange = (event) => {
    setDate(event.target.value);
  };
  const handleFilter = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div className="flex flex-row w-[100%]  min-h-screen">
      <div className="flex flex-col items-start justify-start px-[30px] w-[300px] min-h-screen bg-[#f5f5f5]">
        <div className="flex flex-row items-center justify-start gap-2 w-[50%] h-[120px]">
          <img className="w-[30px] h-[30px]" src={logo} alt="HealthKeep Logo" />
          <h2 className="text-[#021B27] font-[700]">HEALTHKEEP</h2>
        </div>

        <div className="flex flex-col gap-5 mb-[40px]">
          <h1 className="text-[20px] font-[500]">Personal settings</h1>
          <div className="flex flex-col gap-3">
            <button className="flex flex-row items-center justify-start gap-3">
              <img src={user} alt="User" />
              <p className="text-[14px] font-[500] leading-[18px]">
                My account
              </p>
            </button>
            <button className="flex flex-row items-center justify-start gap-3">
              <img src={shield} alt="Security" />
              <p className="text-[14px] font-[500] leading-[18px]">Security</p>
            </button>
            <button className="flex flex-row items-center justify-start gap-3">
              <img src={bell} alt="bell" />
              <p className="text-[14px] font-[500] leading-[18px]">
                Notification
              </p>
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-5 mb-[30px]">
          <h1 className="text-[20px] font-[500]">Organization</h1>
          <div className="flex flex-col gap-3">
            <button className="flex flex-row items-center justify-start gap-3">
              <img src={icon} alt="Workspaces" />
              <p className="text-[14px] font-[500] leading-[18px]">
                Workspaces
              </p>
            </button>
            <button className="flex flex-row items-center justify-start gap-3">
              <img src={users} alt="Patients" />
              <p className="text-[14px] font-[500] leading-[18px]">Patients</p>
            </button>
            <button className="flex flex-row items-center justify-start gap-3">
              <img src={role} alt="Roles" />
              <p className="text-[14px] font-[500] leading-[18px]">Roles</p>
            </button>
          </div>
        </div>
      </div>

      <div className="px-[24px]">
        <input
          className="w-[265px] h-[40px] mt-[15px] mb-[38px] p-[15px] text-[14px] font-[400] bg-[#f5f5f5] rounded-[8px] border-[2px] border-[#a5a5a5] outline-[#f5f5f5] "
          type="search"
          name="search"
          id="search"
          placeholder="&#xF002; Search"
          style={{ fontFamily: "Arial, FontAwesome" }}
        />

        <div>
          <div className="flex flex-row items-center justify-between w-[150px] mt-[0px] mb-[10px]">
            <Link className="opacity-45 hover:opacity-100" to="#">
              <img src={icon} alt="icon" />
            </Link>
            <p className="opacity-45">&gt;</p>
            <Link
              className="text-[12px] font-[400] opacity-45 hover:opacity-100"
              to="#"
            >
              Clients
            </Link>
            <p className="opacity-45">&gt;</p>
            <Link className="text-[12px] font-[400] opacity-100" to="#">
              List
            </Link>
          </div>

          <h1 className="text-[24px] font-[500]">Patients</h1>
        </div>

        <div className="w-[250px] mb-4 flex flex-row gap-2 justify-between items-center">
          <div className="flex flex-row items-center justify-evenly h-[40px] w-[150px] border-[2px] border-[#f5f5f5] bg-[white] drop-shadow-lg rounded-[8px]">
            <img src={cal} alt="calendar" />
            <select
              className="h-[30px] text-[14px] font-[400] border-none outline-none"
              id="dropdown"
              value={date}
              onChange={handleChange}
            >
              <option value="option1">Last 7 days</option>
              <option value="option2">Last month</option>
              <option value="option3">Last 3 months</option>
              <option value="option4">Last 6 months</option>
            </select>
          </div>

          <div className="flex flex-row items-center justify-evenly h-[40px] w-[90px] border-[2px] border-[#f5f5f5] bg-[white] drop-shadow-lg rounded-[8px]">
            <select
              className="h-[30px] text-[14px] font-[400] border-none outline-none"
              id="dropdown"
              value={filter}
              onChange={handleFilter}
            >
              <option value="option1">Filters</option>
              <option value="option2">lorem</option>
              <option value="option3">lorem</option>
              <option value="option4">lorem</option>
            </select>
          </div>
        </div>

        <div className="w-[100%]">
          <Table />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
