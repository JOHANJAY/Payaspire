import { RiDashboardLine, RiNotification3Line, RiChatVoiceLine,RiHardDrive3Fill } from "react-icons/ri";
import { FaRegFileAlt, FaChessBishop } from "react-icons/fa";
import { History } from "lucide-react";
import { HiOutlineScale } from "react-icons/hi";
import { BiSolidChurch } from "react-icons/bi";
import { Link } from "react-router";
import { useLocation } from "react-router";

const Sidebar = () => {

  const location = useLocation()
  const remittance = location.pathname == "/remittance"

  const sidebarHomeItems = [
    {
      icon: <RiDashboardLine />,
      title: "Dashboard",
      subtitle: "Parish Dashboard",
      to: ""
    },
    {
      icon: <FaRegFileAlt />,
      title: "Remittance",
      subtitle: "Track Payment Status",
       to: "/remittance"
    },
    {
      icon: <History />,
      title: "Payment History",
      subtitle: "View Past Payments",
       to: ""
    },
    {
      icon: <HiOutlineScale />,
      title: "Levy",
      subtitle: "Upload receipts",
       to: ""
    },
    {
      icon: <RiNotification3Line />,
      title: "Notifications",
      subtitle: "Alerts & Updates",
       to: ""
    },
    {
      icon: <RiChatVoiceLine />,
      title: "Messages",
      subtitle: "Alerts & Updates",
       to: ""
    },
  ];

  const sidebarRemittanceItems = [
    {
      icon: <FaChessBishop />,
      title: "Executive View",
      subtitle: "Parish Dashboard",
      to: "/"
    },
    {
      icon: <BiSolidChurch />,
      title: "Parish",
      subtitle: "Direct Parish Access",
      to: "/"
    },
    {
      icon: <RiHardDrive3Fill />,
      title: "Payment Reconciliation",
      subtitle: "",
      to: "/"
    },
    {
      icon: <RiChatVoiceLine />,
      title: "Messages",
      subtitle: "Alerts & Updates",
      to: "/"
    },
  ];

  if (remittance) {
    return (
      <div className="w-72 pt-5 h-screen bg-base-blue  space-y-5 text-white">
        {sidebarRemittanceItems.map((item, id) => (
          <Link to={item.to}
            className="flex p-1 gap-1 mx-7 hover:bg-white hover:text-base-blue rounded-lg hover:cursor-pointer"
            key={id}
          >
            <p className="text-xl">{item.icon}</p>
            <div>
              <p className="font-bold  ">{item.title}</p>
              <p className="text-xs">{item.subtitle}</p>
            </div>
          </Link>
        ))}
      </div>
    );
  } else {
    return (
      <div className="w-72 pt-5 h-screen bg-base-blue  space-y-5 text-white">
        {sidebarHomeItems.map((item, id) => (
          <Link to={item.to}
            className="flex p-1 gap-1 mx-7 hover:bg-white hover:text-base-blue rounded-lg hover:cursor-pointer"
            key={id}
          >
            <p className="text-xl">{item.icon}</p>
            <div>
              <p className="font-bold">{item.title}</p>
              <p className="text-xs">{item.subtitle}</p>
            </div>
          </Link>
        ))}
      </div>
    );
  }
};
export default Sidebar;
