import { TbCurrencyNaira } from "react-icons/tb";
import { AiOutlineWarning } from "react-icons/ai";
import { CiCircleCheck } from "react-icons/ci";
import { BiFilterAlt } from "react-icons/bi";
import { GoChevronDown } from "react-icons/go";
import { History } from "lucide-react";
import { MdOutlineCalendarToday } from "react-icons/md";
import { RiErrorWarningLine,  RiTimeLine  } from "react-icons/ri";
import { IoEyeOutline } from "react-icons/io5";

const Dashboard = () => {
  const cashData = [
    {
      label: "Total Outstanding",
      detail: "300,000",
      icon: <TbCurrencyNaira />,
      iconColor: "text-[#D80202]",
      iconBg: "bg-[#D802021A]",
    },
    {
      label: "Total Paid",
      detail: "430,000",
      icon: <TbCurrencyNaira />,
      iconColor: "text-[#000073]",
      iconBg: "bg-[#2539F21F]",
    },
    {
      label: "Overdue Items",
      detail: "1",
      icon: <AiOutlineWarning />,
      iconColor: "text-[#D80202]",
      iconBg: "bg-[#D802021A]",
    },
    {
      label: "Paid this Month",
      detail: "1/",
      detail2: "4",
      icon: <CiCircleCheck />,
      detail2Color: "text-[#D80202]",
      iconColor: "text-[#158815]",
      iconBg: "bg-[#34EB3433]",
    },
  ];

  const dashboardDetails = [
    {
      icon: <History className="w-5" />,
      title: "September Week 2 (8th-14th September) 2025",
      status: "Pending",
      btn: "Submit Report",
      btnColor: "bg-[#fff]",
      iconColor: "text-[#000073]",
      statusColor: "bg-[#000073]",
      cardBg: "bg-[#2539F21F]",
      details: {
        text1: "Total Income",
        text2: "Tax Due",
        text3: "Projects",
        text4: "Month",
        value1: "000000",
        value2: "00000",
        value3: "00000",
        value4: "September 2025",
        value4Icon: <MdOutlineCalendarToday />,
        valueColor: "text-gray-500",
        value4Color: "text-black",
        valueWeight: "font-bold"
      },
    },
    {
      icon: <RiErrorWarningLine className="text-xl" />,
      title: "September Week 1 (1st -7th September) 2025",
      title2: "(Outstanding)",
      status: "Pending",
      btn: "Make Payment",
      btnColor: "bg-[#fff]",
      iconColor: "text-[#D80202]",
      statusColor: "bg-[#D80202]",
      cardBg: "bg-[#D802021A]",
      details: {
        text1: "Total Income",
        text2: "Tax Due",
        text3: "Projects",
        text4: "Month",
        value1: "500000",
        value2: "220,000",
        value3: "80,000",
        value4: "September 2025",
        valueIcon: <TbCurrencyNaira />,
        value4Icon: <MdOutlineCalendarToday />,
        valueColor: "text-black",
        value2Color:"text-[#D80202]" ,
        value4Color: "text-black",
        valueWeight: "font-normal"

      },
    },
    {
      icon: <CiCircleCheck className="text-xl" />,
      title: "August Week 4 (25th-31st August) 2025",
      status: "Paid",
      btn: "Details",
      btnIcon: <IoEyeOutline />,
      btnColor: "bg-[#fff]",
      iconColor: "text-[#158815]",
      statusColor: "bg-[#158815]",
      cardBg: "bg-[#34EB3433]",
      details: {
        text1: "Total Income",
        text2: "Tax Due",
        text3: "Projects",
        text4: "Month",
        value1: "500000",
        value2: "210,000",
        value3: "120,000",
        value4: "August 2025",
        valueIcon: <TbCurrencyNaira />,
        value4Icon: <MdOutlineCalendarToday />,
        valueColor: "text-black",
        value2Color:"text-[#D80202]" ,
        value4Color: "text-black",
        valueWeight: "font-normal"

      },
    },
    {
      icon: < RiTimeLine  className="text-xl" />,
      title: "August Week 3 (18th-24th August) 2025",
      status: "Processing",
      btn: "Details",
      btnIcon: <IoEyeOutline />,
      btnColor: "bg-[#fff]",
      iconColor: "text-[#9A9A0B]",
      statusColor: "bg-[#9A9A0B]",
      cardBg: "bg-[#FFFFBF66]",
      details: {
        text1: "Total Income",
        text2: "Tax Due",
        text3: "Projects",
        text4: "Month",
        value1: "500000",
        value2: "500,000",
        value3: "500,000",
        value4: "August 2025",
        valueIcon: <TbCurrencyNaira />,
        value4Icon: <MdOutlineCalendarToday />,
        valueColor: "text-black",
        value2Color:"text-[#D80202]" ,
        value4Color: "text-black",
        valueWeight: "font-normal"

      },
    },
  ];

  return (
    <div className="w-full ml-5 mr-1 h-screen overflow-auto no-scrollbar pb-20">
      <div className="flex space-x-5 mt-5 justify-between">
        {cashData.map((data, id) => (
          <div
            key={id}
            className="border border-gray-200 flex items-center justify-between w-52 p-2 rounded-md "
          >
            <div>
              <p className="text-sm">{data.label}</p>
              <p className={`font-bold ${data.iconColor}`}>
                {data.detail}
                <span className={`${data.detail2Color}`}>
                  {data.detail2}
                </span>
              </p>
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
      <section className="border px-3 py-4.5 my-5 rounded border-gray-200">
        <div className="flex gap-5 pb-4">
            <p className="text-base-blue border-b-2 off ">All</p>
            <p className="relative text-red-600">Overdue <span className="px-1.5 py absolute top-0 left-15 rounded-full bg-red-600 text-white text-xs">1</span></p>
            <p className="text-green-700">Paid</p>
            <p className="relative text-lime-900">Processing <span className="px-1.5  absolute top-0 left-19 rounded-full bg-red-600 text-white text-xs">3</span></p>
        </div>
        {dashboardDetails.map((detail, id) => (
          <div className={`${detail.cardBg} p-3 mb-3 rounded-lg`} key={id}>
            <div className="flex justify-between pb-2">
              <div className="flex items-center space-x-2.5 text-sm">
                <p className={`${detail.iconColor}`}>{detail.icon}</p>
                <p>{detail.title} <span className={`${detail.iconColor}`}>{detail.title2}</span></p>
                <p className={`${detail.statusColor} px-2 py-1 text-white rounded-lg text-sm`}>{detail.status}</p>
              </div>
              <p className="px-2 py-1 bg-white rounded-lg flex items-center gap-1">{detail.btnIcon}{detail.btn}</p>
            </div>
            <div className="flex gap-10">
                <div>
                    <p className="text-gray-400">{detail.details.text1}</p>
                    <p className={`${detail.details.valueColor} font-bold flex items-center`}>{detail.details.valueIcon}{detail.details.value1}</p>
                </div>
                <div>
                    <p className="text-gray-400">{detail.details.text2}</p>
                    <p className={`${detail.details.value2Color} ${detail.details.valueWeight} flex items-center`}>{detail.details.valueIcon}{detail.details.value2}</p>
                </div>
                <div>
                    <p className="text-gray-400">{detail.details.text3}</p>
                    <p className={`${detail.details.valueColor} ${detail.details.valueWeight} flex items-center`}>{detail.details.valueIcon}{detail.details.value3}</p>
                </div>
                <div>
                    <p className="text-gray-400">{detail.details.text4}</p>
                    <p className={`${detail.details.value4Color} font-bold flex items-center gap-1.5`}>{detail.details.value4Icon}{detail.details.value4}</p>
                </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};
export default Dashboard;
