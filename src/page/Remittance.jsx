import Nav from "../component/Nav";
import { LuCalendarDays } from "react-icons/lu";
import { TbCurrencyNaira } from "react-icons/tb";
import { FaRegFileAlt } from "react-icons/fa";
import { GoChevronDown } from "react-icons/go";
import { BiFilterAlt } from "react-icons/bi";
import BarChart from "../component/BarChart";
import Table from "../component/Table";

const Remittance = () => {
  const cashData = [
    {
      label: "Month",
      detail: "September",
      icon: <LuCalendarDays />,
      iconColor: "text-[#6984F2]",
      iconBg: "bg-[#6984F233]"
    },
    {
      label: "Income Reported",
      detail: "1,850,000",
      icon: <TbCurrencyNaira />,
      iconColor: "text-[#000073]",
       iconBg: "bg-[#2539F21F]"
    },
    {
      label: "Project Tax",
      detail: "925,000",
      icon: <TbCurrencyNaira />,
       iconColor: "text-[#000073]",
       iconBg: "bg-[#2539F21F]"
    },
    {
      label: "Chancery Tax",
      detail: "925,000",
      icon: <TbCurrencyNaira />,
       iconColor: "text-[#000073]",
       iconBg: "bg-[#2539F21F]"
    },
    {
      label: "Records Found",
      detail: "4",
      icon: <FaRegFileAlt />,
       iconColor: "text-[#8937ED]",
       iconBg: "bg-[#8937ED1F]"
    },
  ];

  return (
    <div className="w-full mx-5 h-screen overflow-auto no-scrollbar mb-20">
      <Nav />
      <div className="flex space-x-5 mt-5 justify-between">
        {cashData.map((data, id) => (
          <div
            key={id}
            className="border border-gray-200 flex items-center justify-between w-44 p-2 rounded-md "
          >
            <div>
              <p className="text-sm">{data.label}</p>
              <p className="font-bold">{data.detail}</p>
            </div>
            <p
              className={`text-xl ${data.iconColor} p-2 rounded-full ${data.iconBg}`}
            >
              {data.icon}
            </p>
          </div>
        ))}
      </div>
      <div className="flex justify-end">
        <div className="inline-flex items-center mt-5 space-x-3 py-1 pr-4 pl-1.5 border border-gray-200 rounded-lg ">
          <BiFilterAlt className="text-xl" />
          <p className="text-xs">Month</p>
          <GoChevronDown />
        </div>
      </div>
      <BarChart />
      <Table />
    </div>
  );
};
export default Remittance;
